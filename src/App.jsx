import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { PlayerPage } from './pages/PlayerPage'
import { LibraryPage } from './pages/LibraryPage'
import { FavoritesPage } from './pages/FavoritesPage'
import { TrendingPage } from './pages/TrendingPage'
import { FeedPage } from './pages/FeedPage'



function App() {

  const routes = createBrowserRouter([
    { path: '/', element: <LibraryPage />},
    { path: '/player', element: <PlayerPage />},
    { path: '/favorites', element: <FavoritesPage />},
    { path: '/trending', element: <TrendingPage />},
    { path: '/Feed', element: <FeedPage />}
  ])

  return (
    <>
      <div className='w-full bg-slate-500'>
      <RouterProvider router={routes} />
      </div>
    </>
  )
}

export default App
