import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import RegistrationForm from './pages/RegistrationForm'
import Login from './pages/Login'
import Hero from './pages/Hero'
import Cards from './pages/Cards'
import About from './pages/About'
import NotFound from './pages/NotFound'
import GuidePage from './pages/GuidePage'
import ProtectedRoute from './ProtectedRoute'
import SiteLayout from './components/SiteLayout'
import { GAMES } from './data/guides'

const LEGACY_PATHS = Object.fromEntries(
  Object.values(GAMES).flatMap((game) =>
    game.chapters.map((chapter, index) => [
      `/${game.id}${index + 1}`,
      `/${game.id}/${chapter.slug}`,
    ]),
  ),
)

function LegacyGuideRedirect() {
  const location = useLocation()
  return <Navigate to={LEGACY_PATHS[location.pathname] || '/'} replace />
}

function routeKey(pathname) {
  const match = pathname.match(/^\/(gow|gowr|botw)(\/|$)/)
  return match ? `/${match[1]}` : pathname
}

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence>
      <Routes location={location} key={routeKey(location.pathname)}>
        <Route
          path="/"
          element={
            <SiteLayout>
              <Hero />
              <Cards />
            </SiteLayout>
          }
        />
        <Route
          path="/registration"
          element={
            <SiteLayout>
              <RegistrationForm />
            </SiteLayout>
          }
        />
        <Route
          path="/login"
          element={
            <SiteLayout>
              <Login />
            </SiteLayout>
          }
        />
        <Route
          path="/about"
          element={
            <SiteLayout>
              <About />
            </SiteLayout>
          }
        />
        <Route
          path="/gow/:slug"
          element={
            <ProtectedRoute>
              <GuidePage gameId="gow" />
            </ProtectedRoute>
          }
        />
        <Route
          path="/gowr/:slug"
          element={
            <ProtectedRoute>
              <GuidePage gameId="gowr" />
            </ProtectedRoute>
          }
        />
        <Route
          path="/botw/:slug"
          element={
            <ProtectedRoute>
              <GuidePage gameId="botw" />
            </ProtectedRoute>
          }
        />
        {Object.keys(LEGACY_PATHS).map((path) => (
          <Route key={path} path={path} element={<LegacyGuideRedirect />} />
        ))}
        <Route
          path="*"
          element={
            <SiteLayout>
              <NotFound />
            </SiteLayout>
          }
        />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
