import React from 'react'

export default function page({ params }) {
    return (
        <main className="flex min-h-screen flex-col z-0">

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                <div className="col-span-2 justify-center flex mt-10 font-normal text-3xl p-3">Alimento gato ekos cat gato 10 kg {params.id_product}</div>
                <div className="col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 justify-center flex p-5 font-light text-md">
                    Acerca de Puppys Nutrition
                    Somos una tienda para Mascotas ubicados en Limache Valparaíso. Nos dedicamos a ofrecer la mejor alimentación Premium y Super Premium para tus mascotas, asegurando su bienestar y salud integral.
                </div>
                <div className="col-span-1 justify-center flex p-5">
                    <img src='https://30c5ab-27.myshopify.com/cdn/shop/files/BOREAL_ORIGINAL_GATO_FISH_TRIO_2_26KG_SUPER_PREMIUM.jpg?v=1719610191&width=360'></img>
                </div>
                <div className="col-span-2 justify-center flex">
                    <button className="w-40 h-10 border-solid border rounded-lg hover:bg-primary hover:text-white">Añadir al carro</button>
                </div>
            </div>
        </main>
    )
}
