import { useState, useEffect, createContext } from "react";
import { useNavigate } from 'react-router-dom'
import clienteAxios from "../config/clienteAxios";
import useAuth from "../hooks/useAuth";

const ProyectosContext = createContext();
const ProyectosProvider = ({children}) =>{

  const [proyectos, setProyectos] = useState([])
  const [alerta, setAlerta] = useState({});
  const [proyecto, setProyecto] = useState({})
  const [cargando, setCargando] = useState(false);
  const [modalFormularioTarea, setModalFormularioTarea] = useState(false)
  const [tarea, setTarea] = useState({})
  const [modalEliminarTarea, setModalEliminarTarea] = useState(false)

  const navigate = useNavigate()
  const { auth } = useAuth()

  useEffect(() => {
    const obtenerProyectos = async () => {
      try {
        const token = localStorage.getItem('token')
        if (!token) return

        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
        }

        const {data} = await clienteAxios('/proyectos', config)
        setProyectos(data)

      } catch (error) {
        console.log(error);
      }
    }
    obtenerProyectos()
  }, [auth])

  const mostrarAlerta = alerta => {
    setAlerta(alerta)

    setTimeout(() => {
      setAlerta({})
    }, 5000)
  }

  const submitProyecto = async (proyecto) => {
    
    if (proyecto.id) {
      await editarProyecto(proyecto)
    } else {
      await nuevoProyecto(proyecto)
    }
    
  }

  const editarProyecto = async (proyecto) => {
    try {
      const token = localStorage.getItem('token')
      if (!token) return

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }
      const { data } = await clienteAxios.put(`/proyectos/${proyecto.id}`, proyecto, config)
      const proyectosActualizados = proyectos.map(proyectoState => proyectoState._id === data._id ? data : proyectoState )
      setProyectos(proyectosActualizados)
      setAlerta({
        msg: "Proyecto actualizado correctamente",
        error: false
      })
      
      setTimeout(() => {
        setAlerta({})
        navigate('/proyectos')
      }, 3000)

    } catch (error) {
      console.log(error);
      
    }
  }

  const nuevoProyecto = async (proyecto) => {
    try {
      const token = localStorage.getItem('token')
      if (!token) return

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }
      const { data } = await clienteAxios.post('/proyectos', proyecto, config)
      setProyectos([...proyectos, data])

      setAlerta({
        msg: 'Proyecto Creado Satisfactoriamente',
        error: false
      })

      setTimeout(() => {
        setAlerta({})
        navigate('/proyectos')
      }, 3000)
    } catch (error) {
      console.log(error);
    }
  }

  const obtenerProyecto = async (id) => {
    setCargando(true)
    try {
      const token = localStorage.getItem('token')
      if (!token) return

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }
      const { data } = await clienteAxios(`/proyectos/${id}`, config)
      setProyecto(data)
      setCargando(false)
    } catch (error) {
      console.log(error);
    } finally {
      setCargando(false)
    }
  }

  const eliminarProyecto = async (id) => {
    try {
      const token = localStorage.getItem('token')
      if (!token) return

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }
      const { data } = await clienteAxios.delete(`/proyectos/${id}`, config)
      const proyectosActualizados = proyectos.filter(proyectoState => proyectoState._id !== id )
      setProyectos(proyectosActualizados)
      setAlerta({
        msg: data.msg,
        error: false
      })
      setTimeout(() => {
        setAlerta({})
        navigate('/proyectos')
      }, 3000)
    } catch (error) {
      console.log(error);
    }
  }

  const handleModalTarea = () => {
    setModalFormularioTarea(!modalFormularioTarea)
    setTarea({})
  }

  const handleModalEditarTarea = (tarea) => {
    setTarea(tarea)
    setModalFormularioTarea(true)
  }

  const handleModalEliminarTarea = tarea => {
    setTarea(tarea)
    setModalEliminarTarea(!modalEliminarTarea)
  }

  const submitTarea = async tarea => {
    if (tarea?.id) {
      await editarTarea(tarea)
    } else {
      await crearTarea(tarea)
    }

  }

  const crearTarea = async (tarea) => {
    try {
      const token = localStorage.getItem('token')
      if(!token) return

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }
      const { data } = await clienteAxios.post('/tareas', tarea, config)

      // Agrega la tarea al state
      const proyectoActualizado = { ...proyecto }
      proyectoActualizado.tareas = [...proyecto.tareas, data]

      setProyecto(proyectoActualizado)
      setAlerta({})
      setModalFormularioTarea(false)
    } catch (error) {
      console.log(error);
    }
  }

  const editarTarea = async (tarea) => {
    try {
      const token = localStorage.getItem('token')
      if(!token) return

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }
      const { data } = await clienteAxios.put(`/tareas/${tarea.id}`, tarea, config)

      const proyectoActualizado = {...proyecto}
      proyectoActualizado.tareas = proyectoActualizado.tareas.map( tareaState => tareaState._id === data._id ? data : tareaState)
      setProyecto(proyectoActualizado)
      setAlerta({})
      setModalFormularioTarea(false)
    } catch (error) {
      console.log(error);
    }
  }

  const eliminarTarea = async () => {
    
    try {
        const token = localStorage.getItem('token')
        if(!token) return

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }
        console.log(tarea);
        const { data } = await clienteAxios.delete(`/tareas/${tarea._id}`, config)
        
        const proyectoAtualizado = { ...proyecto }
        proyectoAtualizado.tareas = proyectoAtualizado.tareas.filter(tareaState => tareaState._id !== tarea._id)
        setProyecto(proyectoAtualizado)
        setModalEliminarTarea(false)
        setAlerta({
          msg: data.msg, error: false
        })
        setTarea({})
        setTimeout(() => {
            setAlerta({})
        }, 3000 )

    } catch (error) {
        console.log(error)
    }
}

const cerrarSesionProyectos = () => {
  setProyectos([])
  setProyecto({})
  setAlerta({})
}

  return(
    <ProyectosContext.Provider
      value={{
        proyectos,
        mostrarAlerta,
        alerta, 
        submitProyecto,
        obtenerProyecto,
        proyecto,
        cargando,
        eliminarProyecto, 
        modalFormularioTarea,
        handleModalTarea,
        submitTarea,
        handleModalEditarTarea,
        tarea,
        modalEliminarTarea,
        handleModalEliminarTarea,
        eliminarTarea,
        cerrarSesionProyectos
      }}
    >{children}
  </ProyectosContext.Provider>)
}

export {
  ProyectosProvider
}

export default ProyectosContext