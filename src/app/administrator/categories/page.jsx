import ServerCategoriesTable from "@/app/components/categories/ServerCategoriesTable";
import Link from "next/link";
import * as IconLu from "react-icons/lu";
import { FiBox, FiInbox } from "react-icons/fi";
import { MdFormatListNumbered } from "react-icons/md";
import { allCategories } from "@/app/api/catalog/category/route";

export default async function Categories() {
  const allCategorie = await allCategories()
  const filterSubCategories = allCategorie.filter(e=> e.parent_id)
  const filterPrincipalCategories = allCategorie.filter(e=> !e.parent_id)

  return (
    <main className=" flex min-h-screen flex-col px-12 bg-gris">
      <div className="grid grid-cols-1 mt-5">
        <div className="py-3 col-span-3 rounded overflow-hidden shadow-lg bg-blanco">
          <div className="grid grid-cols-3">
            <div className="col-span-3  ml-5 mt-2  mb-5">
              <h1 className="font-bold text-2xl">Categorias</h1>
            </div>
            <div className="col-span-3 xl:col-span-1 mt-5 sm:mt-5 md:mt-0 lg:mt-0 xl:mt-0 flex justify-center xl:justify-start px-5">
              <Link className="bg-primary hover:bg-hover-primary text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex items-center" href="/administrator/categories/create" type="button">
                <IconLu.LuPlus className="mr-2 text-white w-5 h-5" />Agregar
              </Link>
            </div>
            <div className=" col-span-3 xl:col-span-1  mt-5 sm:mt-5 md:mt-0 lg:mt-0 xl:mt-0 flex justify-center xl:justify-center">
              <Link className="bg-primary hover:bg-hover-primary text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex items-center" href="/administrator/categories/list" type="button">
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
                <h2 className="text-xl font-semibold text-gray-800">Total categorías</h2>
                <FiBox className="text-2xl text-green-500" />
              </div>
              <p className="text-3xl font-bold text-gray-900">{allCategorie.length}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-800">Categorías principales</h2>
                <FiInbox className="text-2xl text-blue-500" />
              </div>
              <p className="text-3xl font-bold text-gray-900">{filterPrincipalCategories.length}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-800">Sub categorías</h2>
                <MdFormatListNumbered className="text-2xl text-purple-500" />
              </div>
              <p className="text-3xl font-bold text-gray-900">{filterSubCategories.length}</p>
            </div>
          </div>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 gap-10">
        <div className="col-span-4 max-w-8xl rounded shadow-lg flex flex-wrap justify-center bg-blanco">
          <ServerCategoriesTable></ServerCategoriesTable>
        </div>
      </div>
    </main>
  );
}