import Filters from "@/app/components/inventories/Filters";
import ServerInventoriesTable from "@/app/components/inventories/ServerInventoriesTable";
import Link from "next/link";
import * as IconLu from "react-icons/lu";
import { FiBox, FiInbox } from "react-icons/fi";
import { MdFormatListNumbered } from "react-icons/md";
import { allInventories } from "@/app/api/catalog/inventory/route";
export default async function Inventories() {
  const inventories = await allInventories();
  return (
    <main className=" flex min-h-screen flex-col px-12 bg-gris">

      <div className="grid grid-cols-1 mt-5">
        <div className="py-3 col-span-3 rounded overflow-hidden shadow-lg bg-blanco">
          <div className="grid grid-cols-8">
            <div className="col-span-8 ml-10 mt-2 mb-5">
              <h1 className="text-2xl font-bold">Inventarios</h1>
            </div>
            <div className="col-span-4 mt-5 sm:mt-5 md:mt-0 lg:mt-0 xl:mt-0 flex justify-start px-5">
              <Link className="static bg-primary hover:bg-hover-primary text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex items-center" href="/administrator/inventories/create" type="button">
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
                <h2 className="text-xl font-semibold text-gray-800">Producto con inventario</h2>
                <FiBox className="text-2xl text-green-500" />
              </div>
              <p className="text-3xl font-bold text-gray-900">{inventories.length}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-800">Productos sin inventario</h2>
                <FiInbox className="text-2xl text-blue-500" />
              </div>
              <p className="text-3xl font-bold text-gray-900">2</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-800">Variaciones sin inventario</h2>
                <MdFormatListNumbered className="text-2xl text-purple-500" />
              </div>
              <p className="text-3xl font-bold text-gray-900">10</p>
            </div>
          </div>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 gap-10">
        <div className=" col-span-3 sm:col-span-3 md:col-span-3 lg:col-span-1 xl:col-span-1 max-w-5xl sm:max-w-5xl md:max-w-5xl lg:max-w-xs xl:max-w-md rounded overflow-hidden shadow-lg bg-blanco">
          <Filters></Filters>
        </div>
        <div className="col-span-3 max-w-8xl rounded shadow-lg flex flex-wrap justify-center bg-blanco">
          <ServerInventoriesTable></ServerInventoriesTable>
        </div>
      </div>
    </main>
  );
}