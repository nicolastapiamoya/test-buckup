
import { Suspense } from 'react';
import SearchBar from './SearchBar';
import Pagination from './Pagination';
import Link from "next/link";
import DeleteButtonServer from './DeleteButtonServer';


export default async function ProductsTable({ products, totalPages }) {

    console.log(products);
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className='overflow-x-auto'>
                <div className="mb-1 ml-2 mr-2 mt-5">
                    <SearchBar />
                </div>
                <table className="table-fixed mb-3 mt-5 inline-block">
                    <thead>
                        <tr className="border-solid border-2">
                            <th className="px-4 py-1 font-semibold inline-block ml-5">Producto</th>
                            <th className="px-4 py-1 font-semibold">Marca</th>
                            <th className="px-4 py-1 font-semibold">Precio</th>
                            <th className="px-4 py-1 font-semibold">Master</th>
                            <th className="px-4 py-1 font-semibold">Inventario</th>
                            <th className="px-4 py-1 font-semibold"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.length > 0 ? products.map((prd, index) => (
                            <tr key={`${prd.id_product}-${index}`}>
                                <td className="border px-4 py-1 flex justify-start">
                                    <div className="grid grid-rows-2 grid-flow-col">
                                        <div className="row-span-3 mr-5">
                                            <img
                                                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert mb-2 w-10 h-10"
                                                src={prd.image_product != null && prd.image_product ? JSON.parse(prd.image_product)[0] : '/sinfoto.jfif'}
                                                alt={prd.name}
                                            />
                                        </div>
                                        <div className="row-span-1 col-span-2 text-sm">{prd.name}</div>
                                        <div className="row-span-2 col-span-2 text-xs">{prd.name_category}</div>
                                    </div>
                                </td>
                                <td className="border px-4 py-1 text-sm">{prd.brand}</td>
                                <td className="border px-4 py-1 text-sm">{prd.price}</td>
                                <td className="border px-4 py-1 text-sm text-center">
                                    {prd.master ?
                                        <div className="bg-primary text-white font-bold py-0.5 px-4 rounded-full text-xxs inline-block text-center w-full">master</div>
                                        :
                                        <div className="bg-naranja text-xxs text-white font-bold py-0.5 px-4 rounded-full inline-block text-center w-full">variación</div>
                                    }
                                </td>
                                <td className="border px-4 py-1 text-sm">
                                    {prd.countVariantNotStock > 0 ?
                                        <div className="bg-naranja text-xxs text-white font-bold py-0.5 px-4 rounded-full inline-block text-center w-full">Sin inventario</div>
                                        :
                                        <div className="bg-primary text-white font-bold py-0.5 px-4 rounded-full text-xxs inline-block text-center w-full">Inventario disponible</div>
                                    }
                                </td>
                                <td className="border px-4 py-1">
                                    <Link className="bg-celeste hover:bg-hover-celeste text-white font-bold py-1 px-4 rounded-full" href={`/administrator/products/${prd.id_product}`}>
                                        ver
                                    </Link>
                                </td>
                                <td className="border px-4 py-1">
                                    <DeleteButtonServer id_product={prd.id_product} />
                                </td>
                            </tr>
                        )) : <></>}
                    </tbody>
                </table>
                <Pagination totalPages={totalPages} />
            </div>
        </Suspense>
    );
}
