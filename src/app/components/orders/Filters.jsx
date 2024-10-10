import React from 'react'

function Filters() {
    return (
        <>
            <div className="grid grid-cols-2 justify-between p-4">
                <div className="flex justify-start col-span-1">
                    <h1 className="ml-5 mt-3">Filtros</h1>
                </div>
                <div className="flex justify-end col-span-1">
                    <h1 className="mr-5 mt-5 text-xs">limpiar</h1>
                </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-3 justify-between p-4">
                <div className="col-span-1 mt-3 max-w-22 flex justify-center">
                    <span className="inline-block bg-secondary text-white text-xxs px-2 py-1 rounded-full"><div className="grid grid-cols-2"> <div className="col-span-1 flex justify-start">Efectivo</div><div className="col-span-1 flex justify-end"><button className="px-1 border-0 hover:bg-hover-primary">x</button></div></div></span>
                </div>
                <div className="col-span-1 mt-3 max-w-22 flex justify-center">
                    <span className="inline-block bg-secondary text-white text-xxs px-2 py-1 rounded-full"><div className="grid grid-cols-2"> <div className="col-span-1 flex justify-start">Store</div><div className="col-span-1 flex justify-end"><button className="px-1 border-0 hover:bg-hover-primary">x</button></div></div></span>
                </div>
                <div className="col-span-1 mt-3 max-w-22 flex justify-center">
                    <span className="inline-block bg-secondary text-white text-xxs px-2 py-1 rounded-full"><div className="grid grid-cols-2"> <div className="col-span-1 flex justify-start">Debito</div><div className="col-span-1 flex justify-end"><button className="px-1 border-0 hover:bg-hover-primary">x</button></div></div></span>
                </div>
                <div className="col-span-1 mt-3 max-w-22 flex justify-center">
                    <span className="inline-block bg-secondary text-white text-xxs px-2 py-1 rounded-full"><div className="grid grid-cols-2"> <div className="col-span-1 flex justify-start">Credito</div><div className="col-span-1 flex justify-end"><button className="px-1 border-0 hover:bg-hover-primary">x</button></div></div></span>
                </div>
            </div>
            <hr></hr>
            <div className="grid grid-cols-2 justify-between p-4">
                <div className="flex justify-start col-span-2">
                    <h1 className="ml-5 mb-3">Tipo de pago</h1>
                </div>

                <div className="flex justify-start col-span-1">
                    <h1 className="ml-5 mt-3 text-sm">Efectivo</h1>
                </div>
                <div className="flex justify-end col-span-1">
                    <h1 className="ml-5 mt-3 text-xs"><span className="inline-block bg-secondary text-white text-xs px-2 py-1 rounded-full">5</span></h1>
                </div>

                <div className="flex justify-start col-span-1">
                    <h1 className="ml-5 mt-3 text-sm">Credito</h1>
                </div>
                <div className="flex justify-end col-span-1">
                    <h1 className="ml-5 mt-3 text-xs"><span className="inline-block bg-secondary text-white text-xs px-2 py-1 rounded-full">5</span></h1>
                </div>

                <div className="flex justify-start col-span-1">
                    <h1 className="ml-5 mt-3 text-sm">Debito</h1>
                </div>
                <div className="flex justify-end col-span-1">
                    <h1 className="ml-5 mt-3 text-xs"><span className="inline-block bg-secondary text-white text-xs px-2 py-1 rounded-full">5</span></h1>
                </div>

                <div className="flex justify-start col-span-1">
                    <h1 className="ml-5 mt-3 text-sm">Giftcard</h1>
                </div>
                <div className="flex justify-end col-span-1">
                    <h1 className="ml-5 mt-3 text-xs"><span className="inline-block bg-secondary text-white text-xs px-2 py-1 rounded-full">5</span></h1>
                </div>
                <div className="flex justify-start col-span-1">
                    <h1 className="ml-5 mt-3 text-sm">Puntos</h1>
                </div>
                <div className="flex justify-end col-span-1">
                    <h1 className="ml-5 mt-3 text-xs"><span className="inline-block bg-secondary text-white text-xs px-2 py-1 rounded-full">5</span></h1>
                </div>
            </div>
            <hr></hr>
            <div className="grid grid-cols-1 justify-between p-4">
                <div className="flex justify-start col-span-2">
                    <h1 className="ml-5 mb-3">Tipo de orden</h1>
                </div>
                <div className="mb-1 ml-2 mr-2">
                    <input className="shadow appearance-none border rounded text-sm w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="search_brands" type="text" placeholder="Buscar..." />
                </div>
                <div className="flex justify-start col-span-2">
                    <h1 className="ml-5 mt-3 text-sm">Store</h1>
                </div>

                <div className="flex justify-start col-span-2">
                    <h1 className="ml-5 mt-3 text-sm">Online</h1>
                </div>
            </div>

        </>
    )
}

export default Filters