import useProyectos from "../hooks/useProyectos"
import { useParams } from "react-router-dom"
import { useEffect  } from "react"
import FormularioProyecto from '../components/FormularioProyecto'
const EditarProyecto = () => {
  const params = useParams();
    const { obtenerProyecto, proyecto, cargando, eliminarProyecto } = useProyectos()
  
    useEffect( () => {
      obtenerProyecto(params.id)
    }, [])

    const handleClick = () => {
        if(confirm('¿Deseas eliminar este proyecto?')) {
            eliminarProyecto(params.id)
        } 
    }
  
    const { nombre } = proyecto

    if(cargando) return 'Cargando...'



  return (
    <>
      <div className='flex justify-between'>
        <h1 className='font-black text-4xl'>Editar Proyecto: {nombre}</h1>
      </div>

      <div className="mt-10 flex justify-center">
        <FormularioProyecto />
      </div>
      
    </>
  )
}

export default EditarProyecto