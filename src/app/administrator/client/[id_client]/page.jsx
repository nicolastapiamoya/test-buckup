import React from 'react'
import Link from "next/link";
import { ClientById } from '@/app/api/client/route';
import * as IconLu from "react-icons/lu";
import { formUpdateClient } from '@/app/actions/actions';
import Swal from 'sweetalert2';
import { redirect } from 'next/navigation';

export default async function page({ params }) {
    const id = params.id_client
    const items = await ClientById(id)

    async function updateClient(body) {
        'use server'
        const edit = await formUpdateClient(body, id)
        if (edit) {
            redirect('/administrator/client')
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
                    <Link href='/administrator/client' >
                        <div className="bg-primary hover:bg-hover-primary w-10 h-10 shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105  flex justify-center items-center text-white font-bold rounded-full focus:outline-none focus:shadow-outline">
                            <IconLu.LuArrowBigLeft />
                        </div>
                    </Link>
                </div>
                <div className="py-3 col-span-3 rounded overflow-hidden shadow-lg bg-blanco">
                    <div className="grid grid-cols-8">
                        <div className="col-span-8 sm:col-span-8 md:col-span-2 lg:col-span-2 xl:col-span-1 ml-5 mt-2">
                            <h1 className="font-bold text-2xl">Actualizar cliente</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 gap-10">
                <div className="col-span-4 max-w-8xl rounded shadow-lg flex flex-wrap justify-center bg-blanco">
                    <form className="w-full max-w-3xl mt-10 mb-10" action={updateClient}>
                        {items.map((item, index) => (
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                        Nombre
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" name='name' defaultValue={item.name} />
                                </div>
                                <div className="w-full px-3 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                        Direccion
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" name='adress' defaultValue={item.adress} />
                                </div>
                                <div className="w-full px-3 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                        Rut
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" name='dni' defaultValue={item.dni} />
                                </div>
                                <div className="w-full px-3 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                        Email
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" name='email' defaultValue={item.email} />
                                </div>
                                <div className="w-full md:w-1/2 px-3 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                        Password
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="grid-password"
                                        type="password"
                                        placeholder="******************"
                                        name='password'
                                        defaultValue={item.password}
                                    />
                                    <p className="text-gray-600 text-xs italic">Recuerda!, tu contraseña debe ser segura</p>
                                </div>
                                <div className="w-full md:w-1/2 px-3 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                        Telefono
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" name='telephone' defaultValue={item.telephone} />
                                </div>
                                <div className="w-full md:w-1/2 px-3 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                                        Estado
                                    </label>
                                    <div className="relative">
                                        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4defaultValue={item.telephone} pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" name='status' defaultValue={item.status}>
                                            <option value={true}>Activo</option>
                                            <option value={false}>Bloqueado</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="flex justify-center">
                            <button className="bg-primary w-64 hover:bg-hover-primary sm:mt-0 lg:mt-4 xl:mt-4 text-white font-bold py-2 px-10 rounded-lg focus:outline-none focus:shadow-outline flex justify-center" type="submit">
                                Actualizar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}