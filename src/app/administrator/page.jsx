'use client'
//import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiBox, FiPackage, FiMap, FiTag, FiShoppingCart } from "react-icons/fi";
import { LuFileWarning } from "react-icons/lu";
import { limitLogs } from "../api/log/route";

const DashboarPage = () => {

    const shortcuts = [
        { name: "Categorias", icon: <FiBox />, url: '/administrator/categories' },
        { name: "Productos", icon: <FiPackage />, url: '/administrator/products' },
        { name: "Inventarios", icon: <FiShoppingCart />, url: '/administrator/inventories' },
        { name: "Sucursales", icon: <FiMap />, url: '/administrator/subsidiary' },
        { name: "Promociones", icon: <FiTag />, url: '/administrator/promotion' },
        { name: "Punto de venta", icon: <FiShoppingCart />, url: '/pointOfSales' },
    ];

    const [logs, setLogs] = useState([])

    const getlogsData = async () => {
        const data = await limitLogs()
        console.log(data)
        setLogs(data)
    }

    useEffect(() => {
        getlogsData()
    }, [])

    //const { data: session } = useSession();

    //component that shows logout button and active user data
    return (
        <div className="min-h-screen  p-8">
            <div className="max-w-6xl mx-auto">
                <header className="mb-12 text-center">
                    <h1 className="text-4xl font-bold text-purple-950 mb-4">Bienvenido a su panel de control de Sales Full</h1>
                    <p className="text-xl text-gray-600">Gestione su negocio de manera eficiente con nuestra moderna solución de CRM</p>
                </header>

                <main>
                    <section className="bg-white rounded-xl shadow-lg p-8 mb-12 transition-all duration-300 hover:shadow-xl">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Atajos rápidos</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            {shortcuts.map((shortcut) => (
                                <Link
                                    key={shortcut.name}
                                    className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center p-4 bg-indigo-50 rounded-lg text-purple-900 hover:bg-purple-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    aria-label={`Go to ${shortcut.name}`}
                                    href={shortcut.url}
                                >
                                    <span className="text-2xl mr-3">{shortcut.icon}</span>
                                    <span className="font-medium">{shortcut.name}</span>
                                </Link>
                            ))}
                        </div>
                    </section>

                    <section className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Actividades recientes</h2>
                        <div className="space-y-4">
                            {logs.length > 0 ?
                                logs.map((lg, index) => (
                                    <>
                                        <div className="flex items-center p-4 bg-gray-50 rounded-lg" key={index}>
                                            <LuFileWarning className="text-2xl text-purple-900 mr-4" />
                                            <div>
                                                <p className="font-medium text-gray-800">{lg.operation_type} en la tabla {lg.table_name}</p>
                                                <p className="text-sm text-gray-500">{lg.changed_at}</p>
                                            </div>
                                        </div>
                                    </>
                                )) : <></>
                            }
                        </div>
                    </section>
                </main>
            </div>
        </div>

    );

};

export default DashboarPage;