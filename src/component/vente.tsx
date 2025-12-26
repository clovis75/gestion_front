import React, { useEffect, useState } from 'react'

// Types
interface Sale {
  id: string;
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  products: string;
  amount: number;
  date: string;
  status: 'Complétée' | 'En attente' | 'Annulée';
}

interface SaleItem {
  productId: string;
  productName: string;
  quantity: number;
  price: number;
}

const vente = () => {
  const [sales, setSales] = useState<Sale[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [stats, setStats] = useState({
    totalAmount: 0,
    totalCount: 0,
    avgBasket: 0
  });

  // Form state
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    discount: 0
  });

  const [cartItems, setCartItems] = useState<SaleItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [quantity, setQuantity] = useState(1);

  // Mock products
  const products = [
    { id: '1', name: 'Laptop Pro 15"', price: 1299 },
    { id: '2', name: 'Casque Audio', price: 299 },
    { id: '3', name: 'Clavier Mécanique', price: 149 },
    { id: '4', name: 'Souris Wireless', price: 29 }
  ];

  // Load sales on mount
  useEffect(() => {
    const mockSales: Sale[] = [
      {
        id: '1',
        orderNumber: '#2024-001',
        customerName: 'Jean Dupont',
        customerEmail: 'jean@email.com',
        products: 'Laptop Pro 15" (1x)',
        amount: 1299,
        date: '28/11/2024',
        status: 'Complétée'
      },
      {
        id: '2',
        orderNumber: '#2024-002',
        customerName: 'Marie Martin',
        customerEmail: 'marie@email.com',
        products: 'Casque Audio (1x), Clavier (1x)',
        amount: 448,
        date: '27/11/2024',
        status: 'Complétée'
      },
      {
        id: '3',
        orderNumber: '#2024-003',
        customerName: 'Pierre Leclerc',
        customerEmail: 'pierre@email.com',
        products: 'Souris Wireless (3x)',
        amount: 87,
        date: '26/11/2024',
        status: 'En attente'
      },
      {
        id: '4',
        orderNumber: '#2024-004',
        customerName: 'Sophie Durand',
        customerEmail: 'sophie@email.com',
        products: 'Écran 4K (2x)',
        amount: 998,
        date: '25/11/2024',
        status: 'Complétée'
      }
    ];
    setSales(mockSales);
    calculateStats(mockSales);
  }, []);

  const calculateStats = (salesData: Sale[]) => {
    const totalAmount = salesData.reduce((sum, sale) => sum + sale.amount, 0);
    const totalCount = salesData.length;
    const avgBasket = totalCount > 0 ? totalAmount / totalCount : 0;
    setStats({ totalAmount, totalCount, avgBasket });
  };

  const addToCart = () => {
    if (!selectedProduct) return;

    const product = products.find(p => p.id === selectedProduct);
    if (!product) return;

    const existingItem = cartItems.find(item => item.productId === product.id);

    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.productId === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      setCartItems([...cartItems, {
        productId: product.id,
        productName: product.name,
        quantity,
        price: product.price
      }]);
    }

    setSelectedProduct('');
    setQuantity(1);
  };

  const removeFromCart = (productId: string) => {
    setCartItems(cartItems.filter(item => item.productId !== productId));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const discount = (subtotal * formData.discount) / 100;
    return subtotal - discount;
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();

    if (!formData.customerName || cartItems.length === 0) {
      alert('Veuillez renseigner le client et ajouter des produits');
      return;
    }

    const productsText = cartItems.map(item => `${item.productName} (${item.quantity}x)`).join(', ');
    const newSale: Sale = {
      id: Date.now().toString(),
      orderNumber: `#2024-${String(sales.length + 1).padStart(3, '0')}`,
      customerName: formData.customerName,
      customerEmail: formData.customerEmail,
      products: productsText,
      amount: calculateTotal(),
      date: new Date().toLocaleDateString('fr-FR'),
      status: 'Complétée'
    };

    const updatedSales = [newSale, ...sales];
    setSales(updatedSales);
    calculateStats(updatedSales);

    // Reset form
    setFormData({ customerName: '', customerEmail: '', discount: 0 });
    setCartItems([]);
    setIsModalOpen(false);
  };

  const getStatusBadge = (status: Sale['status']) => {
    const styles = {
      'Complétée': 'bg-green-100 text-green-700',
      'En attente': 'bg-yellow-100 text-yellow-700',
      'Annulée': 'bg-red-100 text-red-700'
    };
    return <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${styles[status]}`}>{status}</span>;
  };
  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-10">
        <div className="px-8 py-4 flex items-center justify-between">
          {/* <div className="flex items-center gap-4 flex-1"> */}
          <div className="flex flex-1 justify-center">
            <div className="hidden md:flex items-center gap-2 flex-1 max-w-md rounded-lg px-4 py-2 border border-gray-300 bg-gray-50 ml-8">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Rechercher..."
                className="bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400 w-full"
              />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button className="relative p-2 text-gray-500 hover:text-blue-600 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            </button>
          </div>
        </div>
      </header>
      {/* Header */}
      <div className="px-8 py-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Gestion des Ventes</h1>
            <p className="text-gray-600">Enregistrez et suivez vos ventes</p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
          >
            <span className="text-lg">+</span>
            Nouvelle Vente
          </button>
        </div>

        {/* Sales Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-500">
            <p className="text-gray-600 text-sm font-medium mb-2">Total Ventes Mois</p>
            <h3 className="text-3xl font-bold text-gray-900">${stats.totalAmount.toLocaleString()}</h3>
            <p className="text-green-600 text-xs font-semibold mt-2">↑ 12% vs mois dernier</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-500">
            <p className="text-gray-600 text-sm font-medium mb-2">Nombre Ventes</p>
            <h3 className="text-3xl font-bold text-gray-900">{stats.totalCount}</h3>
            <p className="text-emerald-600 text-xs font-semibold mt-2">↑ 8% vs mois dernier</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-500">
            <p className="text-gray-600 text-sm font-medium mb-2">Panier Moyen</p>
            <h3 className="text-3xl font-bold text-gray-900">${stats.avgBasket.toFixed(2)}</h3>
            <p className="text-teal-600 text-xs font-semibold mt-2">↑ 5% vs mois dernier</p>
          </div>
        </div>

        {/* Sales Table */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-blue-100 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">N° Commande</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Client</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Produits</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Montant</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Statut</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {sales.map((sale) => (
                  <tr key={sale.id} className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4">
                      <span className="font-bold text-gray-900">{sale.orderNumber}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-semibold text-gray-900">{sale.customerName}</p>
                        <p className="text-xs text-gray-600">{sale.customerEmail}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-700">{sale.products}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-bold text-gray-900">${sale.amount.toLocaleString()}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-700">{sale.date}</span>
                    </td>
                    <td className="px-6 py-4">{getStatusBadge(sale.status)}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors" title="Voir détails">
                          👁️
                        </button>
                        <button className="p-2 text-purple-600 hover:bg-purple-100 rounded-lg transition-colors" title="Imprimer facture">
                          🖨️
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
            <p className="text-sm text-gray-600">Affichage 1 à {sales.length} de {sales.length} ventes</p>
            <div className="flex items-center gap-2">
              <button className="px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-blue-100 transition-colors">
                Précédent
              </button>
              <button className="px-3 py-2 rounded-lg bg-blue-600 text-white">1</button>
              <button className="px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-blue-100 transition-colors">
                Suivant
              </button>
            </div>
          </div>
        </div>

        {/* New Sale Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto p-4" onClick={() => setIsModalOpen(false)}>
            <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full my-8" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between p-6 border-b border-gray-200 sticky top-0 bg-white rounded-t-xl">
                <h2 className="text-2xl font-bold text-gray-900">Nouvelle Vente</h2>
                <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-gray-700 text-2xl">×</button>
              </div>

              <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
                {/* Client Section */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Informations Client</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Nom Client</label>
                      <input
                        type="text"
                        value={formData.customerName}
                        onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                        placeholder="Ex: Jean Dupont"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        value={formData.customerEmail}
                        onChange={(e) => setFormData({ ...formData, customerEmail: e.target.value })}
                        placeholder="client@email.com"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Products Section */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Produits</h3>

                  {/* Add Product Form */}
                  <div className="flex gap-3 items-end mb-4">
                    <div className="flex-1">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Produit</label>
                      <select
                        value={selectedProduct}
                        onChange={(e) => setSelectedProduct(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      >
                        <option value="">Sélectionner un produit</option>
                        {products.map(product => (
                          <option key={product.id} value={product.id}>
                            {product.name} - ${product.price}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="w-24">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Quantité</label>
                      <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                        min="1"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <button
                      onClick={addToCart}
                      type="button"
                      className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors h-10 px-4"
                    >
                      +
                    </button>
                  </div>

                  {/* Cart Items */}
                  {cartItems.length > 0 && (
                    <div className="border border-gray-200 rounded-lg p-4 space-y-2">
                      {cartItems.map(item => (
                        <div key={item.productId} className="flex justify-between items-center bg-gray-50 p-3 rounded">
                          <div>
                            <p className="font-semibold text-gray-900">{item.productName}</p>
                            <p className="text-sm text-gray-600">Quantité: {item.quantity} × ${item.price}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="font-bold text-gray-900">${(item.price * item.quantity).toFixed(2)}</span>
                            <button
                              onClick={() => removeFromCart(item.productId)}
                              className="text-red-600 hover:bg-red-100 p-2 rounded"
                            >
                              🗑️
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Payment Section */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Paiement</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Sous-total</label>
                      <input
                        type="text"
                        value={`$${calculateSubtotal().toFixed(2)}`}
                        disabled
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Remise (%)</label>
                      <input
                        type="number"
                        value={formData.discount}
                        onChange={(e) => setFormData({ ...formData, discount: parseFloat(e.target.value) || 0 })}
                        min="0"
                        max="100"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Total</label>
                      <input
                        type="text"
                        value={`$${calculateTotal().toFixed(2)}`}
                        disabled
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 font-bold text-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 p-6 border-t border-gray-200 bg-gray-50 rounded-b-xl">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Annuler
                </button>
                <button
                  onClick={handleSubmit}
                  className="flex-1 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
                >
                  Enregistrer Vente
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div >
  );
}

export default vente
