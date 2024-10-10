import { formAddCategory } from '@/app/actions/actions'
import { allCategories } from '@/app/api/catalog/category/route'
import { allViews } from '@/app/api/cms/view/route'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function AddCategory() {
    const views = await allViews()
    const categories = await allCategories()
    async function addCategoryAction(params) {
        'use server'
        const sendData = await formAddCategory(params)
        console.log(sendData)
        if (sendData.status === 'ok') {
            redirect(`/administrator/categories`)
        }
    }
    return (
        <form className="w-full max-w-3xl mt-10 mb-10" action={addCategoryAction}>
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
                        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" name='id_vista'>
                            <option value='Desactivo'>Selecciona una vista</option>
                            {
                                views.length ? views.map((vw, index) => (
                                    <option value={vw.id} key={index}>{vw.name}</option>
                                )) : <option>Sin data</option>
                            }
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 px-3 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                        Pertenece a
                    </label>
                    <div className="relative">
                        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" name='parent_id'>
                            <option value='Desactivo'>Selecciona una categoría</option>
                            {
                                categories.length ? categories.map((ctg, index) => (
                                    <option value={ctg.id_category} key={index}>{ctg.name}</option>
                                )) : <option>Sin data</option>
                            }
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <button className="shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 bg-primary w-64 hover:bg-hover-primary sm:mt-0 lg:mt-4 xl:mt-4 text-white font-bold py-2 px-10 rounded-lg focus:outline-none focus:shadow-outline flex justify-center" type="submit">
                    Agregar categoría
                </button>
            </div>
        </form>
    )
}
