import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import useProyectos from "../hooks/useProyectos"
import ModalFormularioTarea from "../components/ModalFormularioTarea"
import ModalEliminarTarea from "../components/ModalEliminarTarea"
import Tarea from "../components/Tarea"
import Alerta from "../components/Alerta"
import Navbar from '../components/Navbar';

const Proyecto = () => {
  const params = useParams()
  const {id} = params
  const { obtenerProyecto, proyecto, cargando, handleModalTarea, alerta } = useProyectos()
  

  const { nombre, icono } = proyecto
  const [filtro, setFiltro] = useState(null)

  useEffect(() => {
    obtenerProyecto(id)
  }, [])
  if (cargando) return 'cargando.....'

  const { msg } = alerta

  const handleClick = () => {
    // if(confirm("Deseas eliminar este proyecto?")){
    //   eliminarProyecto(proyecto._id)
    // }else{
    //   console.log("no");
    // }

  }

  const tareasFiltradas = proyecto.tareas?.filter((tarea) => {
    if (filtro === true) {
      return tarea.estado === true;
    } else if (filtro === false) {
      return tarea.estado === false;
    } else {
      return true;
    }
  });

  return (
    <>
        <div className="flex justify-between">
        <h1 className="font-black text-4xl">{nombre}</h1>
      </div>
      <div className="flex justify-between mt-20 items-center">
      <button
        onClick={ handleModalTarea }
        type='button'
        className='text-sm px-5 py-3 w-full md:w-auto rounded-lg uppercase font-bold bg-sky-400 text-white flex gap-2 items-center'
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
        </svg>
        Nueva Tarea
      </button>
        <div className='flex items-center gap-4'>
          <img src={icono ? icono : ''} alt='icono' className='flex w-10 h-full rounded-md bg-center bg-no-repeat' />
          <h1 className="font-black text-4xl">{nombre}</h1>
        </div>
        <div className="gap-2">
        <div className='flex items-center gap-2 text-gray-400 hover:text-black'>
        <Link
            className='uppercase font-bold'
            to={`/proyectos/editar/${id}`}
          >Editar</Link>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
          </svg>
        </div>
        <div className='flex items-center gap-2 text-gray-400 hover:text-black'>
            <button
                className='uppercase font-bold'
                onClick={handleClick}
            >Eliminar</button>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </div>
          </div>
      </div>
      

      <p className="font-bold text-xl mt-10">Tareas del Proyecto</p>

      <Navbar setFiltro={setFiltro}/>

      { msg && <Alerta alerta={alerta} />}

      <div className="mt-6">
        { proyecto.tareas?.length ? 
         tareasFiltradas.map( tarea => (
          <Tarea 
            key={tarea._id}
            tarea={tarea}
            proyectoId={id}
          />
         )) : 
          <p className="text-center my-5 p-10">No hay tareas en este proyecto</p>
        }
      </div>
      <ModalFormularioTarea/>
    </>
    
  )
}

export default Proyecto