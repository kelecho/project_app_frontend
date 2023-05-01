
import { Link } from "react-router-dom"
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowLeftOnRectangleIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, UserCircleIcon } from '@heroicons/react/20/solid'
import useProyectos from '../hooks/useProyectos'
import useAuth from '../hooks/useAuth'
import { Fragment, useState } from "react"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const Header = () => {

  const { cerrarSesionProyectos, handleBuscador } = useProyectos()
  const { cerrarSesionAuth } = useAuth()
  const [ mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [popover, setPopover ] = useState(false)
  const { auth } = useAuth()
  
  const handleCerrarSesion = () => {
    cerrarSesionAuth()
    cerrarSesionProyectos()
    localStorage.removeItem('token')
  }
  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/proyectos" className="-m-1.5 p-1.5">
          <h4 className='text-4xl text-sky-600 font-black text-center'>
            ProyectosApp
          </h4>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-6">
          <Link
            to="/proyectos"
            className="text-sm font-semibold leading-6 text-gray-900"
            >
            PROYECTOS
          </Link>
          <Popover className="relative">
            <Popover.Button  className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 uppercase">
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
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                    <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <UserCircleIcon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <Link 
                          className="block font-semibold text-gray-900"
                          to='/perfil'>
                          Perfil
                          <span className="absolute inset-0" />
                        </Link>
                      </div>
                    </div>
                    <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <ArrowLeftOnRectangleIcon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <button 
                          className="block font-semibold text-gray-900"
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
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <h4 className='text-4xl text-sky-600 font-black text-center'>
                ProyectosApp
              </h4>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                
                <Link
                  to="/proyectos"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-semibold leading-6 text-gray-900"
                  >
                  PROYECTOS
                </Link>
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
                              onClick={ close() }
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
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

export default Header