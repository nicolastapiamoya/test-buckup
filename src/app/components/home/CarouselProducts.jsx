import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';

export default function CarouselProducts({title}) {
    const products = [
        {
            id_category: 1,
            name: '1',
            image_category: 'https://30c5ab-27.myshopify.com/cdn/shop/files/ALIMENTO_PARA_GATOS_EKOS_CAT_GATO_10_KG.jpg?v=1719610200&width=360'
        },
        {
            id_category: 2,
            name: '2',
            image_category: 'https://30c5ab-27.myshopify.com/cdn/shop/files/BOREAL_ORIGINAL_GATO_FISH_TRIO_2_26KG_SUPER_PREMIUM.jpg?v=1719610191&width=360'
        },
        {
            id_category: 3,
            name: '3',
            image_category: 'https://30c5ab-27.myshopify.com/cdn/shop/files/ALIMENTO_PARA_GATOS_EKOS_CAT_GATO_10_KG.jpg?v=1719610200&width=360'
        },
        {
            id_category: 1,
            name: '1',
            image_category: 'https://30c5ab-27.myshopify.com/cdn/shop/files/ALIMENTO_PARA_GATOS_EKOS_CAT_GATO_10_KG.jpg?v=1719610200&width=360'
        },
        {
            id_category: 2,
            name: '2',
            image_category: 'https://30c5ab-27.myshopify.com/cdn/shop/files/ALIMENTO_PARA_GATOS_EKOS_CAT_GATO_10_KG.jpg?v=1719610200&width=360'
        },
        {
            id_category: 3,
            name: '3',
            image_category: 'https://30c5ab-27.myshopify.com/cdn/shop/files/ALIMENTO_PARA_GATOS_EKOS_CAT_GATO_10_KG.jpg?v=1719610200&width=360'
        }
    ]
    return (
        <div className="bg-white mt-10">
            <div className="xl:ml-20 mb-10 justify-start font-bold text-2xl ">{title}</div>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#8C357F',
                    '--swiper-pagination-color': '#8C357F',
                }}
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1280: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                    1620: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                    1920: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                    2560: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    }
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {products.length > 0 ? products.map((ctg, index) => (
                    <SwiperSlide key={index}>
                        <div className="mb-10 border-solid border-2 rounded-lg p-8 mx-5">
                            <Link className=" rounded-lg" href={`/ecommerce/pdp/${ctg.id_category}`}>
                                <div className="flex items-center justify-center">
                                    <img
                                        src={ctg.image_category}
                                        alt={ctg.name}
                                        className="h-[160px] w-[140px] flex items-center justify-center object-cover transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110" // Ajusta la imagen al contenedor
                                    />
                                </div>
                            </Link>
                            <div className="font-semibold text-sm uppercase flex justify-center mt-5">Alimento gato ekos cat gato 10 kg</div>
                            <div className="font-light text-sm mt-3 line-through">$25.990 CLP</div>
                            <div className="font-bold text-xl mt-1">$20.990 CLP</div>
                            <div className="flex justify-center">
                                <button className="mt-3 w-48 border-solid border rounded-lg p-2 font-normal flex justify-center text-sm bg-primary text-white shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">Añadir al carro</button>
                            </div>
                        </div>
                    </SwiperSlide>
                )) : <></>}
            </Swiper>
        </div>

    )
}
