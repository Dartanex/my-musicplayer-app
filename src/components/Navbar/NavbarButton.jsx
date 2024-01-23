import { Link, useLocation } from 'react-router-dom'
import { IconContext } from 'react-icons'


export const NavbarButton = (props) => {
  
  const location = useLocation() //Para obtener la URL actual y así lograr el efecto active, para que el menú muestre la página que está activa
  const isActive = location.pathname === props.to //Ruta de la actual URL
  const btnActive = isActive ? 'inline-flex flex-col items-center justify-center px-5 rounded-md scale-105 text-zinc-300 bg-amber-800 group hover:rounded-md transition-all easy-in-out' 
  : 'inline-flex flex-col items-center justify-center px-5 bg-yellow-900/0 text-zinc-300 hover:bg-amber-800 dark:hover:bg-amber-800 group hover:rounded-md transition-all easy-in-out'

  return (
    <>
        <Link className={btnActive} to={props.to}>
          <IconContext.Provider 
              value={{className:'grid grid-cols-12  rounded-md hover:rounded-md', 
              size:'2.0rem'}}>
            {props.icon}
            <p className="tab tab-home text-base text-center font-bold">{props.title}</p>
          </IconContext.Provider>
            </Link>	
    </>
  )
}
