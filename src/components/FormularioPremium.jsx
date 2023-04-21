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
      <h1
        className="text-gray-900 uppercase font-bold text-sm"
        htmlFor="Beneficios"
      > Beneficios</h1>
      <ul>
        <li>Proyectos ilimitados</li>
        <li>Tareas ilimitadas</li>
      </ul>
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