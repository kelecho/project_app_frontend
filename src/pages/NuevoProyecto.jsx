import FormularioProyecto from "../components/FormularioProyecto"
const NuevoProyecto = () => {
  return (
    <>
      <h1 className="text-3xl text-gray-600 text-center"><strong>Nuevo Proyecto</strong></h1>
      <div className="mt-10 flex justify-center">
        <FormularioProyecto />
      </div>
    </>
  )
}

export default NuevoProyecto