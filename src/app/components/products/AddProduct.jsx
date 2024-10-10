'use client'

import { formAddProduct } from '@/app/actions/actions'
import { allCategories } from '@/app/api/catalog/category/route'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import Loader from '../Loader'
import { useRouter } from 'next/navigation'

export default function AddProduct() {

    const [categories, setCategories] = useState([])
    const [loader, setLoader] = useState(false)
    const { register, handleSubmit, reset } = useForm();
    const route = useRouter()
    async function callAllCategories() {
        const data = await allCategories()
        setCategories(data)
    }

    useEffect(() => {
        callAllCategories()
    }, [])

    const onSubmitProduct = async (data) => {
        setLoader(true)
        const createProduct = await formAddProduct(data)
        console.log(createProduct)
        if (createProduct.status === 'ok') {
            Swal.fire({
                title: 'Producto agregado!',
                icon: "success",
                timer: 1500,
                toast: true,
                showConfirmButton: false,
                position: 'top-right',
            })
            reset()
            setLoader(false)
            route.push(`/administrator/products/${createProduct.id_product}`)
        } else {
            Swal.fire({
                title: 'Error al agregar!',
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
        <div className="grid grid-cols-1  gap-4 xl:p-10">
            <div className="col-span-1 flex justify-center border-2 border-solid rounded-lg p-2">
                <form className="w-full max-w-5xl mb-10" autoComplete="off" onSubmit={handleSubmit(onSubmitProduct)}>
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
                                        //onChange={e => handleMaster(e.target.checked)}
                                        {...register('master')}
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
                                <select className=" appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" {...register('id_category', { required: true })}>
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
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"  {...register('name', { required: true })} />
                        </div>
                        <div className="w-full px-3 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                Titulo
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Calle nombe #182, Region 5, Chile" {...register('title', { required: true })} />
                        </div>
                        <div className="w-full  px-3 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0 mb-5">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Marca
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" {...register('brand', { required: true })} />
                        </div>
                        <div className="w-full md:w-1/2  px-3 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0 mb-5">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Precio
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" placeholder=""  {...register('price', { required: true })} />
                        </div>
                        <div className="w-full md:w-1/2 px-3 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0 mb-5">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                Estado
                            </label>
                            <div className="relative">
                                <select className=" appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" {...register('status', { required: true })}>
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
                            <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" rows={4} {...register('description', { required: true })} />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button className="shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 bg-primary w-64 hover:bg-hover-primary   text-white font-bold py-2 px-10 rounded-lg focus:outline-none focus:shadow-outline flex justify-center" type="submit">
                            Agregar producto
                        </button>
                    </div>
                </form>
            </div>
            {
                loader ? <Loader></Loader> : <></>
            }
        </div>


    )
}
