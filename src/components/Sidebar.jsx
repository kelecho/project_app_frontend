import { Link, useLocation } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import useProyectos from '../hooks/useProyectos'
import Busqueda from "./Busqueda"

const Sidebar = () => {
  const { handleBuscador } = useProyectos()
  const { auth } = useAuth()
  const {pathname} = useLocation();
  const [path] = pathname.split('/').filter((el) => el !== "");
  return (
    path === 'proyectos' ? 
   <aside className='md:w-1/3 lg:w-1/5 xl:w-1/6 px-5 py-10 bg-white' >
        <p className='text-3xl font-bold my-5 text-gray-500'>¡Hola { auth.nombre }!</p>
        <button
            type="button"
            className='bg-zinc-300 w-full p-3 text-white uppercase font-bold block mt-5 text-center rounded-lg'
            onClick={handleBuscador}
          >Buscar Proyecto</button>
        <Link
            to="crear-proyecto"
            className='bg-sky-600 w-full p-3 text-white uppercase font-bold block mt-5 text-center rounded-lg'
        >Nuevo Proyecto</Link>
        <Link
            to="servicio-premium"
            className='bg-green-400 w-full p-3 text-white uppercase font-bold block mt-5 text-center rounded-lg'
        >Premium</Link>
        <Busqueda />
    </aside>
    :
    <aside></aside>
  );
}

export default Sidebar