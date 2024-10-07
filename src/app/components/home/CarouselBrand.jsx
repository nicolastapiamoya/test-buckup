import React from 'react'
/* import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'; */

export default function CarouselBrand() {
    const brands = [
        {
            id_category: 1,
            name: 'boréal',
            image_category: '/brands/1.png'
        },
        {
            id_category: 2,
            name: 'Dibaq Sense',
            image_category: '/brands/5.png'
        },
        {
            id_category: 3,
            name: 'MaxiBull',
            image_category: '/brands/4.png'
        },
        {
            id_category: 1,
            name: 'Guardían',
            image_category: '/brands/3.png'
        },
        {
            id_category: 2,
            name: 'Ekos Cat',
            image_category: '/brands/2.jfif'
        }
    ]
    return (
        <div className="bg-primary mt-10 py-10">
            <div className="ml-28 mb-10 justify-start font-bold text-2xl text-white">Nuestras marcas</div>
            <div className="flex justify-center">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mb-10 gap-10">
                    {brands.length > 0 ? brands.map((ctg, index) => (
                        <div className="col-span-1 flex justify-center" key={index}>
                            <div className="h-[280px] w-[200px] rounded-xl bg-white shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 p-3" >
                                <img
                                    src={ctg.image_category}
                                    alt={ctg.name}
                                    className="w-full object-cover" />
                                <div className="font-bold text-lg flex  justify-center mt-5">{ctg.name}</div>
                            </div>
                        </div>
                    )) : <></>}
                </div>
            </div>
        </div>
    )
}
