import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import ModalAddVariant from './ModalAddVariant';
import { deleteVariant, updateVariant } from '@/app/api/catalog/product/route';
import Swal from 'sweetalert2';
import Loader from '../Loader';
import { formAddVariant } from '@/app/actions/actions';
import ImageVariant from './ImageVariant';
import { useRouter } from 'next/navigation';

export default function VariantProduct({ product, callProductById }) {
    console.log(product)
    const route = useRouter()
    const [activeIndex, setActiveIndex] = useState(0);
    const [openModalAddVariant, setOpenModalAddVariant] = useState(false);
    const [loaderUpdate, setLoaderUpdate] = useState(false);
    const { register: registerVariant, handleSubmit: handleSubmitUpdateVariant, reset: resetVariant } = useForm();
    const { register: registerAddVariant, handleSubmit: handleSubmitAddVariant, reset: resetAddVariant } = useForm();

    useEffect(() => {
        resetVariant({
          variationbyinventory: product[0]?.variationbyinventory?.map((p) => ({
            inventories: p.inventories.map((i) => ({
              id_product_inventory: i.id_product_inventory,
              type_inventory: i.type_inventory,
              stock_quantity: i.stock_quantity,
              id_sucursal: i.id_sucursal,
            })),
            variation_name: p.variation_name,
            type_variation: p.type_variation,
            variation_description: p.variation_description,
            images_variation: p.images_variation,
            id_product_variation: p.id_product_variation,
          })),
        });
      }, [product, resetVariant]);

    const toggleCollapse = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    const onSubmitAddVariant = async (data) => {

        const sendVariant = {
            id_product: product[0].id_product,
            type_variation: data.type_variation,
            variation_name: data.variation_name,
            description: data.variation_description
        }

        setLoaderUpdate(true)
        const createVariant = await formAddVariant(sendVariant)
        if(createVariant === null){
            callProductById()
            setLoaderUpdate(false)
            resetAddVariant()
            Swal.fire({
                title: 'Variación Añadida!',
                icon: "success",
                timer: 1500,
                toast: true,
                showConfirmButton: false,
                position: 'top-right',
            })
            setOpenModalAddVariant(false)

            //route.push(`/administrator/products/${product[0].id_product}`)
        }else{
            setLoaderUpdate(false)
            resetAddVariant()
            Swal.fire({
                title: 'Error al añadir variación!',
                icon: "warning",
                timer: 1500,
                toast: true,
                showConfirmButton: false,
                position: 'top-right',
            })
            setOpenModalAddVariant(false)
        }
    }

    const onSubmitUpdateVariant = async (data) => {
        setLoaderUpdate(true)
        const idVariant = data.id_product_variation
        const sendVariant = {
            type_variation: data.type_variation,
            variation_name: data.variation_name,
            description: data.variation_description
        } 
        
        const update = await updateVariant(sendVariant, idVariant)
        console.log(update)
        if(update.message === null){
            setLoaderUpdate(false)
            Swal.fire({
                title: 'Variación actualizada!',
                icon: "success",
                timer: 1500,
                toast: true,
                showConfirmButton: false,
                position: 'top-right',
            })
            
        }else{
            setLoaderUpdate(false)
            Swal.fire({
                title: 'Error al actualizar variación!',
                icon: "warning",
                timer: 1500,
                toast: true,
                showConfirmButton: false,
                position: 'top-right',
            })
        }
        console.log(update)
    }

    const handleAddVariation = () => {
        setOpenModalAddVariant(true)
        console.log('abrir modal para agregar variación')
    }

    const handleDeleteVariation = async (idVariant) => {
        const deleteVar = await deleteVariant(idVariant)
        console.log(deleteVar)
        if(Array.isArray(deleteVar)){
            callProductById()
            Swal.fire({
                title: 'Variación eliminada!',
                icon: "success",
                timer: 1500,
                toast: true,
                showConfirmButton: false,
                position: 'top-right',
            })
        }else{
            Swal.fire({
                title: 'Error al eliminar variación!',
                icon: "warning",
                timer: 1500,
                toast: true,
                showConfirmButton: false,
                position: 'top-right',
            })
        }
        console.log('eliminar variación ' + deleteVar)
    }


    return (
        <>
            {product.length > 0 && product[0].master ? <></> :
                <>
                    <div className="col-span-2 flex justify-center w-full">
                        <div id="accordionExample" className="w-full">
                            {product.length > 0 &&
                                product[0].variationbyinventory.map((variant, index) => (
                                    <div
                                        key={index}
                                        className="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark w-full"
                                    >
                                        <h2 className="mb-0" id={`heading${index}`}>
                                            <button
                                                className="group relative flex w-full items-center rounded-t-lg border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10"
                                                type="button"
                                                onClick={() => toggleCollapse(index)}
                                                aria-expanded={activeIndex === index ? "true" : "false"}
                                                aria-controls={`collapse${index}`}
                                            >
                                                Variación {variant.variation_name}
                                                <span
                                                    className="-me-1 ms-auto h-5 w-5 shrink-0 transition-transform duration-200 ease-in-out motion-reduce:transition-none"
                                                    style={{
                                                        transform: activeIndex === index ? "rotate(180deg)" : "rotate(0deg)"
                                                    }}
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                        />
                                                    </svg>
                                                </span>
                                            </button>
                                        </h2>
                                        <div
                                            id={`collapse${index}`}
                                            className={activeIndex === index ? "block" : "hidden"}
                                            aria-labelledby={`heading${index}`}
                                            data-twe-parent="#accordionExample"
                                        >
                                            <div className="px-5 py-4">
                                                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                                                    <div className="col-span-1">
                                                        <form className="w-full max-w-5xl mb-10" autoComplete="off" onSubmit={handleSubmitUpdateVariant((data) => onSubmitUpdateVariant(data.variationbyinventory[index]))}>
                                                            <div className="flex flex-wrap -mx-1 mb-6">
                                                                <div className="w-full px-3 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0 mb-3">
                                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                                                        Tipo de variación
                                                                    </label>
                                                                    <input
                                                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                                        type="text"
                                                                        placeholder=""
                                                                        {...registerVariant(`variationbyinventory.${index}.type_variation`)}
                                                                    />

                                                                </div>
                                                                <div className="w-full px-3 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0 mb-3">
                                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                                                        Nombre de variante
                                                                    </label>
                                                                    <input
                                                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                                        type="text"
                                                                        placeholder=""
                                                                        {...registerVariant(`variationbyinventory.${index}.variation_name`)}
                                                                    />
                                                                </div>
                                                                <div className="w-full px-3 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0 mb-3">
                                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                                                        Descripción
                                                                    </label>
                                                                    <input
                                                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                                        type="text"
                                                                        placeholder=""
                                                                        {...registerVariant(`variationbyinventory.${index}.variation_description`)}
                                                                    />
                                                                </div>
                                                                <div className="w-full px-3 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0 mb-3">
                                                                    <div className="flex justify-center">
                                                                        <button
                                                                            className="bg-primary w-64 hover:bg-hover-primary sm:mt-0 lg:mt-4 xl:mt-4 text-white font-bold py-2 px-10 rounded-lg focus:outline-none focus:shadow-outline flex justify-center"
                                                                            type="submit"
                                                                            
                                                                        >
                                                                            Actualizar
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="col-span-1">
                                                    <ImageVariant variant={variant} callProductById={() => callProductById()}></ImageVariant>
                                                    </div>
                                                    <div className="col-span-1 lg:col-span-2 xl:col-span-2">
                                                        <div className="flex flex-wrap -mx-1 mb-6">
                                                            <div className="w-full px-3 mb-3 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0">
                                                                <div className="flex justify-center">
                                                                    <button
                                                                        className="bg-naranja w-64 hover:bg-hover-celeste sm:mt-0 lg:mt-4 xl:mt-4 text-white font-bold py-2 px-10 rounded-lg focus:outline-none focus:shadow-outline flex justify-center"
                                                                        type="button"
                                                                        onClick={()=>handleDeleteVariation(variant.id_product_variation)}
                                                                    >
                                                                        Eliminar variación
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                    <div className="col-span-2 flex justify-center mb-10 lg:mb-0 xl:mb-0 mt-10">
                        <button
                            className="bg-primary w-64 hover:bg-hover-primary sm:mt-0 lg:mt-4 xl:mt-4 text-white font-bold py-2 px-10 rounded-lg focus:outline-none focus:shadow-outline flex justify-center" type="button"
                            onClick={handleAddVariation}>
                            Añadir variación
                        </button>
                    </div>
                </>}


            <ModalAddVariant open={openModalAddVariant} onClose={() => setOpenModalAddVariant(false)}>
                <form className="w-full max-w-5xl mb-10" autoComplete="off" onSubmit={handleSubmitAddVariant(onSubmitAddVariant)}>
                    <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2">
                        Agrega una nueva variación
                    </label>
                    <div className="flex flex-wrap -mx-1 mb-5 mt-5">
                        <div className="w-full px-3 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                tipo de variacion
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder=""  {...registerAddVariant('type_variation')} />
                        </div>
                        <div className="w-full px-3 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                nombre de variante
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder=""  {...registerAddVariant('variation_name')} />
                        </div>
                        <div className="w-full px-3 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                descripción
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder=""  {...registerAddVariant('variation_description')} />
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
            </ModalAddVariant>
            {loaderUpdate ? <Loader></Loader> : <></>}
        </>
    )
}
