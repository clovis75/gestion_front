import React, { useState } from 'react'

const login = () => {
  const [activeTab, setActiveTab] = useState("login");
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Logo */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500 shadow-lg">
            <i className="fas fa-boxes text-xl text-white"></i>
          </div>
          <h1 className="mt-4 text-3xl font-bold text-gray-900">InvMaster</h1>
          <p className="mt-2 text-sm text-gray-600">Gestion d'inventaire pour commerçants</p>
        </div>

        {/* Login/Register Form */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <div className="mb-6">
            <ul className="flex gap-2">
              <li>
                <button
                  type="button"
                  onClick={() => setActiveTab("login")}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${activeTab === "login"
                    ? "bg-blue-500 text-white shadow-lg" // Onglet actif
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200" // Onglet inactif
                    }`}
                >
                  Connexion
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setActiveTab("register")}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${activeTab === "register"
                    ? "bg-blue-500 text-white shadow-lg" // Onglet actif
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200" // Onglet inactif
                    }`}
                >
                  S'inscrire
                </button>
              </li>
            </ul>
          </div>

          {/* Login Tab */}
          {activeTab === "login" && (
            <form id="loginForm" className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="loginEmail"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mot de passe
                </label>
                <input
                  type="password"
                  id="loginPassword"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="••••••••"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Se connecter
              </button>
              <div className="text-right">
                <a
                  href="/forgot-password"
                  className="text-sm text-blue-600 hover:text-blue-700 hover:underline transition"
                >
                  Mot de passe ou email oublié ?
                </a>
              </div>
            </form>
          )}

          {/* Register Tab */}
          {activeTab === "register" && (
            <form id="registerForm" className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom de l'entreprise
                </label>
                <input
                  type="text"
                  id="registerBusiness"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Mon Commerce"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="registerEmail"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mot de passe
                </label>
                <input
                  type="password"
                  id="registerPassword"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="••••••••"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirmer le mot de passe
                </label>
                <input
                  type="password"
                  id="registerPasswordConfirm"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="••••••••"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Créer un compte
              </button>
            </form>
          )}
        </div>

        {/* Features */}
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <i className="fas fa-lock text-blue-600 text-2xl mb-2"></i>
            <p className="text-xs text-gray-600">Sécurisé</p>
          </div>
          <div>
            <i className="fas fa-chart-line text-blue-600 text-2xl mb-2"></i>
            <p className="text-xs text-gray-600">Analyses</p>
          </div>
          <div>
            <i className="fas fa-mobile-alt text-blue-600 text-2xl mb-2"></i>
            <p className="text-xs text-gray-600">Mobile</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default login
