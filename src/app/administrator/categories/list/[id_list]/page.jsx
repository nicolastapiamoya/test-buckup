
import Link from 'next/link'
import React from 'react'
import * as IconLu from "react-icons/lu";

export default function ListCategoryDetailPage({ params }) {
  console.log(params)
  return (
    <main className=" flex min-h-screen flex-col px-12 bg-gris">
      <div className="grid grid-cols-1 mt-5">
      <div className="col-span-1 mb-4">
          <Link href='/administrator/categories/list' >
            <div className="bg-primary hover:bg-hover-primary w-10 h-10 shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105  flex justify-center items-center text-white font-bold rounded-full focus:outline-none focus:shadow-outline">
              <IconLu.LuArrowBigLeft />
            </div>
          </Link>
        </div>
        <div className="py-3 col-span-3 rounded overflow-hidden shadow-lg bg-blanco">
          <div className="grid grid-cols-8">
            <div className="col-span-8 sm:col-span-8 md:col-span-2 lg:col-span-2 xl:col-span-2 ml-5 mt-2">
              <h1 className="font-bold text-2xl">Añade categorías a la lista</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-6 xl:grid-cols-6 gap-10 mb-5">
        <div className="col-span-2 max-w-8xl rounded shadow-lg flex flex-wrap justify-center bg-blanco">
          <div className="w-full px-3 mb-6 mt-0 sm:mt-0 md:mt-4 lg:mt-4 xl:mt-0 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0">
            <label className="mt-4 block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="grid-state">
              Selecciona las categorías
            </label>
          </div>
        </div>
        <div className="col-span-4 max-w-8xl rounded shadow-lg flex flex-wrap justify-center bg-blanco">
          <div className="w-full px-3 mb-6 mt-0 sm:mt-0 md:mt-4 lg:mt-4 xl:mt-0 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0">
            <label className="ml-5 mt-5 block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="grid-state">
              Categorías en la lista
            </label>
          </div>
        </div>
      </div>
    </main>
  )
}
