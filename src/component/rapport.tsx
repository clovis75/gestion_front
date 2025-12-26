import { Download, Filter, TrendingUp } from 'lucide-react';
import React, { useEffect, useState } from 'react'

// Types
interface Product {
  id: string;
  product: string;
  sales: number;
  revenue: number;
  cost: number;
  profit: number;
  margin: string;
}

interface KPIData {
  label: string;
  value: string;
  change?: string;
  subtitle?: string;
  color: string;
  changeColor: string;
}


const rapport = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [periodFilter, setPeriodFilter] = useState("ce mois");
  const [reportType, setReportType] = useState("Ventes");
  const [productReport, setProductReport] = useState<Product[]>([]);

  const salesTrend = [
    { week: "Semaine 1", amount: "$8,450", percentage: "72" },
    { week: "Semaine 2", amount: "$9,450", percentage: "78" },
    { week: "Semaine 3", amount: "$11,450", percentage: "96" },
    { week: "Semaine 4", amount: "$16,450", percentage: "100" }
  ];

  const topCategories = [
    { name: 'Électronique', sales: 65, revenue: '$28,450' },
    { name: 'Accessoires', sales: 58, revenue: '$12,340' },
    { name: 'Audio', sales: 33, revenue: '$4,440' },
  ];

  // Load products on mount
  useEffect(() => {
    const mockProducts: Product[] = [
      { id: '1', product: 'Laptop Pro 15"', sales: 45, revenue: 58455, cost: 38250, profit: 20205, margin: '34.6%' },
      { id: '2', product: 'Casque Audio Premium', sales: 120, revenue: 35880, cost: 18000, profit: 17880, margin: '49.8%' },
      { id: '3', product: 'Clavier Mécanique RGB', sales: 87, revenue: 12963, cost: 6525, profit: 6438, margin: '49.7%' },
      { id: '4', product: 'Souris Gamer', sales: 156, revenue: 9360, cost: 4680, profit: 4680, margin: '50.0%' },
      { id: '5', product: 'Écran 4K 27"', sales: 32, revenue: 22400, cost: 14080, profit: 8320, margin: '37.1%' },
      { id: '6', product: 'Webcam HD Pro', sales: 78, revenue: 11700, cost: 6240, profit: 5460, margin: '46.7%' },
    ];
    setProductReport(mockProducts);
  }, []);

  // Filter products by search
  const filteredProducts = productReport.filter(product =>
    product.product.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // View product details
  const viewProductDetails = (productId: string) => {
    const product = productReport.find(p => p.id === productId);
    if (product) {
      alert(`Détails du produit:\n\nProduit: ${product.product}\nVentes: ${product.sales}\nRevenu: $${product.revenue.toLocaleString()}\nCoût: $${product.cost.toLocaleString()}\nBénéfice: $${product.profit.toLocaleString()}\nMarge: ${product.margin}`);
    }
  };

  // Calculate totals
  const totalRevenue = productReport.reduce((sum, p) => sum + p.revenue, 0);
  const totalProfit = productReport.reduce((sum, p) => sum + p.profit, 0);
  const totalSales = productReport.reduce((sum, p) => sum + p.sales, 0);
  const avgMargin = productReport.length > 0
    ? (totalProfit / totalRevenue * 100).toFixed(1)
    : 0;


  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-10">
        <div className="px-8 py-4 flex items-center justify-between">
          {/* <div className="flex items-center gap-4 flex-1"> */}
          <div className="flex flex-1 justify-center">
            {/* <div className="hidden md:flex items-center gap-2 flex-1 max-w-md rounded-lg px-4 py-2 border border-gray-300 bg-gray-50 ml-8">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Rechercher..."
                className="bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400 w-full"
              />
            </div> */}
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
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Rapports & Statistiques</h1>
        <p className="text-gray-600">Analysez les performances de votre entreprise</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-500">
          <p className="text-gray-600 text-sm font-medium mb-2">Total Ventes</p>
          <h3 className="text-3xl font-bold text-gray-900">{totalSales}</h3>
          <p className="text-blue-600 text-xs font-semibold mt-2">📦 Produits vendus</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-green-500">
          <p className="text-gray-600 text-sm font-medium mb-2">Revenu Total</p>
          <h3 className="text-3xl font-bold text-gray-900">${totalRevenue.toLocaleString()}</h3>
          <p className="text-green-600 text-xs font-semibold mt-2">💰 Chiffre d'affaires</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-purple-500">
          <p className="text-gray-600 text-sm font-medium mb-2">Bénéfice Total</p>
          <h3 className="text-3xl font-bold text-gray-900">${totalProfit.toLocaleString()}</h3>
          <p className="text-purple-600 text-xs font-semibold mt-2">📊 Marge brute</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-orange-500">
          <p className="text-gray-600 text-sm font-medium mb-2">Marge Moyenne</p>
          <h3 className="text-3xl font-bold text-gray-900">{avgMargin}%</h3>
          <p className="text-orange-600 text-xs font-semibold mt-2">📈 Performance</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-6 shadow-md mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Période</label>
            <select
              value={periodFilter}
              onChange={(e) => setPeriodFilter(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            >
              <option>Ce mois</option>
              <option>3 derniers mois</option>
              <option>6 derniers mois</option>
              <option>Cette année</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Type de Rapport</label>
            <select
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            >
              <option>Ventes</option>
              <option>Stock</option>
              <option>Clients</option>
              <option>Marges</option>
            </select>
          </div>
          <div className="flex items-end gap-2">
            <button className="flex-1 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
              <Filter size={16} />
              Filtrer
            </button>
          </div>
          <div className="flex items-end gap-2">
            <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
              <Download size={16} />
              Exporter
            </button>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Sales Trend */}
        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
            <TrendingUp size={20} className="text-blue-600" />
            Tendance des Ventes
          </h3>
          <div className="space-y-4">
            {salesTrend.map((week, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">{week.week}</span>
                  <span className="text-sm font-semibold text-gray-900">{week.amount}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-blue-400 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${week.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Categories */}
        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Catégories Top Ventes</h3>
          <div className="space-y-4">
            {topCategories.map((category, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 text-sm">{category.name}</p>
                  <p className="text-xs text-gray-600">{category.sales} ventes</p>
                </div>
                <span className="font-bold text-blue-600">{category.revenue}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="bg-white rounded-lg p-4 shadow-md">
          <div className="flex items-center gap-3">
            <span className="text-gray-400 text-xl">🔍</span>
            <input
              type="text"
              placeholder="Rechercher un produit..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 outline-none text-gray-700"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Detailed Report Table */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-blue-100 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Produit</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Ventes</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Revenu</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Coût</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Bénéfice</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Marge</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredProducts.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-8 text-center text-gray-500">
                    {searchTerm ? 'Aucun produit trouvé pour cette recherche' : 'Aucun produit enregistré'}
                  </td>
                </tr>
              ) : (
                filteredProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4">
                      <span className="font-semibold text-gray-900">{product.product}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-semibold text-gray-900">{product.sales}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-bold text-gray-900">${product.revenue.toLocaleString()}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-700">${product.cost.toLocaleString()}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-bold text-green-600">${product.profit.toLocaleString()}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-semibold text-gray-600">{product.margin}</span>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => viewProductDetails(product.id)}
                        className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
                        title="Voir les détails"
                      >
                        👁️
                      </button>
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
            Affichage 1 à {filteredProducts.length} de {filteredProducts.length} produits
          </p>
          <div className="flex items-center gap-2">
            <button className="px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-blue-50 transition-colors">
              Précédent
            </button>
            <button className="px-3 py-2 rounded-lg bg-blue-600 text-white">1</button>
            <button className="px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-blue-50 transition-colors">
              Suivant
            </button>
          </div>
        </div>
      </div>

      {/* Top Products Section */}
      <div className="mt-8 bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">🏆 Top Produits</h3>
        <div className="space-y-3">
          {productReport
            .sort((a, b) => b.revenue - a.revenue)
            .slice(0, 3)
            .map((product, index) => {
              const medals = ['🥇', '🥈', '🥉'];
              return (
                <div key={product.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{medals[index]}</span>
                    <div>
                      <p className="font-semibold text-gray-900">{product.product}</p>
                      <p className="text-xs text-gray-600">{product.sales} ventes • Marge {product.margin}</p>
                    </div>
                  </div>
                  <span className="font-bold text-gray-900 text-lg">
                    ${product.revenue.toLocaleString()}
                  </span>
                </div>
              );
            })}
        </div>
      </div>
    </div>
    </div>
  );
}

export default rapport
