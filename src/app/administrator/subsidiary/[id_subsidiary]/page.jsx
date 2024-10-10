import React from 'react'
import Link from "next/link";
import { subsidiaryById } from '@/app/api/sales/subsidiary/route';
import * as IconLu from "react-icons/lu";
import { formUpdateSubsidiary } from '@/app/actions/actions';
import { redirect } from 'next/navigation';

export default async function page({params}) {
    const id = params.id_subsidiary
    const items = await subsidiaryById(id)

    async function updateSubsidiary(body) {
        'use server'
        const edit = await formUpdateSubsidiary(body, id)
        if (edit) {
            redirect('/administrator/subsidiary')
        } else {
            swal.fire({
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
                    <Link href='/administrator/subsidiary' >
                        <div className="bg-primary hover:bg-hover-primary w-10 h-10 shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105  flex justify-center items-center text-white font-bold rounded-full focus:outline-none focus:shadow-outline">
                            <IconLu.LuArrowBigLeft />
                        </div>
                    </Link>
                </div>
                <div className="py-3 col-span-3 rounded overflow-hidden shadow-lg bg-blanco">
                    <div className="grid grid-cols-8">
                        <div className="col-span-8 sm:col-span-8 md:col-span-2 lg:col-span-2 xl:col-span-2 ml-5 mt-2">
                            <h1 className="font-bold text-2xl">Actualizar sucursal</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 gap-10">
                <div className="col-span-4 max-w-8xl rounded shadow-lg flex flex-wrap justify-center bg-blanco">
                    <form className="w-full max-w-3xl mt-10 mb-10" action={updateSubsidiary}>
                    {items.map((item, index) => (
                        <div className="flex flex-wrap -mx-3 mb-6" key={index}>
                            <div className="w-full md:w-1/2 px-3 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                    Nombre
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" name='name' defaultValue={item.name}/>
                            </div>
                            <div className="w-full px-3 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                    Dirección
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" name='adress' defaultValue={item.adress} />
                            </div>
                        </div>
                        ))}
                        <div className="flex justify-center">
                            <button className="shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 bg-primary w-64 hover:bg-hover-primary sm:mt-0 lg:mt-4 xl:mt-4 text-white font-bold py-2 px-10 rounded-lg focus:outline-none focus:shadow-outline flex justify-center" type="submit">
                                Actualizar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}