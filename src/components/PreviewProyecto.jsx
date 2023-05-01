import { Link } from "react-router-dom"
import useAuth from '../hooks/useAuth'
const PreviewProyect = ({proyecto}) => {
  const { auth } = useAuth()

    const { icono, nombre, _id, cliente, creador} = proyecto;

    const reload = () => {
          window.reload(true)
      }
    return (
        <div className='bg-white p-4 flex justify-between items-center rounded-lg my-2 shadow'>
            <div className='flex items-center gap-2'>
                <img src={icono ? icono : ''} alt='icono' className='flex w-7 h-7 rounded-md bg-center bg-no-repeat' />
                <p className='flex-1'>
                    {nombre}

                    <span className='text-sm text-gray-500 uppercase'>
                        {''} {cliente}
                    </span>
                </p>
                
                {auth._id !== creador && (
                    <p className='p-1 text-xs rounded-lg text-white bg-green-500 font-bold uppercase'>Colaborador</p>
                )}
            </div>

            <Link
                to={`${_id}`}
                className='text-gray-600 hover:text-sky-600 uppercase text-sm font-bold'
                onClick={reload}
            >Ver Proyecto</Link>
        </div>
    )
}

export default PreviewProyect