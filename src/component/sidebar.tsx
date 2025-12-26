import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

interface MenuItem {
  to: string;
  icon: string;
  label: string;
}

const sidebar = () => {
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const menuItems: MenuItem[] = [
    { to: '/dashboard', icon: 'fas fa-chart-line', label: 'Tableau de Bord' },
    { to: '/produit', icon: 'fas fa-box', label: 'Produits' },
    { to: '/vente', icon: 'fas fa-receipt', label: 'Ventes' },
    { to: '/stock', icon: 'fas fa-warehouse', label: 'Stock' },
    { to: '/client', icon: 'fas fa-users', label: 'Clients' },
    { to: '/rapport', icon: 'fas fa-chart-bar', label: 'Rapports' },
    { to: '/setting', icon: 'fas fa-cog', label: 'Paramètres' },
  ]; 

  const handleLogout = () => {
    // Logique de déconnexion ici (ex: supprimer le token, appeler une API, etc.)
    // Puis rediriger vers la page de connexion
    navigate('/login');
  }

  return (
     <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-blue-600 text-white rounded-lg shadow-lg"
      >
        <i className={`fas ${isMobileOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
      </button>

      {/* Sidebar Overlay */}
      {isMobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-40 w-72 bg-blue-500 text-white flex flex-col shadow-2xl overflow-y-auto transition-transform duration-300 ease-in-out`}
      >
        {/* Logo Section */}
        <div className="p-6 border-b sticky top-0 bg-gradient-to-r from-blue-600 to-blue-500">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-lg">
              <i className="fas fa-boxes text-xl text-blue-600"></i>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">InvMaster</h1>
              <p className="text-xs text-blue-100">Gestion Inventaire</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setIsMobileOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${
                  isActive
                    ? 'bg-blue-700 text-white font-semibold shadow-lg'
                    : 'text-blue-100 hover:bg-blue-700 hover:text-white'
                }`
              }
            >
              <i className={`fas ${item.icon} w-5`}></i>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Profile Section */}
        <div className="p-4 border-t border-blue-700">
          <div className="flex items-center gap-3 p-3 rounded-lg">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg">
              <span className="font-bold text-sm text-blue-600">S</span>
            </div>
            <div className="flex-1 text-left min-w-0">
              <p className="text-sm font-semibold text-white truncate">Sofabrique</p>
              <p className="text-xs truncate text-blue-200">clovis</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full mt-2 flex items-center justify-center gap-2 px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            <i className="fas fa-sign-out-alt"></i>
            <span>Se déconnecter</span>
          </button>
        </div>
      </aside>
    </>
  );
}

export default sidebar
