import { Link, useLocation } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
const Sidebar = () => {
  const { auth } = useAuth()
  const {pathname} = useLocation();
  const [path] = pathname.split('/').filter((el) => el !== "");

  return (
    path === 'proyectos' ? 
   <aside className='md:w-1/3 lg:w-1/5 xl:w-1/6 px-5 py-10' >
        <p className='text-xl font-bold'>Hola: {auth.nombre}</p>

        <Link
            to="crear-proyecto"
            className='bg-sky-600 w-full p-3 text-white uppercase font-bold block mt-5 text-center rounded-lg'
        >Nuevo Proyecto</Link>
        <Link
            to="servicio-premium"
            className='bg-sky-600 w-full p-3 text-white uppercase font-bold block mt-5 text-center rounded-lg'
        >Premium</Link>
    </aside>
    :
    <aside></aside>
  );
}

export default Sidebar