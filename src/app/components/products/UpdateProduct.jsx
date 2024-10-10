'use client'

import { allCategories } from '@/app/api/catalog/category/route'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Loader from '../Loader'
import { productById, updateProduct } from '@/app/api/catalog/product/route'
import Swal from 'sweetalert2'
import CustomAttributes from './CustomAttributes'
import VariantProduct from './VariantProduct'
import ImagePrincipal from './ImagePrincipal'

export default function UpdateProduct({ id_product }) {
    const [categories, setCategories] = useState([])
    const [product, setProduct] = useState([])
    const [loader, setLoader] = useState(false)
    const { register: registerProduct, handleSubmit: handleSubmitProduct, reset: resetProduct } = useForm();

    async function callAllCategories() {
        const data = await allCategories()
        setCategories(data)
    }

    async function callProductById() {
        const data = await productById(id_product)
        setProduct(data)
        resetProduct({
            master: data[0].master,
            id_category: data[0].id_category,
            name: data[0].name,
            title: data[0].title,
            brand: data[0].brand,
            price: data[0].price,
            status: data[0].status,
            description: data[0].description
        })
    }

    async function callUpdateProductById(body) {
        const data = await updateProduct(body, id_product)
        return data
    }

    useEffect(() => {
        callAllCategories()
        callProductById()
    }, [])

    const onSubmitUpdateProduct = async (data) => {
        setLoader(true)
        const update = await callUpdateProductById(data)
        if (update.message === 'Product updated successfully') {
            Swal.fire({
                title: 'Producto Actualizado!',
                icon: "success",
                timer: 1500,
                toast: true,
                showConfirmButton: false,
                position: 'top-right',
            })
            setLoader(false)
        } else {
            Swal.fire({
                title: 'Error al actualizar!',
                icon: "warning",
                timer: 1500,
                toast: true,
                showConfirmButton: false,
                position: 'top-right',
            })
            setLoader(false)
        }
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 xl:p-10">
            <div className="col-span-2 lg:col-span-1 xl:col-span-1 flex justify-center border-2 border-solid rounded-lg p-2">
                <form id='product' name='product' className="w-full max-w-5xl mb-10" autoComplete="off" onSubmit={handleSubmitProduct(onSubmitUpdateProduct)}>
                    <div className="flex flex-wrap -mx-1 mb-5 mt-5">
                        <div className="w-full  px-3 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0 mb-5">
                            <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="grid-first-name">
                                Atributos principales del producto
                            </label>
                        </div>
                        <div className="w-full md:w-1/3 px-3 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                producto master (no/si)
                            </label>
                            <label
                                htmlFor="toggleTwo"
                                className="flex items-center cursor-pointer select-none text-slate-600 dark:text-slate-900 mb-3"
                            >
                                <div className="relative">
                                    <input
                                        type="checkbox"
                                        id="toggleTwo"
                                        className="z-0 peer sr-only"
                                        {...registerProduct('master')}
                                    />
                                    <div
                                        className=" z-0 block h-8 rounded-full dark:bg-hover-primary w-14 border-solid border-2"
                                    ></div>
                                    <div className="z-0 absolute w-6 h-6 transition bg-primary rounded-full dot dark:bg-secondary left-1 top-1 peer-checked:translate-x-full peer-checked:bg-hover-primary text-xs flex justify-center items-center text-blanco"></div>
                                </div>
                            </label>
                        </div>
                        <div className="w-full md:w-2/3 px-3 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0 mb-5">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                Categoría
                            </label>
                            <div className="relative">
                                <select className=" appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" {...registerProduct('id_category', { required: true })}>
                                    {
                                        categories.map((ctg, index) => (
                                            <option key={`${ctg.id_category}-${index}`} value={ctg.id_category} >{ctg.name}</option>
                                        ))
                                    }
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-3 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                Nombre de producto
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"  {...registerProduct('name', { required: true })} />
                        </div>
                        <div className="w-full px-3 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                Titulo
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Calle nombe #182, Region 5, Chile" {...registerProduct('title', { required: true })} />
                        </div>
                        <div className="w-full  px-3 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0 mb-5">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Marca
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" {...registerProduct('brand', { required: true })} />
                        </div>
                        <div className="w-full md:w-1/2  px-3 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0 mb-5">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Precio
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" placeholder=""  {...registerProduct('price', { required: true })} />
                        </div>
                        <div className="w-full md:w-1/2 px-3 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0 mb-5">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                Estado
                            </label>
                            <div className="relative">
                                <select className=" appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" {...registerProduct('status', { required: true })}>
                                    <option name='status' value='activo'>Activo</option>
                                    <option name='status' value='desactivo'>Desactivo</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>
                        <div className="w-full  px-3 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0 mb-5">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Descripción
                            </label>
                            <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" rows={4} {...registerProduct('description', { required: true })} />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button className="shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 bg-primary w-64 hover:bg-hover-primary   text-white font-bold py-2 px-10 rounded-lg focus:outline-none focus:shadow-outline flex justify-center" type="submit">
                            Actualizar producto
                        </button>
                    </div>
                </form>
            </div>
            <div className="col-span-1 flex justify-center">
                <div className="flex flex-wrap">
                    {product.length > 0
                        ?
                        <>
                            <ImagePrincipal product={product} callProductById={() => callProductById()}></ImagePrincipal>
                            <CustomAttributes product={product} callProductById={() => callProductById()}></CustomAttributes>
                        </>
                        : <Loader></Loader>}

                </div>
            </div>

            <div className="col-span-2 flex justify-center mt-5">
                <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="grid-last-name">
                    {product.length > 0 && product[0].master ? <> Producto master </> : <> Producto con variaciones </>}
                </label>
            </div>
            {product.length > 0 ? <VariantProduct product={product} callProductById={() => callProductById()}></VariantProduct> : <Loader></Loader>}
            {loader || product.length === 0 ? <Loader></Loader> : <></>}
        </div>
    )
}