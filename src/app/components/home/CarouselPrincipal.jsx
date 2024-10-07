import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function CarouselPrincipal() {

    const images_group = [
        {
            id_category: 1,
            name: '1',
            image_category: 'https://30c5ab-27.myshopify.com/cdn/shop/files/BANNER_PERRO_ULTRAWIDE.png?v=1719537705&width=2000'
        },
        {
            id_category: 2,
            name: '2',
            image_category: 'https://30c5ab-27.myshopify.com/cdn/shop/files/BANNER_GATO_ULTRAWIDE.png?v=1719537713&width=2000'
        },
        {
            id_category: 3,
            name: '3',
            image_category: 'https://30c5ab-27.myshopify.com/cdn/shop/files/BANNER_PORMAYOR_01_copia.webp?v=1719537730&width=2000'
        },
        {
            id_category: 4,
            name: '1',
            image_category: 'https://30c5ab-27.myshopify.com/cdn/shop/files/BANNER_PERRO_ULTRAWIDE.png?v=1719537705&width=2000'
        },
        {
            id_category: 5,
            name: '2',
            image_category: 'https://30c5ab-27.myshopify.com/cdn/shop/files/BANNER_GATO_ULTRAWIDE.png?v=1719537713&width=2000'
        },
        {
            id_category: 6,
            name: '3',
            image_category: 'https://30c5ab-27.myshopify.com/cdn/shop/files/BANNER_PORMAYOR_01_copia.webp?v=1719537730&width=2000'
        }
    ]

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + ' p-2 shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 border border-solid border-white"></span>';
        },
    };

    return (
        <Swiper
            style={{
                '--swiper-navigation-color': '#8C357F',
                '--swiper-pagination-color': '#8C357F'
            }}
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            pagination={pagination}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            {images_group.length > 0 ? images_group.map((ctg, index) => (
                <SwiperSlide key={index}>
                    <img
                        src={ctg.image_category}
                        alt={ctg.name}
                        className="h-[500px] w-full  object-cover" // Ajusta la imagen al contenedor
                    /></SwiperSlide>
            )) : <></>}

        </Swiper>
    )
}
