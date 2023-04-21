import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useProyectos from "../hooks/useProyectos";
import { useEffect, useState } from "react";

const Perfil = () => {
  const { auth,autenticarUsuario } = useAuth();
  const { proyectos } = useProyectos();

  useEffect(()=>{
    autenticarUsuario()
  },[])

  return (
    <>
        <h1 className="text-4xl font-black">Perfil</h1>
    {/* Contenedor */}
    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-600 dark:border-gray-600 pt-5 m-auto">
        {/*Tarjeta de perfil*/}
      <div class="flex flex-col items-center pb-10">
        <img
          class="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={auth.avatar ?auth.avatar : ""}
          alt="PerfilImagen"
        />
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {auth.nombre}
        </h5>
        <span class="text-sm text-gray-500 dark:text-white">{auth.email}</span>
        <div class="flex mt-4 space-x-3 md:mt-6">
          <span class="text-sm text-gray-500 dark:text-white">
            Proyectos : {proyectos.length}
          </span>
        </div>
        <div class="flex mt-4 space-x-3 md:mt-6">
        <Link to={'editar'} class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit</Link>
        </div>
      </div>
    </div>
    </>
          
  );
};

export default Perfil;
