import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import clienteAxios from "../config/clienteAxios";

const ModalFormularioEditarPerfil = () => {
  const { auth } = useAuth();
  const [nombre, setNombre] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('Actualizando...')
    if ((!nombre || nombre === "") && avatar === null) {
      setMessage("Debe completar almenos un campo");
    } else {
      const token = localStorage.getItem("token");
      if (!token) {
        setCargando(false);
        return;
      }
      const config = {
        method: "PUT",
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`,
        },
      };
      try {
        const formData = new FormData();
        formData.append("nombre", nombre);
        formData.append("avatar", avatar);
        const {data} = await clienteAxios.put(
          `/usuarios/${auth._id}`,
          formData,
          config
        );
        console.log(data.msg)
        setMessage(data.msg);
        setAvatar(null);
        setNombre("");
        if(data.msg === 'Actualizado'){
          navigate("/perfil");
        }
        // navigate('/proyectos')
      } catch (error) {
        setMessage("Error al tratar de actualizar");
      }
    }
  };

  return (
    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-600 dark:border-gray-600">
      {message}
      <div>
        <form onSubmit={handleSubmit} class="flex-col gap-3 p-5 ">
          <div class="flex flex-col items-center gap-2">
            <div class="mb-6 w-full">
              <label
                htmlFor="avatar"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Tu avatar
              </label>
              <input
                type="file"
                name="avatar"
                id="avatar"
                onChange={(e) => setAvatar(e.target.files[0])}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Selecciona algun archivo"
              />
            </div>
            <div class="mb-6 w-full">
              <label
                htmlFor="nombre"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Nuevo nombre
              </label>
              <input
                type="text"
                name="nombre"
                id="nombre"
                onChange={(e) => setNombre(e.target.value)}
                value={nombre}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
          <div class="flex justify-center mt-4 space-x-3 md:mt-6">
            <button
              type="submit"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Guardar cambios
            </button>
            <Link
              to={"/perfil"}
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
            >
              Atras
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalFormularioEditarPerfil;
