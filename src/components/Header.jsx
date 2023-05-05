import { Link } from "react-router-dom"
import { Dialog, Disclosure, Popover, Transition, Combobox } from '@headlessui/react'
import {
ArrowLeftOnRectangleIcon,
Bars3Icon,
XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, UserCircleIcon, QueueListIcon } from '@heroicons/react/20/solid'
import useProyectos from '../hooks/useProyectos'
import useAuth from '../hooks/useAuth'
import { Fragment, useState } from "react"
import { useLocation } from 'react-router-dom'
import Busqueda from "./Busqueda"
import PreviewProyecto from "./PreviewProyecto";
function classNames(...classes) {
return classes.filter(Boolean).join(' ')
}
const Header = () => {
const { cerrarSesionProyectos, handleBuscador } = useProyectos()
const { cerrarSesionAuth } = useAuth()
const [ mobileMenuOpen, setMobileMenuOpen] = useState(false)
const [popover, setPopover ] = useState(false)
const { auth } = useAuth()
const {pathname} = useLocation();
const [path] = pathname.split('/').filter((el) => el !== "");
const [ busqueda, setBusqueda ] = useState('')
const { proyectos } = useProyectos()
const proyectosFiltrados = busqueda === '' ? [] : proyectos.filter(proyecto => proyecto.nombre.toLowerCase().includes(busqueda.toLowerCase()))
const handleCerrarSesion = () => {
cerrarSesionAuth()
cerrarSesionProyectos()
localStorage.removeItem('token')
}
return (
<header className="bg-white">
   <nav className="mx-auto flex max-auto items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div className="flex lg:flex-1">
         <a href="/proyectos" className="-m-1.5 p-1.5">
            <h4 className='lg:text-4xl md:text-4xl text-2xl text-sky-600 font-black text-center'>
               ProyectosApp
            </h4>
         </a>
      </div>
      <div className="flex lg:hidden">
         <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() =>
            setMobileMenuOpen(true)}
            >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
         </button>
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-6">
         <Popover className="relative">
            <Popover.Button  className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 uppercase px-6 focus:outline-none focus:ring-none focus:bg-sky-200">
               { auth.nombre }
               <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>
            <Transition
               as={Fragment}
               enter="transition ease-out duration-200"
               enterFrom="opacity-0 translate-y-1"
               enterTo="opacity-100 translate-y-0"
               leave="transition ease-in duration-150"
               leaveFrom="opacity-100 translate-y-0"
               leaveTo="opacity-0 translate-y-1"
               >
               <Popover.Panel className="absolute -left-20 top-full z-10 mt-2 w-auto max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                     <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                        <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                           <UserCircleIcon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                        </div>
                        <div className="flex-auto">
                           <Link 
                              className="block font-semibold text-gray-900 w-24 text-left"
                              to='/perfil'>
                           Ver Perfil
                           <span className="absolute inset-0" />
                           </Link>
                        </div>
                     </div>
                     <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                        <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                           <ArrowLeftOnRectangleIcon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                        </div>
                        <div className="flex-auto">
                           <button 
                              className="block font-semibold text-gray-900 w-24 text-left"
                              onClick={handleCerrarSesion}>
                           Cerrar Sesión
                           <span className="absolute inset-0" />
                           </button>
                        </div>
                     </div>
                  </div>
               </Popover.Panel>
            </Transition>
         </Popover>
         <Link
            to="/proyectos"
            className="text-sm font-semibold leading-6 text-gray-900"
            >
         PROYECTOS
         </Link>
      </div>
   </nav>
   <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
      <div className="fixed inset-0 z-10" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
         <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
               <h4 className='text-sky-600 font-black text-center'>
                  ProyectosApp
               </h4>
            </a>
            <button
               type="button"
               className="-m-2.5 rounded-md p-2.5 text-gray-700"
               onClick={() =>
               setMobileMenuOpen(false)}
               >
               <span className="sr-only">Close menu</span>
               <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
         </div>
         <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
               <div className="py-6 ">
                  <img
                  className="w-24 h-24 rounded-full shadow-lg m-auto"
                  src={auth.avatar ?auth.avatar : ""}
                  alt="PerfilImagen"
                  />
                  <p className='text-3xl font-bold my-5 text-gray-500 text-center'>¡Hola { auth.nombre }!</p>
                  <Combobox
                  as="div"
                  className="rounded-lg w-full block p-2 border mt-5 mb-8 text-left"
                  onChange={ (proyecto) => (window.location = `/proyectos/${proyecto._id}`) }
                  >
                  <div className="relative">
                     <Combobox.Input
                        className="h-8 bg-transparent pl-4 pr-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-none sm:text-sm"
                        placeholder="Buscar Proyecto"
                        onChange={e =>
                     setBusqueda(e.target.value)}
                     />
                  </div>
                  {proyectosFiltrados.length > 0 && (
                  <Combobox.Options static className="max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800 grid grid-cols-1 divide-y-2">
                     {proyectosFiltrados.map( proyecto => (
                     <Combobox.Option
                        key={proyecto._id}
                        value={proyecto}
                        className={({active}) => classNames('cursor-default select-none px-4 py-2', active && 'bg-sky-600 text-white') }
                        >
                        {proyecto.nombre}
                     </Combobox.Option>
                     ))}
                  </Combobox.Options>
                  )}
                  </Combobox>
                  {/*
                  <ul role="list" className="divide-y divide-gray-300">
                     { proyectos.length ? 
                     proyectos.map(proyecto => (
                     <PreviewProyecto 
                        key={proyecto._id}
                        proyecto={proyecto}
                        />
                     ))
                     : 
                     <p className="text-center text-gray-600 uppercase p-5">No hay proyectos</p>
                     }
                  </ul>
                  */}
                  <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                     <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <QueueListIcon className="h-6 w-6 text-gray-500" />
                     </div>
                     <div className="flex-auto">
                        <Link
                           to="/proyectos"
                           className="block font-semibold text-gray-900 w-24 text-left"
                           >
                        Ver Proyectos
                        </Link>
                     </div>
                  </div>
                  <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                     <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <UserCircleIcon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                     </div>
                     <div className="flex-auto">
                        <Link 
                           className="block font-semibold text-gray-900 w-24 text-left"
                           to='/perfil'>
                        Ver Perfil
                        <span className="absolute inset-0" />
                        </Link>
                     </div>
                  </div>
                  <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                     <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <ArrowLeftOnRectangleIcon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                     </div>
                     <div className="flex-auto">
                        <button 
                           className="block font-semibold text-gray-900 w-24 text-left"
                           onClick={handleCerrarSesion}>
                        Cerrar Sesión
                        <span className="absolute inset-0" />
                        </button>
                     </div>
                  </div>
                  {/*
                  <Disclosure as="div" className="-mx-3">
                     {({ open }) => (
                     <>
                     <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                        { auth.nombre }
                        <ChevronDownIcon
                        className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                        aria-hidden="true"
                        />
                     </Disclosure.Button>
                     <Disclosure.Panel className="mt-2 space-y-2">
                        <Link
                           to='/perfil'
                           className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                           >
                        Mi usuario
                        </Link>
                        <button
                           onClick={handleCerrarSesion}
                           className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                           >
                        Cerrar Sesión
                        </button>
                     </Disclosure.Panel>
                     </>
                     )}
                  </Disclosure>
                  */}
               </div>
            </div>
         </div>
      </Dialog.Panel>
   </Dialog>
</header>
)
}
export default Header