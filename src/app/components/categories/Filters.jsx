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
                    <span className="inline-block bg-secondary text-white text-xxs px-2 py-1 rounded-full"><div className="grid grid-cols-2"> <div className="col-span-1 flex justify-start">Tecnología</div><div className="col-span-1 flex justify-end"><button className="px-1 border-0 hover:bg-hover-primary">x</button></div></div></span>
                </div>
                <div className="col-span-1 mt-3 max-w-22 flex justify-center">
                    <span className="inline-block bg-secondary text-white text-xxs px-2 py-1 rounded-full"><div className="grid grid-cols-2"> <div className="col-span-1 flex justify-start">Dell</div><div className="col-span-1 flex justify-end"><button className="px-1 border-0 hover:bg-hover-primary">x</button></div></div></span>
                </div>
                <div className="col-span-1 mt-3 max-w-22 flex justify-center">
                    <span className="inline-block bg-secondary text-white text-xxs px-2 py-1 rounded-full"><div className="grid grid-cols-2"> <div className="col-span-1 flex justify-start">Samsung</div><div className="col-span-1 flex justify-end"><button className="px-1 border-0 hover:bg-hover-primary">x</button></div></div></span>
                </div>
                <div className="col-span-1 mt-3 max-w-22 flex justify-center">
                    <span className="inline-block bg-secondary text-white text-xxs px-2 py-1 rounded-full"><div className="grid grid-cols-2"> <div className="col-span-1 flex justify-start">Apple</div><div className="col-span-1 flex justify-end"><button className="px-1 border-0 hover:bg-hover-primary">x</button></div></div></span>
                </div>
                <div className="col-span-1 mt-3 max-w-22">
                    <span className="inline-block bg-secondary text-white text-xxs px-2 py-1 rounded-full"><div className="grid grid-cols-2"> <div className="col-span-1 flex justify-start">Lenovo</div><div className="col-span-1 flex justify-end"><button className="px-1 border-0 hover:bg-hover-primary">x</button></div></div></span>
                </div>
                <div className="col-span-1 mt-3 max-w-22">
                    <span className="inline-block bg-secondary text-white text-xxs px-2 py-1 rounded-full"><div className="grid grid-cols-2"> <div className="col-span-1 flex justify-start">Asus</div><div className="col-span-1 flex justify-end"><button className="px-1 border-0 hover:bg-hover-primary">x</button></div></div></span>
                </div>
                <div className=" col-span-1 mt-3 max-w-22">
                    <span className="inline-block bg-secondary text-white text-xxs px-2 py-1 rounded-full"><div className="grid grid-cols-2"> <div className="col-span-1 flex justify-start">Huawei</div><div className="col-span-1 flex justify-end"><button className="px-1 border-0 hover:bg-hover-primary">x</button></div></div></span>
                </div>
            </div>
            <hr></hr>
            <div className="grid grid-cols-2 justify-between p-4">
                <div className="flex justify-start col-span-2">
                    <h1 className="ml-5 mb-3">Categorías</h1>
                </div>

                <div className="flex justify-start col-span-1">
                    <h1 className="ml-5 mt-3 text-sm">Tecnología</h1>
                </div>
                <div className="flex justify-end col-span-1">
                    <h1 className="ml-5 mt-3 text-xs"><span className="inline-block bg-secondary text-white text-xs px-2 py-1 rounded-full">5</span></h1>
                </div>

                <div className="flex justify-start col-span-1">
                    <h1 className="ml-5 mt-3 text-sm">Linea blanca</h1>
                </div>
                <div className="flex justify-end col-span-1">
                    <h1 className="ml-5 mt-3 text-xs"><span className="inline-block bg-secondary text-white text-xs px-2 py-1 rounded-full">5</span></h1>
                </div>

                <div className="flex justify-start col-span-1">
                    <h1 className="ml-5 mt-3 text-sm">Hombre</h1>
                </div>
                <div className="flex justify-end col-span-1">
                    <h1 className="ml-5 mt-3 text-xs"><span className="inline-block bg-secondary text-white text-xs px-2 py-1 rounded-full">5</span></h1>
                </div>

                <div className="flex justify-start col-span-1">
                    <h1 className="ml-5 mt-3 text-sm">Mujer</h1>
                </div>
                <div className="flex justify-end col-span-1">
                    <h1 className="ml-5 mt-3 text-xs"><span className="inline-block bg-secondary text-white text-xs px-2 py-1 rounded-full">5</span></h1>
                </div>
                <div className="flex justify-start col-span-1">
                    <h1 className="ml-5 mt-3 text-sm">Infantil</h1>
                </div>
                <div className="flex justify-end col-span-1">
                    <h1 className="ml-5 mt-3 text-xs"><span className="inline-block bg-secondary text-white text-xs px-2 py-1 rounded-full">5</span></h1>
                </div>
                <div className="flex justify-start col-span-1">
                    <h1 className="ml-5 mt-3 text-sm">Servicios</h1>
                </div>
                <div className="flex justify-end col-span-1">
                    <h1 className="ml-5 mt-3 text-xs"><span className="inline-block bg-secondary text-white text-xs px-2 py-1 rounded-full">5</span></h1>
                </div>
            </div>
            <hr></hr>
            <div className="grid grid-cols-1 justify-between p-4">
                <div className="flex justify-start col-span-2">
                    <h1 className="ml-5 mb-3">Marcas</h1>
                </div>
                <div className="mb-1 ml-2 mr-2">
                    <input className="shadow appearance-none border rounded text-sm w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="search_brands" type="text" placeholder="Buscar..." />
                </div>
                <div className="flex justify-start col-span-2">
                    <h1 className="ml-5 mt-3 text-sm">Dell</h1>
                </div>

                <div className="flex justify-start col-span-2">
                    <h1 className="ml-5 mt-3 text-sm">Lenovo</h1>
                </div>

                <div className="flex justify-start col-span-2">
                    <h1 className="ml-5 mt-3 text-sm">Asus</h1>
                </div>

                <div className="flex justify-start col-span-2">
                    <h1 className="ml-5 mt-3 text-sm">HP</h1>
                </div>
                <div className="flex justify-start col-span-2">
                    <h1 className="ml-5 mt-3 text-sm">Samsung</h1>
                </div>
                <div className="flex justify-start col-span-2">
                    <h1 className="ml-5 mt-3 text-sm">Huawei</h1>
                </div>
                <div className="flex justify-start col-span-2">
                    <h1 className="ml-5 mt-3 text-sm">Apple</h1>
                </div>
                <div className="flex justify-start col-span-2">
                    <h1 className="ml-5 mt-3 text-sm text-primary">Mostrar más...</h1>
                </div>
            </div>

        </>
    )
}

export default Filters