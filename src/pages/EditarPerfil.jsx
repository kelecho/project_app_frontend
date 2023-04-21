import React from 'react'
import ModalFormularioEditarPerfil from '../components/ModalFormularioEditarPerfil'

const EditarPerfil = () => {
  return (
    <>
          <h1 className="text-4xl font-black">Editar Perfil</h1>
  
          <div className="mt-10 flex justify-center">
              <ModalFormularioEditarPerfil/>
          </div>
      </>
  )
}

export default EditarPerfil