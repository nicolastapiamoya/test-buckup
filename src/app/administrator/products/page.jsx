import Filters from "@/app/components/products/Filters";
import ServerProductTable from "@/app/components/products/ServerProductTable";
import Link from "next/link";
import * as IconLu from "react-icons/lu";
import { FiBox, FiInbox } from "react-icons/fi";
import { MdFormatListNumbered } from "react-icons/md";
import { allProduct } from "@/app/api/catalog/product/route";

export default async function ListProducts() {
    const products = await allProduct();
    const productMaster = products.filter(e => e.master === true)
    const productVariant = products.filter(e => e.master === false)

    return (
        <main className=" flex min-h-screen flex-col px-12 bg-gris">
            <div className="grid grid-cols-1 mt-5">
                <div className="py-3 col-span-3 rounded overflow-hidden shadow-lg bg-blanco">
                    <div className="grid grid-cols-3">
                        <div className="col-span-3  ml-5 mt-2  mb-5">
                            <h1 className="font-bold text-2xl">Productos</h1>
                        </div>
                        <div className="col-span-3 xl:col-span-1 mt-5 sm:mt-5 md:mt-0 lg:mt-0 xl:mt-0 flex justify-center xl:justify-start px-5">
                            <Link className="bg-primary hover:bg-hover-primary text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex items-center" href="/administrator/products/create" type="button">
                                <IconLu.LuPlus className="mr-2 text-white w-5 h-5" />Agregar
                            </Link>
                        </div>
                        <div className=" col-span-3 xl:col-span-1  mt-5 sm:mt-5 md:mt-0 lg:mt-0 xl:mt-0 flex justify-center xl:justify-center">
                            <Link className="bg-primary hover:bg-hover-primary text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex items-center" href="/administrator/products/list" type="button">
                                <IconLu.LuList className="mr-2 text-white w-5 h-5" />Listas
                            </Link>
                        </div>
                        <div className=" col-span-3 xl:col-span-1 px-5  mt-5 sm:mt-5 md:mt-0 lg:mt-0 xl:mt-0 flex justify-center xl:justify-end">
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
                <h2 className="text-xl font-semibold text-gray-800">Total productos</h2>
                <FiBox className="text-2xl text-green-500" />
              </div>
              <p className="text-3xl font-bold text-gray-900">{products.length}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-800">Productos master</h2>
                <FiInbox className="text-2xl text-blue-500" />
              </div>
              <p className="text-3xl font-bold text-gray-900">{productMaster.length}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-800">Productos con variación</h2>
                <MdFormatListNumbered className="text-2xl text-purple-500" />
              </div>
              <p className="text-3xl font-bold text-gray-900">{productVariant.length}</p>
            </div>
          </div>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 gap-10">
                <div className=" col-span-3 sm:col-span-3 md:col-span-3 lg:col-span-1 xl:col-span-1 max-w-5xl sm:max-w-5xl md:max-w-5xl lg:max-w-xs xl:max-w-md rounded overflow-hidden shadow-lg bg-blanco">
                    <Filters></Filters>
                </div>
                <div className="col-span-3 max-w-8xl rounded shadow-lg flex flex-wrap justify-center bg-blanco">
                    <ServerProductTable></ServerProductTable>
                </div>
            </div>

        </main>

    );
}