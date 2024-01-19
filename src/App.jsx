import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { PlayerPage } from './pages/PlayerPage'
import { LibraryPage } from './pages/LibraryPage'
import { FavoritesPage } from './pages/FavoritesPage'
import { TrendingPage } from './pages/TrendingPage'
import { FeedPage } from './pages/FeedPage'

function App() {

  const routes = createBrowserRouter([
    { path: '/', element: <HomePage />},
    { path: '/auth/login', element: <LoginPage />},
    { path: '/player', element: <PlayerPage />},
    { path: '/library', element: <LibraryPage />},
    { path: '/favorites', element: <FavoritesPage />},
    { path: '/tranding', element: <TrendingPage />},
    { path: '/Feed', element: <FeedPage />}

  ])

  return (
    <>
      <RouterProvider router={routes} />
      
    </>
  )
}

export default App
