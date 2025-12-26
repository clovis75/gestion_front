import React from 'react'

const dashboard = () => {
  const kpis = [
    {
      title: "Total Produits",
      value: 245,
      subtitle: "↑ 12% ce mois",
      icon: "fa-box",
      color: "blue",
    },
    {
      title: "Valeur Stock",
      value: "45 230 €",
      subtitle: "↑ 8% vs mois dernier",
      icon: "fa-dollar-sign",
      color: "purple",
    },
    {
      title: "Ventes ce Mois",
      value: "12 450 €",
      subtitle: "↑ 25% vs mois dernier",
      icon: "fa-chart-line",
      color: "green",
    },
    {
      title: "Stock Faible",
      value: 12,
      subtitle: "Nécessite action",
      icon: "fa-exclamation-triangle",
      color: "orange",
    },
  ];

  const colors = {
    blue: {
      border: "border-blue-500",
      text: "text-blue-600",
      bg: "bg-blue-50",
    },
    purple: {
      border: "border-purple-500",
      text: "text-purple-600",
      bg: "bg-purple-50",
    },
    green: {
      border: "border-green-500",
      text: "text-green-600",
      bg: "bg-green-50",
    },
    orange: {
      border: "border-orange-500",
      text: "text-orange-600",
      bg: "bg-orange-50",
    },
  };
   return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
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

      {/* Main Content */}
      <main className="p-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">
            Bienvenue au Tableau de Bord
          </h1>
          <p className="text-sm text-gray-600">
            Gérez votre inventaire et suivez vos ventes en temps réel
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total Produits */}
          <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-600 hover:-translate-y-1 transition-transform">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-xs font-medium mb-1">
                  Total Produits
                </p>
                <h3 className="text-2xl font-bold text-gray-900">245</h3>
                <p className="text-xs font-semibold mt-2 text-blue-600">
                  ↑ 12% ce mois
                </p>
              </div>
              <div className="w-14 h-14 rounded-full flex items-center justify-center bg-blue-50">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
            </div>
          </div>

          {/* Valeur Stock */}
          <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-purple-600 hover:-translate-y-1 transition-transform">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-xs font-medium mb-1">
                  Valeur Stock
                </p>
                <h3 className="text-2xl font-bold text-gray-900">$45,230</h3>
                <p className="text-xs font-semibold mt-2 text-purple-600">
                  ↑ 8% vs mois dernier
                </p>
              </div>
              <div className="w-14 h-14 rounded-full flex items-center justify-center bg-purple-50">
                <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Ventes Mois */}
          <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-green-500 hover:-translate-y-1 transition-transform">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-xs font-medium mb-1">
                  Ventes ce Mois
                </p>
                <h3 className="text-2xl font-bold text-gray-900">$12,450</h3>
                <p className="text-green-600 text-xs font-semibold mt-2">
                  ↑ 25% vs mois dernier
                </p>
              </div>
              <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center">
                <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
          </div>

          {/* Stock Faible */}
          <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-orange-500 hover:-translate-y-1 transition-transform">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-xs font-medium mb-1">
                  Stock Faible
                </p>
                <h3 className="text-2xl font-bold text-gray-900">12</h3>
                <p className="text-orange-600 text-xs font-semibold mt-2">
                  Nécessite action
                </p>
              </div>
              <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center">
                <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Ventes Hebdomadaires - Bar Chart */}
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-bold text-gray-900 mb-6">
              Ventes Hebdomadaires
            </h3>
            <div className="relative h-72">
              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs text-gray-500 w-12">
                <span>$2000</span>
                <span>$1800</span>
                <span>$1600</span>
                <span>$1400</span>
                <span>$1200</span>
                <span>$1000</span>
                <span>$800</span>
                <span>$600</span>
                <span>$400</span>
                <span>$200</span>
                <span>$0</span>
              </div>
              
              {/* Chart area */}
              <div className="absolute left-12 right-0 top-0 bottom-0">
                {/* Grid lines */}
                <div className="absolute inset-0 flex flex-col justify-between">
                  {[...Array(11)].map((_, i) => (
                    <div key={i} className="border-t border-gray-100"></div>
                  ))}
                </div>
                
                {/* Bars */}
                <div className="relative h-full pb-8 flex items-end justify-between gap-2">
                  <div className="flex-1 flex flex-col items-center group">
                    <div className="w-full bg-blue-500 rounded-t transition-all duration-300 hover:bg-blue-600 relative" style={{height: '62%'}}>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                        $1,240
                      </div>
                    </div>
                    <span className="text-xs text-gray-600 mt-2">Lundi</span>
                  </div>
                  
                  <div className="flex-1 flex flex-col items-center group">
                    <div className="w-full bg-blue-500 rounded-t transition-all duration-300 hover:bg-blue-600 relative" style={{height: '49%'}}>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                        $980
                      </div>
                    </div>
                    <span className="text-xs text-gray-600 mt-2">Mardi</span>
                  </div>
                  
                  <div className="flex-1 flex flex-col items-center group">
                    <div className="w-full bg-blue-500 rounded-t transition-all duration-300 hover:bg-blue-600 relative" style={{height: '78%'}}>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                        $1,560
                      </div>
                    </div>
                    <span className="text-xs text-gray-600 mt-2">Mercredi</span>
                  </div>
                  
                  <div className="flex-1 flex flex-col items-center group">
                    <div className="w-full bg-blue-500 rounded-t transition-all duration-300 hover:bg-blue-600 relative" style={{height: '95%'}}>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                        $1,890
                      </div>
                    </div>
                    <span className="text-xs text-gray-600 mt-2">Jeudi</span>
                  </div>
                  
                  <div className="flex-1 flex flex-col items-center group">
                    <div className="w-full bg-blue-500 rounded-t transition-all duration-300 hover:bg-blue-600 relative" style={{height: '73%'}}>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                        $1,450
                      </div>
                    </div>
                    <span className="text-xs text-gray-600 mt-2">Vendredi</span>
                  </div>
                  
                  <div className="flex-1 flex flex-col items-center group">
                    <div className="w-full bg-blue-500 rounded-t transition-all duration-300 hover:bg-blue-600 relative" style={{height: '86%'}}>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                        $1,720
                      </div>
                    </div>
                    <span className="text-xs text-gray-600 mt-2">Samedi</span>
                  </div>
                  
                  <div className="flex-1 flex flex-col items-center group">
                    <div className="w-full bg-blue-500 rounded-t transition-all duration-300 hover:bg-blue-600 relative" style={{height: '48%'}}>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                        $950
                      </div>
                    </div>
                    <span className="text-xs text-gray-600 mt-2">Dimanche</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Top Produits - Donut Chart */}
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-bold text-gray-900 mb-6">
              Top 5 Produits
            </h3>
            <div className="flex items-center justify-center gap-8">
              {/* Donut Chart */}
              <div className="relative w-64 h-64">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#2563EB" strokeWidth="40" strokeDasharray="314 471" strokeDashoffset="0" className="transition-all duration-1000" />
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#3B82F6" strokeWidth="40" strokeDasharray="188 471" strokeDashoffset="-314" className="transition-all duration-1000" />
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#60A5FA" strokeWidth="40" strokeDasharray="94 471" strokeDashoffset="-502" className="transition-all duration-1000" />
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#93C5FD" strokeWidth="40" strokeDasharray="47 471" strokeDashoffset="-596" className="transition-all duration-1000" />
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#DBEAFE" strokeWidth="40" strokeDasharray="94 471" strokeDashoffset="-643" className="transition-all duration-1000" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white rounded-full"></div>
                </div>
              </div>
              
              {/* Legend */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-sm bg-blue-600"></div>
                  <span className="text-sm text-gray-700">Laptop Pro 15"</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-sm bg-blue-500"></div>
                  <span className="text-sm text-gray-700">Casque Audio</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-sm bg-blue-400"></div>
                  <span className="text-sm text-gray-700">Clavier Mécanique</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-sm bg-blue-300"></div>
                  <span className="text-sm text-gray-700">Souris Wireless</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-sm bg-blue-200"></div>
                  <span className="text-sm text-gray-700">Écran 4K 27"</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activities */}²²&&
        <div className="bg-white rounded-xl p-6 shadow-md">
          <h3 className="text-base font-bold text-gray-900 mb-4">
            Activités Récentes
          </h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 border-l-4 border-green-500 bg-green-50 rounded-lg">
              <div className="w-8 h-8 rounded-full bg-green-200 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900 text-sm">
                  Nouveau produit ajouté
                </p>
                <p className="text-xs text-gray-600">
                  Tablette 10" - Stock: 25 unités
                </p>
                <p className="text-xs text-gray-500 mt-1">Il y a 2 heures</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 border-l-4 border-blue-500 bg-blue-50 rounded-lg">
              <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900 text-sm">
                  Vente enregistrée
                </p>
                <p className="text-xs text-gray-600">
                  Commande #2024-001 - Montant: $1,250
                </p>
                <p className="text-xs text-gray-500 mt-1">Il y a 4 heures</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 border-l-4 border-orange-500 bg-orange-50 rounded-lg">
              <div className="w-8 h-8 rounded-full bg-orange-200 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900 text-sm">
                  Alerte stock faible
                </p>
                <p className="text-xs text-gray-600">
                  Souris Wireless - Stock: 3 unités
                </p>
                <p className="text-xs text-gray-500 mt-1">Il y a 6 heures</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 border-l-4 border-purple-500 bg-purple-50 rounded-lg">
              <div className="w-8 h-8 rounded-full bg-purple-200 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900 text-sm">
                  Réapprovisionnement
                </p>
                <p className="text-xs text-gray-600">
                  Clavier Mécanique - +50 unités reçues
                </p>
                <p className="text-xs text-gray-500 mt-1">Il y a 1 jour</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default dashboard
