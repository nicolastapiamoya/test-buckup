import AddUser from '@/app/components/users/AddUser'
import Link from 'next/link'
import React from 'react'
import * as IconLu from "react-icons/lu";

export default function CreateUser() {
    return (
        <main className=" flex min-h-screen flex-col px-12 bg-gris">
            <div className="grid grid-cols-1 mt-5">
                <div className="col-span-1 mb-4">
                    <Link href='/administrator/users' >
                        <div className="bg-primary hover:bg-hover-primary w-10 h-10 shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105  flex justify-center items-center text-white font-bold rounded-full focus:outline-none focus:shadow-outline">
                            <IconLu.LuArrowBigLeft />
                        </div>
                    </Link>
                </div>
                <div className="py-3 col-span-3 rounded overflow-hidden shadow-lg bg-blanco">
                    <div className="grid grid-cols-8">
                        <div className="col-span-8 sm:col-span-8 md:col-span-2 lg:col-span-2 xl:col-span-1 ml-5 mt-2">
                            <h1 className="font-bold text-2xl">Crear usuario</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 gap-10">
                <div className="col-span-4 max-w-8xl rounded shadow-lg flex flex-wrap justify-center bg-blanco">
                    <AddUser></AddUser>
                </div>
            </div>
        </main>

    )
}
