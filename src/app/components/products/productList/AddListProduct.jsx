import { formAddListProduct } from '@/app/actions/actions'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import React from 'react'

export default function AddListProduct() {
  return (
    <form className="w-full max-w-3xl mt-10 mb-10" action={async (data) => {
        'use server'
        const productList = await formAddListProduct(data)
        if(productList.status === 'ok'){
            revalidatePath('/administrator/products/list')
            redirect('/administrator/products/list')
        }
        }}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            Nombre
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
            name="name"
          />
        </div>
        <div className="w-full px-3 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-description"
          >
            Descripción
          </label>

          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-description"
            type="text"
            placeholder="Promoción 20% ..."
            name="description"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-primary w-64 hover:bg-hover-primary sm:mt-0 lg:mt-4 xl:mt-4 text-white font-bold py-2 px-10 rounded-lg focus:outline-none focus:shadow-outline flex justify-center"
          type="submit"
        >
          Agregar
        </button>
      </div>
    </form>
  )
}
