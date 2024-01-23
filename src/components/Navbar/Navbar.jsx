
import { MdFavorite, MdSpaceDashboard, MdHomeFilled } from "react-icons/md"
import { FaGripfire, FaPlay, FaSignOutAlt } from "react-icons/fa"
import { IoLibrary } from "react-icons/io5"
import './navbar.css'
import { NavbarButton } from './NavbarButton'

export const Navbar = () => {
  return (
    <>
        <div className="w-full h-screen">
          <nav name="bottom-navigation" 
          className="fixed bottom-0 left-0 z-50 w-full h-16 bg-yellow-900 border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
            <div name="tabs" className="grid h-full  grid-cols-8 justify-between mx-auto font-medium rounded">
              <NavbarButton title="Home" to={'/'} icon={<MdHomeFilled />}/>
              <NavbarButton title="Player" to={'/player'} icon={<FaPlay />}/>
              <NavbarButton title="Library" to={'/library'} icon={<IoLibrary />}/>
              <NavbarButton title="Favorites" to={'/favorites'} icon={<MdFavorite />}/>
              <NavbarButton title="Trending" to={'/trending'} icon={<FaGripfire />}/>
              <NavbarButton title="Feed" to={'/feed'} icon={<MdSpaceDashboard />}/>
              <NavbarButton title="Sign Out" to={'/auth/login'} icon={<FaSignOutAlt />}/>
              <NavbarButton title="Account" to={'/auth/login'} icon={<FaSignOutAlt />}/>
            </div>
          </nav>
        </div>
    </>
  )
}
