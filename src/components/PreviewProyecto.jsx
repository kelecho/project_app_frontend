import { Link } from "react-router-dom"
import useAuth from '../hooks/useAuth'
const PreviewProyect = ({proyecto}) => {
  const { auth } = useAuth()

    const { icono, nombre, _id, cliente, creador, descripcion} = proyecto;

    return (
        <li key={_id} className="flex justify-between gap-x-6 py-5">
            <div className="flex gap-x-4">
              {icono ? 
        <img src={icono} alt='icono' className='h-12 w-12 flex-none rounded-full bg-gray-50'/>
        : <img src={'https://www.dklo.co/DkLMRsT/cfDftOpaytr?u=wl54rxD5im4q'} alt='icono' className='h-12 w-12 flex-none rounded-full bg-gray-50'/>
        }
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-left">
                   <Link 
                    to={`${_id}`}
                    onClick={`${_id}`}
                    className="text-blue-600 dark:text-blue-500 hover:underline"
                   >
                    {nombre}
                   </Link> 
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{cliente}</p>
              </div>
            </div>
            {/*<div className="hidden sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">{descripcion}</p>
                <div className="mt-1 flex items-center gap-x-1.5">
                    <Link
                        to={`${_id}`} 
                        className="text-gray-600 hover:text-sky-600 uppercase text-sm font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>Detalles</span>
                    </Link>
                </div>
              </div>*/}
              <div className="hidden sm:flex sm:flex-col sm:items-end justify-center">
                <div className="mt-1 flex items-center gap-x-1.5">
                    <Link
                        to={`${_id}`} 
                        onClick={`${_id}`}
                        className="text-gray-600 hover:text-sky-600 uppercase text-sm font-bold self-center h-fit">
                        <span>Ver</span>
                    </Link>
                </div>
              </div>
          </li>
    )
}

export default PreviewProyect