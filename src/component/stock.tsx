import React, { useEffect, useState } from 'react'

// Types
interface StockMovement {
  id: string;
  productName: string;
  type: 'Vente' | 'Réapprov.' | 'Ajustement' | 'Retour';
  quantity: number;
  stockBefore: number;
  stockAfter: number;
  date: string;
}

interface StockStats {
  lowStock: number;
  outOfStock: number;
  totalValue: number;
}

const stock = () => {
  const [movements, setMovements] = useState<StockMovement[]>([]);
  const [stats, setStats] = useState<StockStats>({
    lowStock: 0,
    outOfStock: 0,
    totalValue: 0
  });

  // Load stock data on mount
  useEffect(() => {
    const mockMovements: StockMovement[] = [
      {
        id: '1',
        productName: 'Laptop Pro 15"',
        type: 'Vente',
        quantity: -1,
        stockBefore: 46,
        stockAfter: 45,
        date: '28/11/2024 14:30'
      },
      {
        id: '2',
        productName: 'Clavier Mécanique',
        type: 'Réapprov.',
        quantity: 50,
        stockBefore: 0,
        stockAfter: 50,
        date: '27/11/2024 10:15'
      },
      {
        id: '3',
        productName: 'Souris Wireless',
        type: 'Vente',
        quantity: -3,
        stockBefore: 6,
        stockAfter: 3,
        date: '26/11/2024 16:45'
      },
      {
        id: '4',
        productName: 'Casque Audio',
        type: 'Ajustement',
        quantity: -2,
        stockBefore: 20,
        stockAfter: 18,
        date: '25/11/2024 09:20'
      },
      {
        id: '5',
        productName: 'Écran 4K',
        type: 'Réapprov.',
        quantity: 25,
        stockBefore: 8,
        stockAfter: 33,
        date: '24/11/2024 11:00'
      },
      {
        id: '6',
        productName: 'Webcam HD',
        type: 'Vente',
        quantity: -2,
        stockBefore: 15,
        stockAfter: 13,
        date: '23/11/2024 15:30'
      }
    ];

    setMovements(mockMovements);

    // Mock stats
    setStats({
      lowStock: 12,
      outOfStock: 3,
      totalValue: 45230
    });
  }, []);

  // Get badge style for movement type
  const getTypeBadge = (type: StockMovement['type']) => {
    const styles = {
      'Vente': 'bg-red-100 text-red-700',
      'Réapprov.': 'bg-green-100 text-green-700',
      'Ajustement': 'bg-yellow-100 text-yellow-700',
      'Retour': 'bg-blue-100 text-blue-700'
    };
    return (
      <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${styles[type]}`}>
        {type}
      </span>
    );
  };

  // Format quantity with +/- sign
  const formatQuantity = (quantity: number) => {
    const sign = quantity > 0 ? '+' : '';
    return `${sign}${quantity}`;
  };

  // Get quantity color
  const getQuantityColor = (quantity: number) => {
    return quantity > 0 ? 'text-green-700 font-semibold' : 'text-red-700 font-semibold';
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
      {/* Header Section */}
      <div className="px-8 py-6">

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Gestion du Stock</h1>
          <p className="text-gray-600">Gérez les mouvements de stock et les alertes</p>
        </div>

        {/* Stock Alerts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-orange-500 hover:shadow-lg transition-shadow">
            <p className="text-gray-600 text-sm font-medium mb-2">Stock Faible</p>
            <h3 className="text-3xl font-bold text-gray-900">{stats.lowStock}</h3>
            <p className="text-orange-600 text-xs font-semibold mt-2">
              ⚠️ Produits à réapprovisionner
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-red-500 hover:shadow-lg transition-shadow">
            <p className="text-gray-600 text-sm font-medium mb-2">Rupture de Stock</p>
            <h3 className="text-3xl font-bold text-gray-900">{stats.outOfStock}</h3>
            <p className="text-red-600 text-xs font-semibold mt-2">
              🚨 Produits en rupture
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-green-500 hover:shadow-lg transition-shadow">
            <p className="text-gray-600 text-sm font-medium mb-2">Valeur Stock Total</p>
            <h3 className="text-3xl font-bold text-gray-900">
              ${stats.totalValue.toLocaleString()}
            </h3>
            <p className="text-green-600 text-xs font-semibold mt-2">
              💰 Inventaire valorisé
            </p>
          </div>
        </div>

        {/* Stock Movements Table */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-gray-900">
                Mouvements de Stock Récents
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">
                  {movements.length} mouvements
                </span>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-blue-100 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">
                    Produit
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">
                    Type
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">
                    Quantité
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">
                    Stock Avant
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">
                    Stock Après
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {movements.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                      Aucun mouvement de stock enregistré
                    </td>
                  </tr>
                ) : (
                  movements.map((movement) => (
                    <tr key={movement.id} className="hover:bg-blue-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                            <span className="text-blue-600">📦</span>
                          </div>
                          <span className="font-semibold text-gray-900">
                            {movement.productName}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        {getTypeBadge(movement.type)}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`text-sm ${getQuantityColor(movement.quantity)}`}>
                          {formatQuantity(movement.quantity)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-700">{movement.stockBefore}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-semibold text-gray-900">
                          {movement.stockAfter}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-700">{movement.date}</span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Affichage 1 à {movements.length} de {movements.length} mouvements
            </p>
            <div className="flex items-center gap-2">
              <button className="px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-blue-50 transition-colors">
                Précédent
              </button>
              <button className="px-3 py-2 rounded-lg bg-blue-600 text-white">
                1
              </button>
              <button className="px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-blue-50 transition-colors">
                Suivant
              </button>
            </div>
          </div>
        </div>

        {/* Stock Alerts Section */}
        <div className="mt-8 bg-orange-50 border-l-4 border-orange-500 p-6 rounded-xl">
          <div className="flex items-start gap-3">
            <span className="text-2xl">⚠️</span>
            <div>
              <h4 className="font-bold text-orange-900 mb-2">Alertes Stock</h4>
              <p className="text-sm text-orange-800">
                Vous avez <strong>{stats.lowStock} produits</strong> avec un stock faible et{' '}
                <strong>{stats.outOfStock} produits</strong> en rupture de stock.
                Pensez à réapprovisionner rapidement pour éviter les pertes de vente.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 text-left">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                <span className="text-2xl">📥</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Réapprovisionner</p>
                <p className="text-xs text-gray-600">Ajouter du stock</p>
              </div>
            </div>
          </button>

          <button className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 text-left">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center">
                <span className="text-2xl">⚙️</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Ajuster Stock</p>
                <p className="text-xs text-gray-600">Corriger les quantités</p>
              </div>
            </div>
          </button>

          <button className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 text-left">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Rapport Stock</p>
                <p className="text-xs text-gray-600">Exporter les données</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default stock
