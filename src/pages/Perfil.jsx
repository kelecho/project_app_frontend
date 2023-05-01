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
        <h1 className="text-4xl font-black mt-20">Perfil</h1>
    {/* Contenedor */}
    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow pt-5 m-auto">
        {/*Tarjeta de perfil*/}
        <div className="flex gap-2 mb-5">
      <Link
            className='flex uppercase font-bold ml-60'
            to={`/proyectos`}
          >Cerrar
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
          </Link>
          
          </div>
      <div class="flex flex-col items-center pb-10">
        <img
          class="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={auth.avatar ?auth.avatar : ""}
          alt="PerfilImagen"
        />
        <h5 class="mb-1 text-xl font-medium text-gray-900">
          {auth.nombre}
        </h5>
        <span class="text-sm text-gray-500">{auth.email}</span>
        <div class="flex mt-4 space-x-3 md:mt-6">
          <div class="text-sm text-gray-500 border-2 border-sky-400 rounded-lg w-64 h-10 content-center text-center p-2">
            Cantidad de Proyectos : {proyectos.length}
          </div>
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
