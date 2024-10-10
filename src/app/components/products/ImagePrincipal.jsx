'use client';

import { useState } from 'react';
import ModalAddImagePrincipal from './ModalAddImagePrincipal';
import { useForm } from 'react-hook-form';
import { updateProduct } from '@/app/api/catalog/product/route';
import Loader from '../Loader';
import Swal from 'sweetalert2';
import * as IconLu from "react-icons/lu";

export default function ImagePrincipal({ product, callProductById }) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const { register: registerImagePrincipal, handleSubmit: handleSubmitImagePrincipal, reset: resetImagePrincipal } = useForm();
    const [openModalImagePrincipal, setOpenModalImagePrincipal] = useState(false);
    const [loaderUpdate, setLoaderUpdate] = useState(false)

    async function callUpdateProductById(body, id_product) {
        const data = await updateProduct(body, id_product)
        return data
    }

    const images = JSON.parse(product[0].image_product)

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

    const hanldeAddImagePrincipal = () => {
        console.log('se abre el modal')
        setOpenModalImagePrincipal(true)
    }

    const onSubmitImagePrincipal = async (data) => {
        setOpenModalImagePrincipal(false)
        setLoaderUpdate(true)
        let newImage = []
        if (Array.isArray(images)) {
            newImage = images
        }

        newImage.push(data.image)
        const sendBody = {
            image: JSON.stringify(newImage)
        }
        const addImage = await callUpdateProductById(sendBody, product[0].id_product)
        if (addImage.message === 'Product updated successfully') {
            resetImagePrincipal()
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
            resetImagePrincipal()
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
        console.log(addImage)
        setOpenModalImagePrincipal(false)
    }

    const handleDeleteImagePrincipal = async (id) => {
        const filterImage = images.filter((img, index) => index != id)
        const sendBody = {
            image: JSON.stringify(filterImage)
        }
        const deleteImage = await callUpdateProductById(sendBody, product[0].id_product)
        if (deleteImage.message === 'Product updated successfully') {
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
                            Imagen principal
                        </label>
                        <div className="relative w-full max-w-3xl mx-auto">
                            <div className="overflow-hidden w-[400px] h-[600px] mx-auto flex justify-center items-center">
                                <img
                                    src={images.length > 0 ? images[currentIndex] : '/sinfoto.jfif'}
                                    alt={`Slide ${currentIndex}`}
                                    className="w-[400px] h-auto object-cover"
                                />
                            </div>

                            <button
                                onClick={handlePrev}
                                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-black p-2 rounded-full hover:bg-naranja w-10 h-10"
                            >
                                 <IconLu.LuArrowBigLeft className='text-white items-center flex justify-center w-6 h-6'/>
                                
                            </button>

                            <button
                                onClick={handleNext}
                                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-black p-2 rounded-full hover:bg-gray-600 w-10 h-10"
                            >
                              <IconLu.LuArrowBigRight className='text-white items-center flex justify-center  w-6 h-6'/>
                            </button>

                            {images.length > 0 && (
                                <button
                                    className="shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 absolute bottom-11 left-5 bg-primary w-48 hover:bg-hover-primary sm:mt-0 lg:mt-4 xl:mt-4 text-white font-bold py-2 px-10 rounded-lg focus:outline-none focus:shadow-outline flex justify-center"
                                    type="button"
                                    onClick={() => handleDeleteImagePrincipal(currentIndex)}
                                >
                                    Eliminar
                                </button>
                            )}

                            <div className="flex justify-center mt-4">
                                {images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`w-3 h-3 mx-1 rounded-full ${index === currentIndex ? 'bg-primary' : 'bg-secondary'}`}
                                    ></button>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-center mt-3">
                            <button
                                className="shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 bg-primary w-64 hover:bg-hover-primary sm:mt-0 lg:mt-4 xl:mt-4 text-white font-bold py-2 px-10 rounded-lg focus:outline-none focus:shadow-outline flex justify-center"
                                type="button"
                                onClick={hanldeAddImagePrincipal}
                            >
                                Añadir Imagen
                            </button>
                        </div>

                        {loaderUpdate ? <Loader></Loader> : <></>}
                    </div> :
                    <>
                        <div className="w-full px-3 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0 mb-10">
                            <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="grid-last-name">
                                Imagen principal
                            </label>
                            <div className="flex justify-center mt-3">
                                <button
                                    className="shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 bg-primary w-64 hover:bg-hover-primary sm:mt-0 lg:mt-4 xl:mt-4 text-white font-bold py-2 px-10 rounded-lg focus:outline-none focus:shadow-outline flex justify-center"
                                    type="button"
                                    onClick={hanldeAddImagePrincipal}
                                >
                                    Añadir Imagen
                                </button>
                            </div>
                        </div>
                    </>

            }
            <ModalAddImagePrincipal open={openModalImagePrincipal} onClose={() => { setOpenModalImagePrincipal(false), resetImagePrincipal() }}>
                <form className="w-full max-w-5xl mb-10" autoComplete="off" onSubmit={handleSubmitImagePrincipal(onSubmitImagePrincipal)}>
                    <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2">
                        Agrega una nueva imagen
                    </label>
                    <div className="flex flex-wrap -mx-1 mb-5 mt-5">
                        <div className="w-full px-3 mx-4 sm:mx-3 md:mx-2 lg:mx-1 xl:mx-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                URL Imagen
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder=""  {...registerImagePrincipal('image')} />
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
            </ModalAddImagePrincipal>
        </>


    );
}
