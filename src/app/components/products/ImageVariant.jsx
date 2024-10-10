'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Loader from '../Loader';
import Swal from 'sweetalert2';
import ModalAddImageVariant from './ModalAddImageVariant';
import { updateVariant } from '@/app/api/catalog/product/route';
import * as IconLu from "react-icons/lu";

export default function ImageVariant({ variant, callProductById }) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const { register: registerImageVariant, handleSubmit: handleSubmitImageVariant, reset: resetImageVariant } = useForm();
    const [openModalImageVariant, setOpenModalImageVariant] = useState(false);
    const [loaderUpdate, setLoaderUpdate] = useState(false)

    async function callUpdateProductById(body, id_product) {
        const data = await updateVariant(body, id_product)
        return data
    }

    const images = JSON.parse(variant.images_variation)

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const hanldeAddImageVariant = () => {
        console.log('se abre el modal')
        setOpenModalImageVariant(true)
    }

    const onSubmitImageVariant = async (data) => {
        setOpenModalImageVariant(false)
        setLoaderUpdate(true)
        let newImage = []
        if(Array.isArray(images)) {
            newImage = images
        }
        
        newImage.push(data.image)
        const sendBody = {
            images: JSON.stringify(newImage)
        }
        const addImage = await callUpdateProductById(sendBody, variant.id_product_variation)

        if (addImage.message === 'Variation updated successfully') {
            resetImageVariant()
            callProductById()
            Swal.fire({
                title: 'Imagen agregada!',
                icon: "success",
                timer: 1500,
                toast: true,
                showConfirmButton: false,
                position: 'top-right',
            })
            setLoaderUpdate(false)
        } else {
            resetImageVariant()
            Swal.fire({
                title: 'Error al Imagen!',
                icon: "warning",
                timer: 1500,
                toast: true,
                showConfirmButton: false,
                position: 'top-right',
            })
            setLoaderUpdate(false)
        }
        setOpenModalImageVariant(false)
    }

    const handleDeleteImageVariant = async (id) => {
        setLoaderUpdate(true)
        const filterImage = images.filter((img, index) => index != id)
        const sendBody = {
            images: JSON.stringify(filterImage)
        }
        const deleteImage = await callUpdateProductById(sendBody, variant.id_product_variation)
        if (deleteImage.message === 'Variation updated successfully') {
            callProductById()
            Swal.fire({
                title: 'Imagen eliminada!',
                icon: "success",
                timer: 1500,
                toast: true,
                showConfirmButton: false,
                position: 'top-right',
            })
            setLoaderUpdate(false)
        } else {
            Swal.fire({
                title: 'Error al eliminar!',
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
            {
                images ?
                    <div className="w-full px-3 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0 mb-10">
                        <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="grid-last-name">
                            Imagen Variant
                        </label>
                        <div className="relative w-full max-w-3xl mx-auto">
                            <div className="overflow-hidden max-h-[600px]">
                                <img
                                    src={images.length > 0 ? images[currentIndex] : '/sinfoto.jfif'}
                                    alt={`Slide ${currentIndex}`}
                                    className="w-full h-auto object-cover"
                                />
                            </div>

                            <button
                                onClick={handlePrev}
                                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-black p-2 rounded-full hover:bg-gray-600"
                            >
                               <IconLu.LuArrowBigLeft className='text-white items-center flex justify-center w-6 h-6'/>
                            </button>

                            <button
                                onClick={handleNext}
                                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-black p-2 rounded-full hover:bg-gray-600"
                            >
                               <IconLu.LuArrowBigRight className='text-white items-center flex justify-center w-6 h-6'/>
                            </button>
                            {images.length > 0 ? 
                            <button
                                className="absolute bottom-11 left-5 bg-primary w-48 hover:bg-hover-primary sm:mt-0 lg:mt-4 xl:mt-4 text-white font-bold py-2 px-10 rounded-lg focus:outline-none focus:shadow-outline flex justify-center"
                                type="button"
                                onClick={() => handleDeleteImageVariant(currentIndex)}>Eliminar</button> : <></>}

                            <div className="flex justify-center mt-4">
                                {images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`w-3 h-3 mx-1 rounded-full ${index === currentIndex ? 'bg-primary' : 'bg-secondary'
                                            }`}
                                    ></button>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-center mt-3">
                            <button
                                className="shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 bg-primary w-64 hover:bg-hover-primary sm:mt-0 lg:mt-4 xl:mt-4 text-white font-bold py-2 px-10 rounded-lg focus:outline-none focus:shadow-outline flex justify-center"
                                type="button"
                                onClick={hanldeAddImageVariant}
                            >
                                Añadir Imagen
                            </button>
                        </div>
                    </div> :
                    <>
                        <div className="w-full px-3 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0 mb-10">
                            <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="grid-last-name">
                                Imagen Variant
                            </label>
                            <div className="flex justify-center mt-3">
                                <button
                                    className="shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 bg-primary w-64 hover:bg-hover-primary sm:mt-0 lg:mt-4 xl:mt-4 text-white font-bold py-2 px-10 rounded-lg focus:outline-none focus:shadow-outline flex justify-center"
                                    type="button"
                                    onClick={hanldeAddImageVariant}
                                >
                                    Añadir Imagen
                                </button>
                            </div>
                        </div>
                    </>

            }
            {loaderUpdate ? <Loader></Loader> : <></>}
            <ModalAddImageVariant open={openModalImageVariant} onClose={() => { setOpenModalImageVariant(false), resetImageVariant() }}>
                <form className="w-full max-w-5xl mb-10" autoComplete="off" onSubmit={handleSubmitImageVariant(onSubmitImageVariant)}>
                    <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2">
                        Agrega una nueva imagen
                    </label>
                    <div className="flex flex-wrap -mx-1 mb-5 mt-5">
                        <div className="w-full px-3 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                URL Imagen
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder=""  {...registerImageVariant('image')} />
                        </div>
                        <div className="w-full  px-3 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0 mt-8">
                            <div className="flex justify-center">
                                <button
                                    className="shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 bg-primary w-64 hover:bg-hover-primary sm:mt-0 lg:mt-4 xl:mt-4 text-white font-bold py-2 px-10 rounded-lg focus:outline-none focus:shadow-outline flex justify-center"
                                    type="submit">
                                    Agregar
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </ModalAddImageVariant>
        </>


    );
}
