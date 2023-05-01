import React, { useState } from "react";

function Navbar({ setFiltro }) {
  const [filtroActual, setFiltroActual] = useState(null);

  return (
    <nav className="flex justify-center bg-grey-600 my-5">
      <ul className="flex p-0 gap-2 justify-stretch">
        <li
          className={`text-center w-80 text-white p-2 cursor-pointer rounded-full px-10 ${
            filtroActual === null ? "bg-sky-400" : "bg-gray-400 hover:bg-sky-400"
          }`}
          onClick={() => {
            setFiltro(null);
            setFiltroActual(null);
          }}
        >
          Todos
        </li>
        <div className="border-gray-400 border my-2"></div>
        <li
          className={`text-center w-80 text-white p-2 cursor-pointer rounded-full px-10 ${
            filtroActual === false ? "bg-sky-400" : "bg-gray-400 hover:bg-sky-400"
          }`}
          onClick={() => {
            setFiltro(false);
            setFiltroActual(false);
          }}
        >
          Incompletos
        </li>
        <div className="border-gray-400 border my-2"></div>
        <li
          className={`text-center w-80 text-white p-2 cursor-pointer rounded-full px-10 ${
            filtroActual === true ? "bg-sky-400" : "bg-gray-400 hover:bg-sky-400"
          }`}
          onClick={() => {
            setFiltro(true);
            setFiltroActual(true);
          }}
        >
          Completados
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;