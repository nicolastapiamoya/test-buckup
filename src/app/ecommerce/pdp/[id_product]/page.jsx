'use client'
import CarouselProducts from "@/app/components/home/CarouselProducts";
import Link from "next/link";
import React, { useState } from "react";
import { FaStar, FaInfoCircle, FaQuestionCircle } from "react-icons/fa";

export default function Page({ params }) {
    const [selectedSize, setSelectedSize] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const sizes = [
        { title: "Small", description: "Perfect for everyday use" },
        { title: "Medium", description: "Ideal for short trips" },
        { title: "Large", description: "Great for travel" }
    ];

    const Rating = ({ rating }) => {
        return (
            <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                    <FaStar
                        key={i}
                        className={`${i < rating ? "text-yellow-400" : "text-gray-300"} text-xl mr-1`}
                    />
                ))}
                <span className="ml-2 text-gray-600">{rating}/5</span>
            </div>
        );
    };

    return (
        <div className="container mx-auto p-4 px-10">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                    <img
                        src='https://30c5ab-27.myshopify.com/cdn/shop/files/ALIMENTO_PARA_GATOS_EKOS_CAT_GATO_10_KG.jpg?v=1719610200&width=360'
                        alt="Stylish Leather Bag"
                        className="w-full h-auto object-cover rounded-lg shadow-lg"
                    />
                </div>
                <div className="md:w-1/2 flex flex-col space-y-4">
                    <nav className="text-sm breadcrumbs">
                        <ul className="flex space-x-2">
                            <li><a className="text-blue-500 hover:underline">Home</a></li>
                            <li><a className="text-blue-500 hover:underline">Bags</a></li>
                            <li className="text-gray-500">Leather Bag</li>
                        </ul>
                    </nav>

                    <h1 className="text-3xl font-bold">Alimento gato ekos cat gato 10 kg</h1>
                    <p className="text-xl font-light text-gray-700 line-through">$25.990 CLP</p>
                    <p className="text-2xl font-semibold text-gray-700">$20.990 CLP</p>

                    <Rating rating={4} />

                    <p className="text-gray-600">
                        This premium leather bag combines style and functionality. Perfect for work or travel, it features multiple compartments and a durable design.
                    </p>

                    <div className="flex items-center text-sm text-gray-500">
                        <FaInfoCircle className="mr-2" />
                        <span>Made from genuine leather</span>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-lg font-semibold">Select Size</h2>
                        <div className="flex flex-wrap gap-2">
                            {sizes.map((size, index) => (
                                <button
                                    key={index}
                                    className={`p-2 border rounded-md transition-colors duration-200 ${selectedSize === index ? "bg-blue-500 text-white" : "hover:bg-gray-100"}`}
                                    onClick={() => setSelectedSize(index)}
                                >
                                    <h3 className="font-medium">{size.title}</h3>
                                    <p className="text-xs">{size.description}</p>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center text-sm text-gray-600 hover:text-purple-400 cursor-pointer transition-colors duration-200">
                        <FaQuestionCircle className="mr-2" />
                        <span>Have questions about this product?</span>
                    </div>

                    <Link className="bg-primary text-white py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 text-center" href="/ecommerce/cart/1">
                        Añadir al carro
                    </Link>

                    <div className="flex items-center text-sm text-gray-500 mt-4">
                        <FaInfoCircle className="mr-2" />
                        <span>Free shipping on orders over $50</span>
                    </div>
                </div>

            </div>
            <div className="w-full mt-10">
                <div id="accordionExample" className="w-full mb-2">
                    <div key={1} className=" border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark w-full">
                        <h2 className="mb-0" id={`heading1`}>
                            <button className="group static flex w-full items-center rounded-t-lg border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10"
                                type="button"
                                onClick={() => setActiveIndex(activeIndex === 1 ? null : 1)}
                                aria-expanded={activeIndex === 1 ? "true" : "false"}
                                aria-controls={`collapse1`}>
                                <div className="justify-start font-semibold text-xl ">Caracteristicas</div>

                                <span className="-me-1 ms-auto h-5 w-5 shrink-0 transition-transform duration-200 ease-in-out motion-reduce:transition-none"
                                    style={{
                                        transform: activeIndex === 1 ? "rotate(180deg)" : "rotate(0deg)"
                                    }} >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </span>
                            </button>
                        </h2>
                        <div id={`collapse1`} className={activeIndex === 1 ? "block" : "hidden"} aria-labelledby={`heading1`} data-twe-parent="#accordionExample">
                            <div className="px-5 py-4">

                                <table className="table-fixed mb-3 mt-5 w-full">
                                    <thead>
                                        <tr className="">
                                            <th className="px-4 py-1 font-semibold  text-center">Características Generales</th>
                                        </tr>
                                    </thead>
                                    <tbody className="border border-solid">

                                        <tr>
                                            <td className="border px-4 py-1 text-sm text-center">Marca</td>
                                            <td className="border px-4 py-1 text-sm text-center">asdasdasd</td>

                                        </tr>
                                        <tr>
                                            <td className="border px-4 py-1 text-sm text-center">Modelo</td>
                                            <td className="border px-4 py-1 text-sm text-center">asdasdasd</td>

                                        </tr>
                                        <tr>
                                            <td className="border px-4 py-1 text-sm text-center">Capacidad</td>
                                            <td className="border px-4 py-1 text-sm text-center">asdasdasd</td>

                                        </tr>

                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="w-full mt-10">
                <div id="accordionExample" className="w-full mb-2">
                    <div key={2} className=" border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark w-full">
                        <h2 className="mb-0" id={`heading2`}>
                            <button className="group static flex w-full items-center rounded-t-lg border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10"
                                type="button"
                                onClick={() => setActiveIndex(activeIndex === 2 ? null : 2)}
                                aria-expanded={activeIndex === 2 ? "true" : "false"}
                                aria-controls={`collapse2`}>
                                <div className="justify-start font-semibold text-xl ">Descripción</div>
                                <span className="-me-1 ms-auto h-5 w-5 shrink-0 transition-transform duration-200 ease-in-out motion-reduce:transition-none"
                                    style={{
                                        transform: activeIndex === 2 ? "rotate(180deg)" : "rotate(0deg)"
                                    }} >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </span>
                            </button>
                        </h2>
                        <div id={`collapse2`} className={activeIndex === 2 ? "block" : "hidden"} aria-labelledby={`heading2`} data-twe-parent="#accordionExample">
                            <div className="px-5 py-4">
                                <div className="grid grid-cols-1">
                                    <div className="col-span-1">
                                        <div className="grid grid-cols-2 gap-3">
                                            Salmon Adult de BRAVERY® Es un alimento con salmón para perros adultos de razas medianas y grandes. Libre de grano y cereales, además, de ser monoproteíco, con salmón siempre como primer ingrediente y enriquecido con antioxidantes hipoalergénicos 100% naturales. Es una receta que se encuentra un elevado contenido de proteínas, alta digestibilidad y palatabilidad, ideal para razas de perros adultos medianos y grandes.

                                            BRAVERY® Pet Food nació a partir de una consulta generalizada, a distribuidores y consumidores finales, en la que se preguntaba cuál sería su propuesta para el mejor alimento para una mascota. Acumulandon todas las respuestas nace BRAVERY® un producto referente a nivel de calidad en el segmento super Premium.

                                            Las ventajas de este producto son:


                                            Con Salmón: Excelente fuente de proteína de alto valor biológico cuyo aceite es rico en ácidos grasos Omega-3, especialmente EPA y DHA. Contiene Vitamina A que favorece la resistencia frente a las infecciones y es necesaria para el desarrolllo del sistema nervioso y la visión nocturna. Esta vitamina A contribuye al mantenimiento, crecimiento y reparación de las mucosas, piel y otros tejidos del cuerpo. También es rica en vitamina D, necesaria para el crecimiento ósea; y minerales como el yodo, indispensable para el buen funcionamiento de la tiroides.

                                            Con Tapioca: La tapioca es un alimento sumamente energético, fuente de hidratos de carbono altamente digestibles e idónea para dietas hipoalergénicas.

                                            Libre de Gluten: Elaborado sin cereales, ideal para perros alérgicos o con problemas digestivos.

                                            Salud Cardiovascular: La taurina es beneficiosa para la prevención de algunas cardiomiopatías, mientras que los ácidos grasos Omega-3 (EPA y DHA) ayudan a fortalecer la función cardíaca.

                                            Cuidado del Cuerpo: La condroitina y la glucosamina son componentes esenciales del cartílago con efectos complementarios para mantener una buena salud articular.

                                            Apoyo del Tracto Digestivo: La acción conjunta de FOS como prebiótico, MOS que afecta el control de microorganismos patógenos y fibras naturales (solubles e insolubles) con otro efecto que promueve la flora intestinal saludable y la digestión adecuada.
                                            Guía de alimentación (g/día):
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <CarouselProducts title="Producto similares"></CarouselProducts>
            </div>
        </div>
    );
}
