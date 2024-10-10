import { formUpdateCategory } from '@/app/actions/actions';
import { allCategories, categoriesById, updateCategory } from '@/app/api/catalog/category/route';
import Link from 'next/link'
import { redirect } from 'next/navigation';
import React from 'react'
import * as IconLu from "react-icons/lu";
import Swal from 'sweetalert2';

export default async function Page(params) {

    const id = params.params.id_category
    const category = await categoriesById(id)
    console.log(category)
    const categories = await allCategories()

    async function updateCategory(body) {
        'use server'
        const edit = await formUpdateCategory(body, id)
        if (edit) {
            redirect('/administrator/categories')
        } else {
            Swal.fire({
                title: 'Error al actualizar!',
                icon: "warning",
                timer: 1500,
                toast: true,
                showConfirmButton: false,
                position: 'top',
            });
        }
    }

    return (
        <main className=" flex min-h-screen flex-col px-12 bg-gris">
            <div className="grid grid-cols-1 mt-5">
                <div className="col-span-1 mb-4">
                    <Link href='/administrator/categories' >
                        <div className="bg-primary hover:bg-hover-primary w-10 h-10 flex justify-center items-center text-white font-bold rounded-full focus:outline-none focus:shadow-outline shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 ">
                            <IconLu.LuArrowBigLeft />
                        </div>
                    </Link>
                </div>
                <div className="py-3 col-span-3 rounded overflow-hidden shadow-lg bg-blanco">
                    <div className="grid grid-cols-8">
                        <div className="col-span-8 sm:col-span-8 md:col-span-2 lg:col-span-2 xl:col-span-1 ml-5 mt-2">
                            <h1 className="font-bold text-2xl">Actualizar categoría</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 gap-10">
                <div className="col-span-4 max-w-8xl rounded shadow-lg flex flex-wrap justify-center bg-blanco">
                    <form className="w-full max-w-3xl mt-10 mb-10" action={updateCategory}>
                        {
                            category.map((ctg, index) => (
                                <div className="flex flex-wrap -mx-3 mb-6" key={index}>
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
                                            defaultValue={ctg.name}
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
                                            defaultValue={ctg.path}
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
                                            defaultValue={ctg.description}
                                        />
                                    </div>

                                    <div className="w-full md:w-1/2 px-3 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                            Icono
                                        </label>
                                        <img className='' src={ctg.image_category} />
                                        <input
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="grid-last-name"
                                            type="text"
                                            placeholder="http//..."
                                            name='image'
                                            defaultValue={ctg.image_category}
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
                                    <div className="w-full md:w-1/2 px-3 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0 mt-2">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                                            Pertenece a
                                        </label>
                                        <div className="relative">
                                            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" name='parent_id' defaultValue={ctg.parent_id}>
                                                <option value='Desactivo'>Selecciona una categoría</option>
                                                {
                                                    categories.length ? categories.map((ct, index) => (
                                                        <option value={ct.id_category} key={index}>{ct.name}</option>
                                                    )) : <option>Sin data</option>
                                                }
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                        <div className="flex justify-center">
                            <button className="shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 bg-primary w-64 hover:bg-hover-primary sm:mt-0 lg:mt-4 xl:mt-4 text-white font-bold py-2 px-10 rounded-lg focus:outline-none focus:shadow-outline flex justify-center" type="submit">
                                Actualizar categoría
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}
