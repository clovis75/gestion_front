import React, { useEffect, useState } from 'react'

interface Produit {
  id: string;
  name: string;
  sku: string;
  category: string;
  status: string;
  price: number;
  cost: number;
  stock: number;
  description: string;
  createdAt: string;
}

interface Filters {
  search: string;
  category: string;
  status: string;
  stock: string;
  sortBy: string;
}
const produit = () => {
  const [produits, setProduits] = React.useState<Produit[]>([]);
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const [filters, setFilters] = React.useState<Filters>({
    search: '',
    category: 'Toutes',
    status: 'Tous',
    stock: 'Tous',
    sortBy: 'Récent',
  });

  //form State
  const [formData, setFormData] = useState({
    name: '',
    sku: '',
    category: '',
    status: '',
    price: 0,
    cost: 0,
    stock: 0,
    description: '',
  });

  //  Load Produits on mount
  useEffect(() => {
    const mokProduits: Produit[] = [
      {
        id: '1',
        name: 'Laptop Pro',
        sku: 'LAP-001',
        category: 'Électronique',
        status: 'Actif',
        price: 1299.99,
        cost: 899.99,
        stock: 25,
        description: 'Ordinateur portable haute performance',
        createdAt: new Date().toISOString()
      },
      {
        id: '2',
        name: 'Souris Sans Fil',
        sku: 'ACC-002',
        category: 'Accessoires',
        status: 'Actif',
        price: 29.99,
        cost: 15.99,
        stock: 3,
        description: 'Souris ergonomique sans fil',
        createdAt: new Date().toISOString()
      },
      {
        id: '2',
        name: 'Souris Sans Fil',
        sku: 'ACC-002',
        category: 'Accessoires',
        status: 'Actif',
        price: 29.99,
        cost: 15.99,
        stock: 3,
        description: 'Souris ergonomique sans fil',
        createdAt: new Date().toISOString()
      },
      {
        id: '2',
        name: 'Souris Sans Fil',
        sku: 'ACC-002',
        category: 'Accessoires',
        status: 'Actif',
        price: 29.99,
        cost: 15.99,
        stock: 3,
        description: 'Souris ergonomique sans fil',
        createdAt: new Date().toISOString()
      },
      {
        id: '2',
        name: 'Souris Sans Fil',
        sku: 'ACC-002',
        category: 'Accessoires',
        status: 'Actif',
        price: 29.99,
        cost: 15.99,
        stock: 3,
        description: 'Souris ergonomique sans fil',
        createdAt: new Date().toISOString()
      },
      {
        id: '3',
        name: 'Casque Audio',
        sku: 'AUD-003',
        category: 'Audio',
        status: 'Actif',
        price: 149.99,
        cost: 89.99,
        stock: 0,
        description: 'Casque à réduction de bruit',
        createdAt: new Date().toISOString()

      },
      {
        id: '3',
        name: 'Casque Audio',
        sku: 'AUD-003',
        category: 'Audio',
        status: 'Actif',
        price: 149.99,
        cost: 89.99,
        stock: 0,
        description: 'Casque à réduction de bruit',
        createdAt: new Date().toISOString()
      },
      {
        id: '3',
        name: 'Casque Audio',
        sku: 'AUD-003',
        category: 'Audio',
        status: 'Actif',
        price: 149.99,
        cost: 89.99,
        stock: 0,
        description: 'Casque à réduction de bruit',
        createdAt: new Date().toISOString()
      }
    ];
    setProduits(mokProduits);
  }, []);

  // filtrer et trier les produits
  const getFilteredProducts = () => {
    let filtered = [...produits];

    if (filters.search) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        p.sku.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    if (filters.category !== 'Toutes') {
      filtered = filtered.filter(p => p.category === filters.category);
    }

    if (filters.status !== 'Tous') {
      filtered = filtered.filter(p => p.status === filters.status);
    }

    if (filters.stock !== 'Tous') {
      if (filters.stock === 'En rupture') {
        filtered = filtered.filter(p => p.stock === 0);
      } else if (filters.stock === 'Stock faible') {
        filtered = filtered.filter(p => p.stock > 0 && p.stock <= 5);
      } else if (filters.stock === 'En stock') {
        filtered = filtered.filter(p => p.stock > 5);
      }
    }

    if (filters.sortBy === 'Nom (A-Z)') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (filters.sortBy === 'Nom (Z-A)') {
      filtered.sort((a, b) => b.name.localeCompare(a.name));
    } else if (filters.sortBy === 'Prix (Croissant)') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === 'Prix (Décroissant)') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (filters.sortBy === 'stock (Croissant)') {
      filtered.sort((a, b) => a.stock - b.stock);
    } else if (filters.sortBy === 'stock (Décroissant)') {
      filtered.sort((a, b) => b.stock - a.stock);
    } else if (filters.sortBy === 'Récent') {
      filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }
    return filtered;
  }

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.sku) return;

    const newProduct: Produit = {
      id: Date.now().toString(),
      ...formData,
      createdAt: new Date().toISOString()
    };
    setProduits([...produits, newProduct]);
    setIsModalOpen(false);
    setFormData({
      name: '',
      sku: '',
      category: 'Électronique',
      status: 'Actif',
      price: 0,
      cost: 0,
      stock: 0,
      description: ''
    });
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Supprimer ce produit ?')) {
      setProduits(produits.filter(p => p.id !== id));
    }
  };

  const handleEdit = (id: string) => {
    const product = produits.find(p => p.id === id);
    if (!product) return;
    const newName = window.prompt('Nom du produit', product.name);
    if (newName) {
      setProduits(produits.map(p =>
        p.id === id ? { ...p, name: newName } : p
      ));
    }
  };

  const getStockBadge = (stock: number) => {
    if (stock === 0) {
      return <span className="inline-block px-3 py-1 rounded-full text-sm font-bold text-black">0</span>;
    } else if (stock <= 5) {
      return <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-orange-100 text-orange-700">{stock}</span>;
    } else {
      return <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-700">{stock}</span>;
    }
  };

  const filteredProducts = getFilteredProducts();
  return (
    <div className='bg-gray-50 min-h-screen'>
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
      <div className="px-8 py-6">
      <div className='flex items-center justify-between mb-8'>
        <div>
          <h1 className='text-4xl font-bold text-gray-900 mb-2'>Gestion des produits</h1>
          <p className='text-gray-600'>Gérer votre catalogue de produits</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
        >
          <span className="text-lg">+</span>
          Ajouter un Produit
        </button>
      </div>

      <div className='bg-white p-6 rounded-xl p-6 shadow-md mb-8'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
          <div>
            <label className='block text-sm font-semibold text-gray-700 mb-2'>Catégorie</label>
            <select className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus-border-blue-500'>
              <option value="">Toutes</option>
              <option value="">Electronique</option>
              <option value="">Accessoire</option>
              <option value="">Audio</option>
            </select>
          </div>
          <div>
            <label className='block text-sm font-semibold text-gray-700 mb-2'>Statut</label>
            <select className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus-border-blue-500'>
              <option value="">Tous</option>
              <option value="">Actif</option>
              <option value="">Inactif</option>
            </select>
          </div>
          <div>
            <label className='block text-sm font-semibold text-gray-700 mb-2'>Stock</label>
            <select className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus-border-blue-500'>
              <option value="">Tous</option>
              <option value="">En rupture</option>
              <option value="">Stock faible</option>
              <option value="">En stock</option>
            </select>
          </div>
          <div>
            <label className='block text-sm font-semibold text-gray-700 mb-2'>Trier par</label>
            <select className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus-border-blue-500'>
              <option value="">Récent</option>
              <option value="">Nom (A-Z)</option>
              <option value="">Nom (Z-A)</option>
              <option value="">Prix (Croissant)</option>
              <option value="">Prix (Décroissant)</option>
              <option value="">stock (Croissant)</option>
              <option value="">stock (Décroissant)</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-blue-100 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Produit</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Catégorie</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Prix</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Coût</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Stock</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Statut</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredProducts.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-8 text-center text-gray-500">
                    Aucun produit trouvé. Essayez de modifier vos filtres.
                  </td>
                </tr>
              ) : (
                filteredProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                          <span className="text-blue-600">📦</span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{product.name}</p>
                          <p className="text-xs text-gray-600">SKU: {product.sku}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-700">{product.category}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-bold text-gray-900">${product.price.toLocaleString()}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-700">${product.cost.toLocaleString()}</span>
                    </td>
                    <td className="px-6 py-4">{getStockBadge(product.stock)}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${product.status === 'Actif'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-700'
                        }`}>
                        {product.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleEdit(product.id)}
                          className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
                        >
                          ✏️
                        </button>
                        <button
                          onClick={() => handleDelete(product.id)}
                          className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
                        >
                          🗑️
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
        <p className="text-sm text-gray-600">
          Affichage 1 à {filteredProducts.length} de {filteredProducts.length} produits
        </p>
        <div className="flex items-center gap-2">
          <button className="px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors">
            Précédent
          </button>
          <button className="px-3 py-2 rounded-lg bg-blue-600 text-white">1</button>
          <button className="px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors">
            Suivant
          </button>
        </div>
      </div>

      {
        isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setIsModalOpen(false)}>
            <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900">Ajouter un Produit</h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Nom du Produit</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ex: Laptop Pro"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">SKU</label>
                    <input
                      type="text"
                      value={formData.sku}
                      onChange={(e) => setFormData({ ...formData, sku: e.target.value })}
                      placeholder="Ex: LAP-001"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Catégorie</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    >
                      <option>Électronique</option>
                      <option>Accessoires</option>
                      <option>Audio</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Statut</label>
                    <select
                      value={formData.status}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    >
                      <option>Actif</option>
                      <option>Inactif</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Prix ($)</label>
                    <input
                      type="number"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) || 0 })}
                      placeholder="0.00"
                      step="0.01"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Coût ($)</label>
                    <input
                      type="number"
                      value={formData.cost}
                      onChange={(e) => setFormData({ ...formData, cost: parseFloat(e.target.value) || 0 })}
                      placeholder="0.00"
                      step="0.01"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Stock</label>
                    <input
                      type="number"
                      value={formData.stock}
                      onChange={(e) => setFormData({ ...formData, stock: parseInt(e.target.value) || 0 })}
                      placeholder="0"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Description du produit..."
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Annuler
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="flex-1 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
                  >
                    Ajouter
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      }
      </div>
    </div >
  )
}

export default produit
