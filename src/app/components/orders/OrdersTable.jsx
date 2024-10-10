'use server'
import * as IconLu from "react-icons/lu";
import React from "react";
import Link from "next/link";
export default async function OrdersTable({ orders }) {


    return (
        <div className='overflow-x-auto'>
            <div className="mb-1 ml-5 mr-5 mt-5">
                <input className="shadow appearance-none border rounded text-sm w-full py-1.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="search_brands" type="text" placeholder="Buscar..." />
            </div>
            <table className="table-fixed mb-3 mt-5 inline-block ml-5 mr-5">
                <thead>
                    <tr className="border-solid border-2">
                        <th className="px-4 py-1 font-semibold inline-block ml-5">#Id</th>
                        <th className="px-4 py-1 font-semibold">Carro</th>
                        <th className="px-4 py-1 font-semibold">Tipo de orden</th>
                        <th className="px-4 py-1 font-semibold">Metodo de pago</th>
                        <th className="px-4 py-1 font-semibold">Despacho</th>
                        <th className="px-4 py-1 font-semibold">Fecha de creación</th>
                        <th className="px-4 py-1 font-semibold">Monto total</th>
                        <th className="px-4 py-1 font-semibold"></th>
                    </tr>
                </thead>
                <tbody>
                    {orders.length > 0 ? orders.map((ord, index) => (
                        <tr key={`${ord.id_order}-${index}`}>
                            <td className="border px-4 py-1 text-sm text-center">{ord.id_order}</td>
                            <td className="border px-4 py-1 text-sm">{ord.id_shopping_cart}</td>
                            <td className="border px-4 py-1 text-sm">{ord.type_order}</td>
                            <td className="border px-4 py-1 text-sm">{ord.payment_method}</td>
                            <td className="border px-4 py-1 text-sm">{ord.delivery}</td>
                            <td className="border px-4 py-1 text-sm">{ord.created_at}</td>
                            <td className="border px-4 py-1 text-sm">{ord.total}</td>
                            <td className="border px-4 py-1">
                                <Link href={`/dashboard/orders/${ord.id_order}`}>
                                    <div className="bg-celeste hover:bg-hover-celeste text-white font-bold py-1 px-4 rounded-full">
                                        <IconLu.LuEye />
                                    </div>
                                </Link>
                            </td>
                            <td className="border px-4 py-1">
                                <button className="bg-primary hover:bg-hover-primary text-white font-bold py-1 px-4 rounded-full">
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
