import { useState } from "react"
import { formatearFecha } from "../helpers/formatearFecha"
import useProyectos from "../hooks/useProyectos"
import ModalEliminarTarea from "./ModalEliminarTarea"
const Tarea = ({tarea,proyectoId}) => {

  const { handleModalEditarTarea } = useProyectos()

  const { descripcion, nombre, prioridad, fechaEntrega, estado, _id} = tarea

  const [ deleteTarea, setDeleteTarea ] = useState(false)

  return (
    <div className="bg-white border-b p-5 flex justify-between items-center rounded-lg my-4">
      <div>
        <div className="lg:flex md:flex gap-4">
          
          { estado ? (
              <button
                className="bg-green-400 text-white font-thin py-1 px-4 rounded-full mb-2"
              >Completa</button>
            ) : (
              <button
                className="bg-gray-400 text-white font-thin py-1 px-4 rounded-full mb-2"
              >Incompleta</button>
            ) }
            
          {(() => {
            switch (prioridad) {
              case 'Baja':
                return <div className="flex gap-2 border-teal-600 border-2 rounded-full py-1 px-4 align-center h-8 w-fit">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#0d9488" className="w-5 h-5">
                   <path fillRule="evenodd" d="M1.22 5.222a.75.75 0 011.06 0L7 9.942l3.768-3.769a.75.75 0 011.113.058 20.908 20.908 0 013.813 7.254l1.574-2.727a.75.75 0 011.3.75l-2.475 4.286a.75.75 0 01-1.025.275l-4.287-2.475a.75.75 0 01.75-1.3l2.71 1.565a19.422 19.422 0 00-3.013-6.024L7.53 11.533a.75.75 0 01-1.06 0l-5.25-5.25a.75.75 0 010-1.06z" clipRule="evenodd" />
                  </svg>
                  <p className="text-teal-600 text-sm">Prioridad: {prioridad}</p></div>
              case 'Media':
                return <div className="flex gap-2 border-orange-600 border-2 rounded-full py-1 px-4 align-center h-8  w-fit">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#ea580c" className="w-5 h-5">
                   <path fillRule="evenodd" d="M2 6.75A.75.75 0 012.75 6h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 6.75zm0 6.5a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                  </svg>
                  <p className="text-orange-600 text-sm">Prioridad: {prioridad}</p></div>
              case 'Alta':
                return <div className="flex gap-2 border-red-600 border-2 rounded-full py-1 px-4 align-center h-8  w-fit">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#dc2626" className="w-5 h-5">
                   <path fillRule="evenodd" d="M12.577 4.878a.75.75 0 01.919-.53l4.78 1.281a.75.75 0 01.531.919l-1.281 4.78a.75.75 0 01-1.449-.387l.81-3.022a19.407 19.407 0 00-5.594 5.203.75.75 0 01-1.139.093L7 10.06l-4.72 4.72a.75.75 0 01-1.06-1.061l5.25-5.25a.75.75 0 011.06 0l3.074 3.073a20.923 20.923 0 015.545-4.931l-3.042-.815a.75.75 0 01-.53-.919z" clipRule="evenodd" />
                  </svg>
                  <p className="text-red-600 text-sm">Prioridad: {prioridad}</p></div>
              default:
                return null
            }
          })()}
         </div> 
        <p className="mb-1 text-xl uppercase">{nombre}</p>
        <p className="mb-1 text-sm text-gray-500 uppercase">{descripcion}</p>
        <p className="mb-1 text-sm">{ formatearFecha(fechaEntrega) }</p>
      </div>
      <div className="space-y-14">
        <div className="flex justify-end text-gray-400 hover:text-black">
          <button
              className="bg-white px-3 py-3 uppercase rounded-lg text-center text-xs"
              onClick={() => handleModalEditarTarea(tarea)}
          >Editar</button>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 my-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
            </svg>
        </div>
        <div className="flex text-gray-400 hover:text-black">
          <button
            className="bg-white px-3 py-3 uppercase rounded-lg text-center text-xs"
            onClick={()=>setDeleteTarea(!deleteTarea)}
          >Eliminar</button>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  my-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg>
        </div>
    </div>
      <ModalEliminarTarea proyectoId={proyectoId} tareaId={_id} tareaEliminar={deleteTarea} setEliminarTarea={setDeleteTarea}/>
    </div>
    
  )
}

export default Tarea