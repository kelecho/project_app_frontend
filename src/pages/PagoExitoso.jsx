import React, { useEffect } from "react";
import useProyectos from "../hooks/useProyectos"
import useAuth from "../hooks/useAuth";

const PagoExitoso = () => {
  const { cambiarPremium } = useProyectos()
  const{auth}  = useAuth()
  useEffect(
    () => {
      const data = cambiarPremium(auth._id)
      console.log(data)
    }, []
  )

  return <h1>Pago exitoso, ya estás suscripto a la versión premium de ProyectosApp</h1>
}
export default PagoExitoso