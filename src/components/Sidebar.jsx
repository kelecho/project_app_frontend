import { Link, useLocation } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import PreviewProyecto from "./PreviewProyecto";
import useProyectos from "../hooks/useProyectos"
const Sidebar = () => {
  const { auth } = useAuth()
  const {pathname} = useLocation();
  const [path] = pathname.split('/').filter((el) => el !== "");
  const { proyectos } = useProyectos()
  return (
    path === 'proyectos' ? 
   <aside className='md:w-80 lg:w-96 px-5 py-6 bg-white' >
        <p className='text-5xl font-bold my-5'>¡Hola { auth.nombre }!</p>
        <input 
          type="search" 
          placeholder='Buscar Proyecto'
          className='rounded-lg lg:w-80 block p-2 border mt-5 mb-8'  
        />
        <Link
            to="crear-proyecto"
            className='bg-sky-600 w-full p-3 text-white uppercase font-bold block mt-5 text-center rounded-lg'
        >Nuevo Proyecto</Link>
        <Link
            to="servicio-premium"
            className='bg-sky-600 w-full p-3 text-white uppercase font-bold block mt-5 text-center rounded-lg'
        >Premium</Link>
        <h1 className="text-xl font-black mt-4">Proyectos</h1>
      <div className="mt-3">
        {proyectos.length ? 
           proyectos.map(proyecto => (
            <PreviewProyecto 
              key={proyecto._id}
              proyecto={proyecto}
            />))
         : <p className="text-center text-gray-600 uppercase p-5">No hay proyectos</p>}
      </div>
    </aside>
    :
    <aside></aside>
  );
}

export default Sidebar