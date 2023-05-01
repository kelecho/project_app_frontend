
import { Link } from "react-router-dom"
import useProyectos from '../hooks/useProyectos'
import useAuth from '../hooks/useAuth'

const Header = () => {

  const { cerrarSesionProyectos } = useProyectos()
  const { cerrarSesionAuth } = useAuth()
  
  const handleCerrarSesion = () => {
    cerrarSesionAuth()
    cerrarSesionProyectos()
    localStorage.removeItem('token')
  }
  return (
    <header className='flex justify-between px-4 py-5 bg-white border-b fixed w-full'>
        <h2 className='text-4xl text-sky-600 font-black text-center'>
          ProyectosApp
        </h2>

        <div className="flex items-center gap-4">
        <Link to='/perfil' className="font-bold uppercase">
            Perfil
          </Link>
          {/*<Link
            to="/proyectos"
            className="font-bold uppercase"
  >Proyectos</Link>*/}
          <button
            type="button"
            onClick={handleCerrarSesion}
            className="text-white text-sm bg-sky-600 p-3 rounded-md uppercase font-bold"  
          >
            Cerrar Sesión
          </button>
      </div>
    </header>
  )
}

export default Header