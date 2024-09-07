'use client'

import { allProductByCategoryIdPointOfSales } from '@/app/api/sales/cart/route'
import React, { useState } from 'react'
import { Oval } from 'react-loader-spinner'
import AddButtonServer from './AddButtonServer'

export default function SelectCategory({ categories, id_list }) {
    const [products, setProducts] = useState([])
    const [loader, setLoader] = useState(false)

    async function getProductByCategory(id) {
        const callProducts = await allProductByCategoryIdPointOfSales(id)
        setProducts(callProducts)
    }

    const handleSelectCategory = async (e) => {
        setLoader(true)
        const idCategory = e.target.value
        const getProducts = await getProductByCategory(idCategory)
        if (getProducts) {
            setLoader(false)

        }
        setLoader(false)
    }

    return (
        <div className="col-span-4 lg:col-span-2 xl:col-span-2  max-w-8xl rounded shadow-lg flex flex-wrap justify-center bg-blanco">
            <div className="w-full px-3 mb-6 mt-0 sm:mt-0 md:mt-4 lg:mt-4 xl:mt-0 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0">
                <label className="mt-4 block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="grid-state">
                    Selecciona los productos
                </label>
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                    Categoría
                </label>
                <div className="relative">
                    <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" onChange={handleSelectCategory} name='producto'>
                        <option>Selecciona una categoria</option>
                        {categories.length > 0 ?
                            categories.map((ctg, index) => (
                                <option key={index} value={ctg.id_category}>{ctg.name}</option>
                            )) : <option>Selecciona una categoria</option>
                        }
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                </div>
            </div>

            <div className="w-full px-3 mb-6 mt-0 sm:mt-0 md:mt-4 lg:mt-4 xl:mt-0 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0">
                <div className="grid grid-cols-3 gap-2">
                    {
                        loader ?
                            <div className="col-span-3 flex justify-center">
                                <Oval
                                    visible={true}
                                    height="65"
                                    width="65"
                                    color="#024B81"
                                    secondaryColor="#FC5C21"
                                    ariaLabel="oval-loading"
                                />
                            </div>
                            : <>
                                {
                                    products.length > 0 ? products.map((prd, index) => (
                                        <>
                                            <div className="col-span-2">{prd.name}</div>
                                            <div className="col-span-1">                           
                                                <AddButtonServer id_product_list={id_list} id_product={prd.id_product}></AddButtonServer>
                                            </div>
                                        </>
                                    )) : <></>
                                }
                            </>
                    }

                </div>
            </div>
        </div>
    )
}
