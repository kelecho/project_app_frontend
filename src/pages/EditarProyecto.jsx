import useProyectos from "../hooks/useProyectos"
import { useParams } from "react-router-dom"
import { useEffect  } from "react"
import FormularioProyecto from '../components/FormularioProyecto'
import { Spinner } from "../components/Spinner"
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

    if(cargando) return <Spinner />



  return (
    <>
      <div className='flex justify-center'>
        <h1 className='text-gray-600 text-center uppercase'><strong>Editar Proyecto: {nombre}</strong></h1>
      </div>

      <div className="mt-10 flex justify-center">
        <FormularioProyecto />
      </div>
      
    </>
  )
}

export default EditarProyecto