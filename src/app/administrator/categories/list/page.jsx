

import ServerListCategoryTable from "@/app/components/categories/categoryList/ServerListCategoryTable";
import Link from "next/link";
export const runtime = 'edge'; 
export default function ListCategories() {

    return (
        <main className=" flex min-h-screen flex-col px-12 bg-gris">
            <div className="grid grid-cols-1 mt-5">
                <div className="py-3 col-span-3 rounded overflow-hidden shadow-lg bg-blanco">
                    <div className="grid grid-cols-8">
                        <div className="col-span-8 sm:col-span-8 md:col-span-2 lg:col-span-2 xl:col-span-2 ml-5 mt-2">
                            <h1 className="font-semibold text-lg">Lista de categorías</h1>
                        </div>
                        <div className="col-span-8 sm:col-span-8 md:col-span-2 lg:col-span-2 xl:col-span-1 mt-5 sm:mt-5 md:mt-0 lg:mt-0 xl:mt-0 flex justify-center">
                            <Link className="bg-primary hover:bg-hover-primary text-white font-bold py-2 px-10 rounded-lg focus:outline-none focus:shadow-outline" href="/administrator/categories" type="button">
                                Volver
                            </Link>
                        </div>
                        <div className="col-span-8 sm:col-span-8 md:col-span-2 lg:col-span-2 xl:col-span-1 mt-5 sm:mt-5 md:mt-0 lg:mt-0 xl:mt-0 flex justify-center">
                            <Link className="bg-primary hover:bg-hover-primary text-white font-bold py-2 px-10 rounded-lg focus:outline-none focus:shadow-outline" href="/administrator/categories/list/create" type="button">
                                Agregar
                            </Link>
                        </div>
                        <div className="col-span-8 sm:col-span-8 md:col-span-2 lg:col-span-2 xl:col-span-1 mt-5 sm:mt-5 md:mt-0 lg:mt-0 xl:mt-0 flex justify-center">
                            <button className="bg-primary hover:bg-hover-primary text-white font-bold py-2 px-10 rounded-lg focus:outline-none focus:shadow-outline" type="button">
                                Importar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-10">
                <div className="col-span-3 max-w-8xl rounded shadow-lg flex flex-wrap justify-center bg-blanco px-8">
                     <ServerListCategoryTable></ServerListCategoryTable> 
                </div>
            </div>

        </main>

    );
}