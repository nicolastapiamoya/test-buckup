'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import * as IconLu from "react-icons/lu"

export default function AdministratorLayout({ children }) {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [popOverOpen, setPopOverOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState({ personalizaTuTienda: false, documentos: false, reportes: false, catalogo: false, cliente: false, marketing: false });


    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
        if (!sidebarOpen) {
            setDropdownOpen({ personalizaTuTienda: false, documentos: false, reportes: false, catalogo: false, cliente: false, marketing: false });
        }
    };

    const togglePopOver = () => {
        setPopOverOpen(!popOverOpen);
    }

    const toggleDropdown = (dropdownName) => {
        setDropdownOpen(prevState => ({
            ...prevState,
            [dropdownName]: !prevState[dropdownName]
        }));
    };
    return (
        <>
            <header>
                <nav className="bg-primary">
                    <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex justify-center m-auto"><img src="https://30c5ab-27.myshopify.com/cdn/shop/files/Mesa_de_trabajo_4.png?v=1719537986&width=210" className="w-36 h-14 px-2 py-1 rounded-md flex justify-center bg-primary" /></div>
                                <div className="flex flex-shrink-0 items-center">
                                    <div>
                                        <span className="absolute text-primary text-4xl top-4 left-0 cursor-pointer bg-primary" onClick={toggleSidebar}>
                                            <IconLu.LuMenu className="px-2 bg-white rounded-md" />
                                        </span>
                                        <div className={`z-50 sidebar fixed top-0 bottom-0 left-0 p-2 w-[300px] overflow-y-auto text-center bg-primary transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out`}>
                                            <div className="text-gray-100 text-xl">
                                                <div className="p-2.5 mt-1 flex items-center">
                                                    <img src="https://30c5ab-27.myshopify.com/cdn/shop/files/Mesa_de_trabajo_4.png?v=1719537986&width=210" className="w-28 h-12 px-2 py-1 rounded-md bg-primary" />
                                                    <IconLu.LuX className="cursor-pointer ml-28" onClick={toggleSidebar} />
                                                </div>
                                                <div className="my-2 bg-primary h-[1px]"></div>
                                            </div>
                                            <Link className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-hover-primary text-white" href="/ecommerce/home" onClick={() => setSidebarOpen(false)}>
                                                <IconLu.LuStore />
                                                <span className="text-[15px] ml-4 text-gray-200 font-bold">Mi tienda</span>
                                            </Link>
                                            <Link className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-hover-primary text-white" href="/administrator" onClick={() => setSidebarOpen(false)}>
                                                <IconLu.LuHome />
                                                <span className="text-[15px] ml-4 text-gray-200 font-bold">Dashboard</span>
                                            </Link>
                                            <Link className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-hover-primary text-white" href="/administrator/products" onClick={() => setSidebarOpen(false)}>
                                                <IconLu.LuBox />
                                                <span className="text-[15px] ml-4 text-gray-200 font-bold">Productos</span>
                                            </Link>
                                            <Link className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-hover-primary text-white" href="/administrator/categories" onClick={() => setSidebarOpen(false)}>
                                                <IconLu.LuBookPlus />
                                                <span className="text-[15px] ml-4 text-gray-200 font-bold">Categorías</span>
                                            </Link>
                                            <Link className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-hover-primary text-white" href="/administrator/inventories" onClick={() => setSidebarOpen(false)}>
                                                <IconLu.LuListChecks />
                                                <span className="text-[15px] ml-4 text-gray-200 font-bold">Inventario</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <main className="ml-0 transition-all duration-300 ease-in-out" onClick={popOverOpen ? togglePopOver : undefined}>
                {children}
            </main>

        </>
    )
}
