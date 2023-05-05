import React, { useEffect, useState } from "react";
import useProyectos from "../hooks/useProyectos"

const PagoExitoso = () => {
  const { cambiarPremium } = useProyectos()
  const [data, setData] = useState('')

  const actualizarPremium = async()=>{
    const data = await cambiarPremium()
    setData(data.msg)
  }

  useEffect(()=>{
    actualizarPremium()
  },[])
  return (
  <>
    <h1>{data ? 'Pago exitoso, ya estás suscripto a la versión premium de ProyectosApp' : ''}</h1>
    <h3>{data ? data : ''}</h3>
  </>
  
  )
}
export default PagoExitoso