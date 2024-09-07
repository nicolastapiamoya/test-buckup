'use server'
import { allProductlist } from "@/app/api/productList/route";
import Link from "next/link";
import React from "react";
import DeleteButtonServerList from "./DeleteButtonServerList";



export default async function ListProductTable() {

    const lists = await allProductlist()
    
    return (
        <div className='overflow-x-auto'>
            <table className="table-fixed mb-3 mt-5 inline-block">
                <thead>
                    <tr className="border-solid border-2">
                        <th className="px-4 py-1 font-semibold inline-block ml-5">#ID</th>
                        <th className="px-4 py-1 font-semibold">Nombre</th>
                        <th className="px-4 py-1 font-semibold">Descripción</th>
                        <th className="px-4 py-1 font-semibold"></th>
                    </tr>
                </thead>
                <tbody>
                {lists.length ? lists.map((list, index) => (
                        <tr key={`${list.id_list_product}-${index}`}>
                            <td className="border px-4 py-1 text-sm">{list.id_product_list}</td>
                            <td className="border px-4 py-1 text-sm">{list.name}</td>
                            <td className="border px-4 py-1 text-sm">{list.description}</td>
                            <td className="border px-4 py-1">
                                <Link className="bg-celeste hover:bg-hover-celeste text-white font-bold py-1 px-4 rounded-full" href={`/administrator/products/list/${list.id_product_list}`}>
                                    Ver
                                </Link>
                            </td>
                            <td className="border px-4 py-1">
                            <DeleteButtonServerList id_product_list={list.id_product_list}/>
                            </td>
                        </tr>
                    )) : <></>}
                </tbody>
            </table>
        </div>
    );
}
