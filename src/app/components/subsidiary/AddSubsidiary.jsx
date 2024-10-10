import { formAddSubsidiary } from '@/app/actions/actions'
import { redirect } from 'next/navigation'
import React from 'react'
import Swal from 'sweetalert2'

export default function AddSubsidiary() {

    async function addSub(params) {
        'use server'
        const sendData = await formAddSubsidiary(params)
        console.log('first')
        console.log(sendData)

        if ( sendData.status === 'ok') {
            redirect(`/administrator/subsidiary`)
        }
    }

    return (
        <form className="w-full max-w-3xl mt-10 mb-10" action={addSub}>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                        Nombre
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" name="name"/>
                </div>
                <div className="w-full px-3 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                        Dirección
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Calle nombe #182, Region 5, Chile" name='adress'/>
                </div>
            </div>
            <div className="flex justify-center">
                <button className="shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 bg-primary w-64 hover:bg-hover-primary sm:mt-0 lg:mt-4 xl:mt-4 text-white font-bold py-2 px-10 rounded-lg focus:outline-none focus:shadow-outline flex justify-center" type="submit">
                    Agregar
                </button>
            </div>
        </form>
    )
}