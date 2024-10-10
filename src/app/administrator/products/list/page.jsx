
import ServerListProductTable from "@/app/components/products/productList/ServerListProductTable";
import Link from "next/link";
import * as IconLu from "react-icons/lu";

export default function ListProduct() {

    return (
        <main className=" flex min-h-screen flex-col px-12 bg-gris">
            <div className="grid grid-cols-1 mt-5">
                <div className="col-span-1 mb-4">
                    <Link href='/administrator/products' >
                        <div className="bg-primary hover:bg-hover-primary w-10 h-10 shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105  flex justify-center items-center text-white font-bold rounded-full focus:outline-none focus:shadow-outline">
                            <IconLu.LuArrowBigLeft />
                        </div>
                    </Link>
                </div>
                <div className="py-3 col-span-3 rounded overflow-hidden shadow-lg bg-blanco">
                    <div className="grid grid-cols-8">
                        <div className="col-span-8  ml-5 mt-2  mb-5">
                            <h1 className="font-bold text-2xl">Lista de productos</h1>
                        </div>
                        <div className="col-span-4  mt-5 sm:mt-5 md:mt-0 lg:mt-0 xl:mt-0 flex justify-center xl:justify-start px-5">
                            <Link className="bg-primary hover:bg-hover-primary text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex items-center" href="/administrator/products/list/create" type="button">
                                <IconLu.LuPlus className="mr-2 text-white w-5 h-5" />Agregar
                            </Link>
                        </div>
                        <div className=" col-span-4  px-5 mt-5 sm:mt-5 md:mt-0 lg:mt-0 xl:mt-0 flex justify-center xl:justify-end">
                            <button className="bg-primary hover:bg-hover-primary text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex items-center" type="button">
                                <IconLu.LuImport className="mr-2 text-white w-5 h-5" />Importar
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-10">
                <div className="col-span-3 max-w-8xl rounded shadow-lg flex flex-wrap justify-center bg-blanco px-8">
                    <ServerListProductTable></ServerListProductTable>
                </div>
            </div>

        </main>

    );
}