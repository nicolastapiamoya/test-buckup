import Link from 'next/link'
import React from 'react'
export const runtime = 'edge'; 
export default function page(params) {
    const id = params.id_category

    return (
        <main className=" flex min-h-screen flex-col px-12 bg-gris">
            <div className="grid grid-cols-1 mt-5">
                <div className="py-3 col-span-3 rounded overflow-hidden shadow-lg bg-blanco">
                    <div className="grid grid-cols-8">
                        <div className="col-span-8 sm:col-span-8 md:col-span-2 lg:col-span-2 xl:col-span-1 ml-5 mt-2">
                            <h1 className="font-semibold text-lg">Actualizar categoría {id}</h1>
                        </div>
                        <div className="col-span-8 sm:col-span-8 md:col-span-2 lg:col-span-2 xl:col-span-1 mt-5 sm:mt-5 md:mt-0 lg:mt-0 xl:mt-0 flex justify-center">
                            <Link className="bg-primary hover:bg-hover-primary text-white font-bold py-2 px-10 rounded-lg focus:outline-none focus:shadow-outline" href='/administrator/categories' type="button">
                                Volver
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 gap-10">
                <div className="col-span-4 max-w-8xl rounded shadow-lg flex flex-wrap justify-center bg-blanco">
                    <form className="w-full max-w-3xl mt-10 mb-10">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                    Nombre categoría
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    id="grid-first-name"
                                    type="text"
                                    placeholder="Jane"
                                    name='name'
                                />
                            </div>
                            <div className="w-full md:w-1/2 px-3 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                    Path
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    id="grid-first-name"
                                    type="text"
                                    placeholder="Jane"
                                    name='path'
                                />
                            </div>
                            <div className="w-full px-3 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                    Descripción
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    id="grid-first-name"
                                    type="text"
                                    placeholder="Calle nombe #182, Region 5, Chile"
                                    name='description'
                                />
                            </div>

                            <div className="w-full md:w-1/2 px-3 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                    Icono
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="grid-last-name"
                                    type="text"
                                    placeholder="http//..."
                                    name='image'
                                />
                            </div>
                            <div className="w-full md:w-1/2 px-3 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                                    Asignar vista
                                </label>
                                <div className="relative">
                                    <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" name='status'>
                                        <option value='Activo'>Vista home</option>
                                        <option value='Desactivo'>Vista categoria linea blanca</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button className="bg-primary w-64 hover:bg-hover-primary sm:mt-0 lg:mt-4 xl:mt-4 text-white font-bold py-2 px-10 rounded-lg focus:outline-none focus:shadow-outline flex justify-center" type="submit">
                                Actualizar categoría
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}
