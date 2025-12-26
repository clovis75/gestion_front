import React, { useEffect, useState } from 'react'

// Types
interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  salesCount: number;
  totalPurchased: number;
  lastPurchase: string;
  initials: string;
  avatarColor: string;
}

const client = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Avatar colors
  const avatarColors = [
    { bg: 'from-blue-100 to-blue-200', text: 'text-blue-600' },
    { bg: 'from-purple-100 to-purple-200', text: 'text-purple-600' },
    { bg: 'from-green-100 to-green-200', text: 'text-green-600' },
    { bg: 'from-pink-100 to-pink-200', text: 'text-pink-600' },
    { bg: 'from-orange-100 to-orange-200', text: 'text-orange-600' },
    { bg: 'from-teal-100 to-teal-200', text: 'text-teal-600' }
  ];

  // Generate initials from name
  const getInitials = (name: string): string => {
    const words = name.split(' ');
    if (words.length >= 2) {
      return words[0][0] + words[1][0];
    }
    return name.substring(0, 2);
  };

  // Load customers on mount
  useEffect(() => {
    const mockCustomers: Customer[] = [
      {
        id: '1',
        name: 'Jean Dupont',
        email: 'jean@email.com',
        phone: '+33 6 12 34 56 78',
        salesCount: 5,
        totalPurchased: 3450,
        lastPurchase: '28/11/2024',
        initials: 'JD',
        avatarColor: 'blue'
      },
      {
        id: '2',
        name: 'Marie Martin',
        email: 'marie@email.com',
        phone: '+33 6 98 76 54 32',
        salesCount: 12,
        totalPurchased: 8920,
        lastPurchase: '27/11/2024',
        initials: 'MM',
        avatarColor: 'purple'
      },
      {
        id: '3',
        name: 'Pierre Leclerc',
        email: 'pierre@email.com',
        phone: '+33 6 55 44 33 22',
        salesCount: 3,
        totalPurchased: 1245,
        lastPurchase: '26/11/2024',
        initials: 'PL',
        avatarColor: 'green'
      },
      {
        id: '4',
        name: 'Sophie Durand',
        email: 'sophie@email.com',
        phone: '+33 6 11 22 33 44',
        salesCount: 8,
        totalPurchased: 5680,
        lastPurchase: '25/11/2024',
        initials: 'SD',
        avatarColor: 'pink'
      },
      {
        id: '5',
        name: 'Thomas Bernard',
        email: 'thomas@email.com',
        phone: '+33 6 22 33 44 55',
        salesCount: 6,
        totalPurchased: 4230,
        lastPurchase: '24/11/2024',
        initials: 'TB',
        avatarColor: 'orange'
      },
      {
        id: '6',
        name: 'Julie Moreau',
        email: 'julie@email.com',
        phone: '+33 6 77 88 99 00',
        salesCount: 15,
        totalPurchased: 12500,
        lastPurchase: '23/11/2024',
        initials: 'JM',
        avatarColor: 'teal'
      }
    ];
    setCustomers(mockCustomers);
  }, []);

  // Get avatar color classes
  const getAvatarClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string } } = {
      blue: { bg: 'from-blue-100 to-blue-200', text: 'text-blue-600' },
      purple: { bg: 'from-purple-100 to-purple-200', text: 'text-purple-600' },
      green: { bg: 'from-green-100 to-green-200', text: 'text-green-600' },
      pink: { bg: 'from-pink-100 to-pink-200', text: 'text-pink-600' },
      orange: { bg: 'from-orange-100 to-orange-200', text: 'text-orange-600' },
      teal: { bg: 'from-teal-100 to-teal-200', text: 'text-teal-600' }
    };
    return colorMap[color] || colorMap.blue;
  };

  // Filter customers
  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.phone.includes(searchTerm)
  );

  // View customer details
  const viewCustomer = (customerId: string) => {
    const customer = customers.find(c => c.id === customerId);
    if (customer) {
      alert(`Détails du client:\n\nNom: ${customer.name}\nEmail: ${customer.email}\nTéléphone: ${customer.phone}\nNombre de ventes: ${customer.salesCount}\nTotal acheté: $${customer.totalPurchased.toLocaleString()}\nDernière achat: ${customer.lastPurchase}`);
    }
  };

  // Calculate totals
  const totalCustomers = customers.length;
  const totalRevenue = customers.reduce((sum, c) => sum + c.totalPurchased, 0);
  const avgPurchasePerCustomer = totalCustomers > 0 ? totalRevenue / totalCustomers : 0;

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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Gestion des Clients</h1>
          <p className="text-gray-600">Consultez l'historique et les informations de vos clients</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-500">
            <p className="text-gray-600 text-sm font-medium mb-2">Total Clients</p>
            <h3 className="text-3xl font-bold text-gray-900">{totalCustomers}</h3>
            <p className="text-blue-600 text-xs font-semibold mt-2">👥 Clients actifs</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-green-500">
            <p className="text-gray-600 text-sm font-medium mb-2">Revenus Total</p>
            <h3 className="text-3xl font-bold text-gray-900">${totalRevenue.toLocaleString()}</h3>
            <p className="text-green-600 text-xs font-semibold mt-2">💰 Chiffre d'affaires</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-purple-500">
            <p className="text-gray-600 text-sm font-medium mb-2">Panier Moyen</p>
            <h3 className="text-3xl font-bold text-gray-900">${avgPurchasePerCustomer.toFixed(0)}</h3>
            <p className="text-purple-600 text-xs font-semibold mt-2">📊 Par client</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="bg-white rounded-lg p-4 shadow-md">
            <div className="flex items-center gap-3">
              <span className="text-gray-400 text-xl">🔍</span>
              <input
                type="text"
                placeholder="Rechercher par nom, email ou téléphone..."
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

        {/* Customers Table */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-blue-100 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Client</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Email</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Téléphone</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Ventes</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Total Acheté</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Dernière Achat</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredCustomers.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-6 py-8 text-center text-gray-500">
                      {searchTerm ? 'Aucun client trouvé pour cette recherche' : 'Aucun client enregistré'}
                    </td>
                  </tr>
                ) : (
                  filteredCustomers.map((customer) => {
                    const avatarClasses = getAvatarClasses(customer.avatarColor);
                    return (
                      <tr key={customer.id} className="hover:bg-blue-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatarClasses.bg} flex items-center justify-center`}>
                              <span className={`${avatarClasses.text} font-bold text-sm`}>
                                {customer.initials}
                              </span>
                            </div>
                            <span className="font-semibold text-gray-900">{customer.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-gray-700">{customer.email}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-gray-700">{customer.phone}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm font-semibold text-gray-900">
                            {customer.salesCount}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="font-bold text-gray-900">
                            ${customer.totalPurchased.toLocaleString()}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-gray-700">{customer.lastPurchase}</span>
                        </td>
                        <td className="px-6 py-4">
                          <button
                            onClick={() => viewCustomer(customer.id)}
                            className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
                            title="Voir les détails"
                          >
                            👁️
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Affichage 1 à {filteredCustomers.length} de {filteredCustomers.length} clients
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

        {/* Top Customers Section */}
        <div className="mt-8 bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">🏆 Top Clients</h3>
          <div className="space-y-3">
            {customers
              .sort((a, b) => b.totalPurchased - a.totalPurchased)
              .slice(0, 3)
              .map((customer, index) => {
                const avatarClasses = getAvatarClasses(customer.avatarColor);
                const medals = ['🥇', '🥈', '🥉'];
                return (
                  <div key={customer.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{medals[index]}</span>
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatarClasses.bg} flex items-center justify-center`}>
                        <span className={`${avatarClasses.text} font-bold text-sm`}>
                          {customer.initials}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{customer.name}</p>
                        <p className="text-xs text-gray-600">{customer.salesCount} ventes</p>
                      </div>
                    </div>
                    <span className="font-bold text-gray-900 text-lg">
                      ${customer.totalPurchased.toLocaleString()}
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

export default client
