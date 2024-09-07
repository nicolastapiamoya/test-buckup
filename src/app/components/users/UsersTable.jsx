'use server';

import Link from 'next/link';
import React from 'react';
import * as IconLu from "react-icons/lu";

export default async function UsersTable({ users }) {

    return (
        <div className='overflow-x-auto'>
            <div className="mb-1 ml-5 mr-5 mt-5">
                <input className="shadow appearance-none border rounded text-sm w-full py-1.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="search_brands" type="text" placeholder="Buscar..." />
            </div>

            <table className="table-fixed mb-3 mt-5 inline-block ml-5 mr-5">
                <thead>
                    <tr className="border-solid border-2">
                        <th className="px-4 py-1 font-semibold inline-block ml-5">#Id</th>
                        <th className="px-4 py-1 font-semibold">Nombre</th>
                        <th className="px-4 py-1 font-semibold">Email</th>
                        <th className="px-4 py-1 font-semibold">Rol</th>
                        <th className="px-4 py-1 font-semibold">Estado</th>
                        <th className="px-4 py-1 font-semibold"></th>
                    </tr>
                </thead>
                <tbody>

                        {users.length > 0 ? users.map((user, index) => (
                            <tr key={`${user.id_order}-${index}`}>
                                <td className="border px-4 py-1 text-sm text-center">{user.id_user}</td>
                                <td className="border px-4 py-1 text-sm">{user.name_user}</td>
                                <td className="border px-4 py-1 text-sm">{user.email_user}</td>
                                <td className="border px-4 py-1 text-sm">{user.id_role}</td>
                                <td className="border px-4 py-1 text-sm">{user.status}</td>
                                <td className="border px-4 py-1">
                                    <Link className="bg-celeste hover:bg-hover-celeste text-white font-bold py-1 px-4 rounded-full" href={`/administrator/users/${user.id_user}`}>
                                        Ver
                                    </Link>
                                </td>
                                <td className="border px-4 py-1">
                                    <button className="bg-primary hover:bg-hover-primary text-white font-bold py-1 px-4 rounded-full">
                                        <IconLu.LuX />
                                    </button>
                                </td>
                            </tr>
                        )) : <>Cargando Usuario...</>}
                
                </tbody>
            </table>
        </div>
    );
}
