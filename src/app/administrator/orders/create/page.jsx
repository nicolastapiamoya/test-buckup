import Link from 'next/link'
import React from 'react'

export default function CreateOrder() {
  return (
    <main className=" flex min-h-screen flex-col px-12 bg-gris">
      <div className="grid grid-cols-1 mt-5">
        <div className="py-3 col-span-3 rounded overflow-hidden shadow-lg bg-blanco">
          <div className="grid grid-cols-8">
            <div className="col-span-8 sm:col-span-8 md:col-span-2 lg:col-span-2 xl:col-span-1 ml-5 mt-2">
              <h1 className="font-semibold text-lg">Crear orden</h1>
            </div>
            <div className="col-span-8 sm:col-span-8 md:col-span-2 lg:col-span-2 xl:col-span-1 mt-5 sm:mt-5 md:mt-0 lg:mt-0 xl:mt-0 flex justify-center">
              <Link className="bg-primary hover:bg-hover-primary text-white font-bold py-2 px-10 rounded-lg focus:outline-none focus:shadow-outline" href='/dashboard/orders' type="button">
                Volver
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 gap-10">
        <div className="col-span-4 max-w-8xl rounded shadow-lg flex flex-wrap justify-center bg-blanco">
          {/* <AddOrder></AddOrder> */ }
        </div>
      </div>
    </main>
  )
}
