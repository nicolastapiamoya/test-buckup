
'use server'
import * as IconLu from "react-icons/lu";
import React from "react";
import Link from "next/link";

export default async function InventoriesTable({ inventories }) {

    return (
        <div className='overflow-x-auto'>
            <div className="mb-1 ml-2 mr-2 mt-5">
                <input className="shadow appearance-none border rounded text-sm w-full py-1.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="search_brands" type="text" placeholder="Buscar..." />
            </div>
            <table className="table-fixed mb-3 mt-5 inline-block">
                <thead>
                    <tr className="border-solid border-2">
                        <th className="px-4 py-1 font-semibold inline-block ml-5">#id</th>
                        <th className="px-4 py-1 font-semibold">Id variacion</th>
                        <th className="px-4 py-1 font-semibold">Stock</th>
                        <th className="px-4 py-1 font-semibold">Tipo de inventario</th>
                        <th className="px-4 py-1 font-semibold">Id producto</th>
                        <th className="px-4 py-1 font-semibold">Id sucursal</th>
                        <th className="px-4 py-1 font-semibold"></th>
                    </tr>
                </thead>
                <tbody>
                    {inventories.length > 0 ? inventories.map((inv, index) => (
                        <tr key={`${inv.id_product_inventory}-${index}`}>
                            <td className="border px-4 py-1 text-sm text-center">{inv.id_product_inventory}</td>
                            <td className="border px-4 py-1 text-sm  text-center">
                                {inv.id_product_variations ?
                                    <div className="bg-primary text-white font-bold py-0.5 px-4 rounded-full text-xxs inline-block text-center w-full">Variación {inv.id_product_variations}</div>
                                    :
                                    <div className="bg-naranja text-xxs text-white font-bold py-0.5 px-4 rounded-full inline-block text-center w-full">Producto master</div>
                                }
                            </td>
                            <td className="border px-4 py-1 text-sm">{inv.stock_quantity}</td>
                            <td className="border px-4 py-1 text-sm text-center">
                                {inv.type_inventory === 'store' ?
                                    <div className="bg-primary text-white font-bold py-0.5 px-4 rounded-full text-xxs inline-block text-center w-full">Store</div>
                                    :
                                    <div className="bg-naranja text-xxs text-white font-bold py-0.5 px-4 rounded-full inline-block text-center w-full">On line</div>
                                }
                            </td>
                            <td className="border px-4 py-1 text-sm">{inv.id_product}</td>
                            <td className="border px-4 py-1 text-sm">{inv.id_sucursal}</td>
                            <td className="border px-4 py-1">
                                <Link href={`/administrator/inventories/${inv.id_product_inventory}`}>
                                    <div className="shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 bg-celeste hover:bg-hover-celeste text-white font-bold py-1 px-4 rounded-full">
                                        <IconLu.LuEye />
                                    </div>
                                </Link>
                            </td>
                            <td className="border px-4 py-1">
                                <button className="shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 bg-primary hover:bg-hover-primary text-white font-bold py-1 px-4 rounded-full" >
                                    <IconLu.LuX />
                                </button>
                            </td>
                        </tr>
                    )) : <></>}
                </tbody>
            </table>
        </div>
    );
}
