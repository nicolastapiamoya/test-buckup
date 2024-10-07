import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';

export default function CarouselCategories() {
    const categories = [
        {
            id_category: 1,
            name: 'Gatos',
            image_category: '/categories/cat.avif'
        },
        {
            id_category: 2,
            name: 'Perros',
            image_category: '/categories/dog.avif'
        },
        {
            id_category: 3,
            name: 'Peces',
            image_category: '/categories/fish.avif'
        },
        {
            id_category: 4,
            name: 'Gallinas',
            image_category: '/categories/4.avif'
        },
        {
            id_category: 5,
            name: 'Caballos',
            image_category: '/categories/5.avif'
        },
        {
            id_category: 6,
            name: 'Loros',
            image_category: '/categories/6.avif'
        }
    ]

    
    return (
        <div className="flex justify-center mx-10">
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
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1280: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                    },
                    1620: {
                        slidesPerView: 6,
                        spaceBetween: 20,
                    },
                    1920: {
                        slidesPerView: 6,
                        spaceBetween: 20,
                    },
                    2560: {
                        slidesPerView: 6,
                        spaceBetween: 20,
                    }
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper">
                {categories.length > 0 ? categories.map((ctg, index) => (
                    <SwiperSlide key={index}>
                        <div className="mt-10 rounded-lg p-8 mx-12 flex justify-center">
                            <Link href={`/ecommerce/categories/${ctg.id_category}`} className="">
                                <div className=" shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 border-gray-900 rounded-full h-40 w-40 p-0.5 flex-col justify-center items-center" key={index}>
                                    <img
                                        key={index}
                                        src={ctg.image_category}
                                        alt={ctg.name}
                                        className="rounded-full  object-cover" // Ajusta la imagen al contenedor
                                    />
                                </div>
                                <div className="mt-2 flex justify-center">{ctg.name}</div>
                            </Link>
                        </div>
                    </SwiperSlide>
                )) : <></>}
            </Swiper>
        </div>
    )
}
