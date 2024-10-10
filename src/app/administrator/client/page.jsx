import ServerTableClient from "@/app/components/client/ServerTableClient";
import Link from "next/link";
import * as IconLu from "react-icons/lu";
import { FiCheck, FiHome, FiUser, FiX } from "react-icons/fi";
import { allClient } from "@/app/api/sales/customer/route";

export default async function Page() {
    const callAllClient = await allClient();

    return (
        <main className=" flex min-h-screen flex-col px-12 bg-gris">
            <div className="grid grid-cols-1 mt-5">
                <div className="py-3 col-span-3 rounded overflow-hidden shadow-lg bg-blanco">
                    <div className="grid grid-cols-8">
                        <div className="col-span-8 ml-10 mt-2 mb-5">
                            <h1 className="text-2xl font-bold">Clientes</h1>
                        </div>
                        <div className="col-span-4 mt-5 sm:mt-5 md:mt-0 lg:mt-0 xl:mt-0 flex justify-start px-5">
                            <Link className="static bg-primary hover:bg-hover-primary text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex items-center" href="/administrator/client/create" type="button">
                                <IconLu.LuPlus className="mr-2 text-white w-5 h-5" />Agregar
                            </Link>
                        </div>
                        <div className="col-span-4  mt-5 sm:mt-5 md:mt-0 lg:mt-0 xl:mt-0 flex justify-end px-5">
                            <button className="bg-primary hover:bg-hover-primary text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex items-center" type="button">
                                <IconLu.LuImport className="mr-2 text-white w-5 h-5" />Importar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-semibold text-gray-800">Total clientes</h2>
                        <FiUser className="text-2xl text-green-500" />
                    </div>
                    <p className="text-3xl font-bold text-gray-900">{callAllClient.length}</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-semibold text-gray-800">Activos</h2>
                        <FiCheck className="text-2xl text-blue-500" />
                    </div>
                    <p className="text-3xl font-bold text-gray-900">2</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-semibold text-gray-800">Bloqueados</h2>
                        <FiX className="text-2xl text-purple-500" />
                    </div>
                    <p className="text-3xl font-bold text-gray-900">10</p>
                </div>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-10">
                <div className="col-span-3 max-w-8xl rounded shadow-lg flex flex-wrap justify-center bg-blanco">
                    <ServerTableClient></ServerTableClient>
                </div>
            </div>
        </main>
    );
};