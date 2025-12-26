import React, { lazy, type ReactElement, Suspense, type ComponentType } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { publicRoutes, protectedRoutes } from './route'

interface LoadingSpinnerProps {
    message?: string
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ message = "chargement..." }) => (
    <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600">{message}</p>
        </div>
    </div>
)

type LazyComponent = ComponentType<any>
const withSuspense = (
    Component: LazyComponent,
    fallback?: React.ReactElement
): ReactElement => (
    <Suspense fallback={fallback || <LoadingSpinner />}>
        <Component />
    </Suspense>
)

// Lazy imports
const LoginForm = lazy(() => import('../component/login'))
const Layout = lazy(() => import('../component/layout'))

const AppRoute = () => {
    return (
        <Router>
            <Routes>
                {/* Redirection racine */}
                <Route path="/" element={<Navigate to="/login" replace />} />

                {/* Route login (SANS Layout) */}
                <Route
                    path="/login"
                    element={withSuspense(
                        LoginForm,
                        <LoadingSpinner message="Chargement du formulaire de connexion..." />
                    )}
                />

                {/* Routes publiques (SANS Layout) */}
                {publicRoutes.map(({ path, Component, loadingMessage }) => (
                    <Route
                        key={path}
                        path={`/${path}`}
                        element={withSuspense(
                            Component,
                            <LoadingSpinner message={loadingMessage} />
                        )}
                    />
                ))}

                {/* Routes protégées (AVEC Layout) - PAS DE /app/ */}
                <Route 
                    element={withSuspense(
                        Layout, 
                        <LoadingSpinner message="Chargement de l'application..." />
                    )}
                >
                    {protectedRoutes.map(({ path, Component, loadingMessage }) => (
                        <Route
                            key={path}
                            path={`/${path}`}  
                            element={withSuspense(
                                Component,
                                <LoadingSpinner message={loadingMessage} />
                            )}
                        />
                    ))}
                </Route>

                {/* 404 */}
                <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
        </Router>
    )
}

export default AppRoute