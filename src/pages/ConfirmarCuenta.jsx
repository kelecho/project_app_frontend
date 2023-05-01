import { useEffect, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import clienteAxios from '../config/clienteAxios'
import Alerta from "../components/Alerta"

const ConfirmarCuenta = () => {
  
  const [alerta, setAlerta] = useState({})
  const params = useParams();
  const navigate = useNavigate()
  const { id } = params;
  
  const confirmarCuenta = async () => {
    try {
      const { data } = await clienteAxios(`/usuarios/confirmar/${id}`);
      setAlerta({
        msg: data.msg,
        error: false
      })
      setTimeout(()=>{
        navigate('/')
      }, 1500)
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })        
    }
  }

  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">Confirma tu cuenta y comienza a crear tus {''}
      <span className="text-slate-700">Proyectos</span></h1>
      <div className="mt-20 md:mt-10 shadow-lg px-5 py-10 rounded-xl bg-white">
         {alerta.msg || alerta.error ? <Alerta alerta={alerta}/> : '' }
        
           <Link
            className='block text-center my-5 text-slate-500 uppercase text-sm'
             onClick={confirmarCuenta}
           >Confirmar cuenta</Link>
        
      </div>
    </>
    
  )
}

export default ConfirmarCuenta