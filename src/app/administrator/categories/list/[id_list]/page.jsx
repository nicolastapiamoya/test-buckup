
import Link from 'next/link'
import React from 'react'

export default function ListCategoryDetailPage({ params }) {
  console.log(params)
  return (
    <main className=" flex min-h-screen flex-col px-12 bg-gris">
      <div className="grid grid-cols-1 mt-5">
        <div className="py-3 col-span-3 rounded overflow-hidden shadow-lg bg-blanco">
          <div className="grid grid-cols-8">
            <div className="col-span-8 sm:col-span-8 md:col-span-2 lg:col-span-2 xl:col-span-2 ml-5 mt-2">
              <h1 className="font-semibold text-lg">Añade categorías a la lista</h1>
            </div>
            <div className="col-span-8 sm:col-span-8 md:col-span-2 lg:col-span-2 xl:col-span-1 mt-5 sm:mt-5 md:mt-0 lg:mt-0 xl:mt-0 flex justify-center">
              <Link className="bg-primary hover:bg-hover-primary text-white font-bold py-2 px-10 rounded-lg focus:outline-none focus:shadow-outline" href='/administrator/categories/list' type="button">
                Volver
              </Link>
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
