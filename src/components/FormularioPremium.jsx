import React, { useState } from 'react';
import clienteAxios from '../config/clienteAxios';

const FormularioPremium = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      // Hacer una llamada a la API de Stripe para obtener una URL de pago única
      const { data } = await clienteAxios.post("/pagos/checkout", {
        // Aquí puedes pasar información adicional sobre el pago, como el precio o la descripción
      });

      // Redirigir al usuario a la página de pago de Stripe
      window.location.replace(data.url);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white py-10 px-5 md:w-1/2 rounded-lg shadow">
      <section className="container mx-auto px-12 py-28">
        <h1
          className="mb-24 w-full text-center text-4xl font-extrabold dark:text-slate-50 sm:mx-auto sm:mb-20 sm:w-4/5"
        >
          <span className="text-violet-500">Mayores Beneficios</span>
          para clientes premium
        </h1>
        <div className="flex flex-col space-y-24 sm:flex-row sm:space-y-0 sm:space-x-8">
          <div className="flex w-full flex-col justify-between sm:mb-0 sm:w-1/3">
            <div className="w-full text-center">
              
              <h2
                className="mb-2 text-xl font-bold leading-tight dark:text-slate-50 md:text-xl"
              >
                Cantidad Proyectos Ilimitados
              </h2>
              <p className="mb-4 leading-relaxed text-slate-700 dark:text-slate-400">
                Administra toda la cantidad de proyectos que necesites.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col justify-between sm:mb-0 sm:w-1/3">
            <div className="w-full text-center">
              <h2
                className="mb-2 text-xl font-bold leading-tight dark:text-slate-50 md:text-xl"
              >
                Soporte 24/7
              </h2>
              <p className="mb-4 leading-relaxed text-slate-700 dark:text-slate-400">
                Contamos con el mejor equipo de Sporte para Solucionar cualquier duda o inconveniente
              </p>
            </div>
            <div className="text-center">
              <a
                className="group relative mx-auto inline-block text-sm font-semibold text-slate-900 underline decoration-violet-300 decoration-2 underline-offset-8 transition hover:decoration-slate-700 dark:text-slate-200 dark:hover:decoration-slate-200 sm:m-0"
                href="#"
              >
                Read more
                
                <svg
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                  width="1.2em"
                  height="1.2em"
                  className="absolute bottom-0 -right-6 scale-x-0 transition group-hover:scale-x-100"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 12h14m-4 4l4-4m-4-4l4 4"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex w-full flex-col justify-between sm:mb-0 sm:w-1/3">
            <div className="w-full text-center">
              <h2
                className="mb-2 text-xl font-bold leading-tight dark:text-slate-50 md:text-xl"
              >
                Multiplataforma
              </h2>
              <p className="mb-4 leading-relaxed text-slate-700 dark:text-slate-400">
                Administre sus proyectos desde cualquier lugar del mundo y desde cualquier dispositivo.
              </p>
            </div>
          </div>
        </div>
      </section>
      <button
        className='bg-sky-600 w-full p-3 uppercase font-bold text-white rounded cursor-pointer hover:bg-sky-700 transition-colors'
        type="submit"
        disabled={loading}
      >
        {loading ? 'Cargando...' : 'Suscribirse'}
      </button>
    </form>
  );
};

export default FormularioPremium;