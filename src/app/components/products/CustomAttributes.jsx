import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'
import ModalAddAttribute from './ModalAddAttribute'
import { updateProduct } from '@/app/api/catalog/product/route';
import Loader from '../Loader';

export default function CustomAttributes({ product, callProductById }) {

    const { register: registerAttribute, handleSubmit: handleSubmitAtributte, reset: resetAttribute } = useForm();
    const [openModalAddAttribute, setOpenModalAddAttribute] = useState(false);
    const [loaderUpdate, setLoaderUpdate] = useState(false)

    async function callUpdateProductById(body, id_product) {
        const data = await updateProduct(body,id_product)
        return data
    }

    const onSubmitAttribute = async (data) => {
        setOpenModalAddAttribute(false)
        setLoaderUpdate(true)
        let customAttributesProduct = null
        let firstCustomAttribute = []
        let sendBody = null

        if(product[0].custom){
            customAttributesProduct = JSON.parse(product[0].custom)
        }

        if(customAttributesProduct){
            customAttributesProduct.push(data)
            sendBody = {
                custom : JSON.stringify(customAttributesProduct)
            }
        }else{
            firstCustomAttribute.push(data)
            sendBody = {
                custom : JSON.stringify(firstCustomAttribute)
            }
        }

        const addAttibute = await callUpdateProductById(sendBody, product[0].id_product)
        console.log(addAttibute)
        if(addAttibute.message === 'Product updated successfully' ){
            resetAttribute()
            callProductById()
            Swal.fire({
                title: 'Atributo personalizado agregado!',
                icon: "success",
                timer: 1500,
                toast: true,
                showConfirmButton: false,
                position: 'top-right',
            })
            setLoaderUpdate(false)
        }else{
            resetAttribute()
            Swal.fire({
                title: 'Error al agregar atributo personalizado!',
                icon: "warning",
                timer: 1500,
                toast: true,
                showConfirmButton: false,
                position: 'top-right',
            })
            setLoaderUpdate(false)
        }
    }

    const handleAddAttribute = () => {
        setOpenModalAddAttribute(true)
        console.log('abrir modal para agregar atributo')
    }

    const handleDeleteAttribute = async (key) => {
        setLoaderUpdate(true)
        let customAttributesProduct = null

        if(product[0].custom){
            customAttributesProduct = JSON.parse(product[0].custom)
        }

        const filterCustomAttributes = customAttributesProduct.filter((attr)=> attr.key !=key)

        const sendBody = {
            custom : JSON.stringify(filterCustomAttributes)
        }

        const deleteAttibute = await callUpdateProductById(sendBody, product[0].id_product)
        console.log(deleteAttibute)
        if(deleteAttibute.message === 'Product updated successfully' ){
            setOpenModalAddAttribute(false)
            resetAttribute()
            callProductById()
            Swal.fire({
                title: 'Atributo personalizado eliminado!',
                icon: "success",
                timer: 1500,
                toast: true,
                showConfirmButton: false,
                position: 'top-right',
            })
            setLoaderUpdate(false)
        }else{
            resetAttribute()
            setOpenModalAddAttribute(false)
            Swal.fire({
                title: 'Error al eliminar atributo personalizado!',
                icon: "warning",
                timer: 1500,
                toast: true,
                showConfirmButton: false,
                position: 'top-right',
            })
            setLoaderUpdate(false)
        }
    }

    return (
        <>
            <div className="border-solid border-t-2 w-full p-2 m-2">
                <div className="w-full  px-3 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0 mb-10">
                    <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="grid-last-name">
                        Atributos personalizados
                    </label>
                </div>
                {product.length > 0 &&
                    product[0].custom && JSON.parse(product[0].custom).map((attr, index) => (
                        <div className="w-full  px-3 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0 mb-5" key={index}>
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                {attr.key}
                            </label>
                            <div className="grid grid-cols-6">
                                <div className="col-span-5">
                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" defaultValue={attr.value} placeholder="" disabled />
                                </div>
                                <div className="col-span-1 flex justify-end">
                                    <button
                                        className="rounded-md border-solid border-2 py-2 px-4 flex justify-center items-center bg-primary hover:bg-naranja text-white"
                                        onClick={()=>handleDeleteAttribute(attr.key)}>X</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
                <div className="w-full  px-3 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0 mt-10 mb-5">
                    <div className="flex justify-center">
                        <button
                            className="bg-primary w-64 hover:bg-hover-primary sm:mt-0 lg:mt-4 xl:mt-4 text-white font-bold py-2 px-10 rounded-lg focus:outline-none focus:shadow-outline flex justify-center"
                            onClick={handleAddAttribute}
                            type="button">

                            Añadir atributo
                        </button>
                    </div>
                </div>
            </div>
            <ModalAddAttribute open={openModalAddAttribute} onClose={() => {setOpenModalAddAttribute(false), resetAttribute()}}>
                <form id='attribute' name='attribute' className="w-full max-w-5xl mb-10" autoComplete="off" onSubmit={handleSubmitAtributte(onSubmitAttribute)}>
                    <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2">
                        Agrega un atributo personalizado
                    </label>
                    <div className="flex flex-wrap -mx-1 mb-5 mt-5">
                        <div className="w-full px-3 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                Nombre
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Pulgadas"  {...registerAttribute('key')} />
                        </div>
                        <div className="w-full px-3 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                valor
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="55'"  {...registerAttribute('value')} />
                        </div>
                        <div className="w-full  px-3 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0 mt-8">
                            <div className="flex justify-center">
                                <button
                                    className="bg-primary w-64 hover:bg-hover-primary sm:mt-0 lg:mt-4 xl:mt-4 text-white font-bold py-2 px-10 rounded-lg focus:outline-none focus:shadow-outline flex justify-center"
                                    type="submit">
                                    Agregar
                                </button>
                            </div>
                        </div>
                    </div>

                </form>
            </ModalAddAttribute>
            {loaderUpdate ? <Loader></Loader> : <></>}
        </>
    )
}