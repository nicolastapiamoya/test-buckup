'use server'

import Link from "next/link";
import React from "react";
import * as IconLu from "react-icons/lu";
import DeleteButtonServer from "./DeleteButtonServer";

export default async function CategoriesTable({ categories }) {

    return (
        <div className='overflow-x-auto'>
            <div className="mb-1 ml-2 mr-2 mt-5">
                <input className="shadow appearance-none border rounded text-sm w-full py-1.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="search_brands" type="text" placeholder="Buscar..." />
            </div>

                <table className="table-fixed mb-3 mt-5 inline-block">
                    <thead>
                        <tr className="border-solid border-2">
                            <th className="px-4 py-1 font-semibold inline-block ml-5">#id</th>
                            <th className="px-4 py-1 font-semibold">Nombre</th>
                            <th className="px-4 py-1 font-semibold">Descripción</th>
                            <th className="px-4 py-1 font-semibold">Icono</th>
                            <th className="px-4 py-1 font-semibold">Path</th>
                            <th className="px-4 py-1 font-semibold"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.length > 0 ? categories.map((ctg, index) => (
                            <tr key={`${ctg.id_category}-${index}`}>
                                <td className="border px-4 py-1 text-sm text-center">{ctg.id_category}</td>
                                <td className="border px-4 py-1 text-sm">{ctg.name}</td>
                                <td className="border px-4 py-1 text-sm">{ctg.description}</td>

                                <td className="border px-4 py-1 text-sm">
                                    <img
                                        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert mb-2 w-10 h-10"
                                        src={ctg.image_category}
                                        alt={ctg.name}
                                    />
                                </td>
                                <td className="border px-4 py-1 text-sm">{ctg.path}</td>
                                <td className="border px-4 py-1">
                                    <Link className="bg-celeste hover:bg-hover-celeste text-white font-bold py-1 px-4 rounded-full" href={`/administrator/categories/${ctg.id_category}`}>
                                        Ver
                                    </Link>
                                </td>
                                <td className="border px-4 py-1">
                                    <DeleteButtonServer id_category={ctg.id_category}></DeleteButtonServer>
                                </td>
                            </tr>
                        )): <></>} 
                    </tbody>
                </table>
           
        </div>
    );
}
