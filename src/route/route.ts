import { lazy, type ComponentType } from 'react'

// ==================== LAZY IMPORTS ====================

// Pages publiques
const RegisterForm = lazy(() => import('../component/register'))

// Pages protégées (Dashboard)
const Dashboard = lazy(() => import('../component/dashboard'))
const Produit = lazy(() => import('../component/produit'))
const Client = lazy(() => import('../component/client'))
const Rapport = lazy(() => import('../component/rapport'))
const Setting = lazy(() => import('../component/setting'))
const Stock = lazy(() => import('../component/stock'))
const Vente = lazy(() => import('../component/vente'))

// ==================== TYPES ====================

type LazyComponent = ComponentType<any>

interface RouteConfig {
    path: string
    Component: LazyComponent
    loadingMessage?: string
    title?: string // Optionnel : pour les titres de page
}

// ==================== CONFIGURATION DES ROUTES ====================

// Routes publiques (sans Layout)
const publicRoutes: RouteConfig[] = [
    {
        path: 'register',
        Component: RegisterForm,
        loadingMessage: "Chargement du formulaire d'inscription...",
        title: 'Inscription'
    }
]

// Routes protégées (avec Layout + Sidebar)
const protectedRoutes: RouteConfig[] = [
    {
        path: 'dashboard',
        Component: Dashboard,
        loadingMessage: 'Chargement du tableau de bord...',
        title: 'Tableau de bord'
    },
    {
        path: 'client',
        Component: Client,
        loadingMessage: 'Chargement des clients...',
        title: 'Client'
    },
    {
        path: 'produit',
        Component: Produit,
        loadingMessage: 'Chargement des produits...',
        title: 'Produits'
    },
    {
        path: 'vente',
        Component: Vente,
        loadingMessage: 'Chargement des ventes...',
        title: 'Ventes'
    },
    {
        path: 'stock',
        Component: Stock,
        loadingMessage: 'Chargement du stock...',
        title: 'Stock'
    },
    {
        path: 'rapport',
        Component: Rapport,
        loadingMessage: 'Chargement des rapports...',
        title: 'Rapports'
    },
    {
        path: 'setting',
        Component: Setting,
        loadingMessage: 'Chargement des paramètres...',
        title: 'Paramètres'
    }
]

// ==================== EXPORTS ====================

export { 
    publicRoutes, 
    protectedRoutes,
    type RouteConfig, 
    type LazyComponent 
}