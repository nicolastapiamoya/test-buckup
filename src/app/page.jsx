'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
//import Carousel from 'react-elastic-carousel';
import * as IconLu from "react-icons/lu"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [popOverOpen, setPopOverOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({ personalizaTuTienda: false, documentos: false, reportes: false, catalogo: false, cliente: false, marketing: false });

  useEffect(() => {
    // Simula un retardo de carga, puedes reemplazar esto con lógica real si es necesario
    const timer = setTimeout(() => {
      setIsLoading(false); // Oculta el spinner después de la carga
    }, 500); // 2 segundos de retardo para la simulación
    return () => clearTimeout(timer);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    if (!sidebarOpen) {
      setDropdownOpen({ personalizaTuTienda: false, documentos: false, reportes: false, catalogo: false, cliente: false, marketing: false });
    }
  };

  const togglePopOver = () => {
    setPopOverOpen(!popOverOpen);
  }

  const toggleDropdown = (dropdownName) => {
    setDropdownOpen(prevState => ({
      ...prevState,
      [dropdownName]: !prevState[dropdownName]
    }));
  };


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

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + ' p-2 shadow-md transition duration-300 ease-in-out transform hover:translate-y-1 hover:scale-100 "></span>';
    },
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-primary">
        <div className="grid grid-cols-1">
          <div className="col-span-1 flex justify-center mb-5">
          <div
          className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid text-white border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-purple-500"
          role="status">
          <span
            className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
          >Loading...</span>
        </div>
          </div>
          <div className="col-span-1 flex justify-center">
          <div className="flex justify-center">
          <img src="https://30c5ab-27.myshopify.com/cdn/shop/files/Mesa_de_trabajo_4.png?v=1719537986&width=210" className="w-36 h-14 px-2 py-1 rounded-md flex justify-center bg-primary" />
        </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <header>
        <nav className="bg-primary">
          <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex justify-center m-auto"><img src="https://30c5ab-27.myshopify.com/cdn/shop/files/Mesa_de_trabajo_4.png?v=1719537986&width=210" className="w-36 h-14 px-2 py-1 rounded-md flex justify-center bg-primary" /></div>
                <div className="flex flex-shrink-0 items-center">
                  <div>
                    <span className="absolute text-primary text-4xl top-4 left-0 cursor-pointer bg-primary" onClick={toggleSidebar}>
                      <IconLu.LuMenu className="px-2 bg-white rounded-md" />
                    </span>
                    <div className={`z-50 sidebar fixed top-0 bottom-0 left-0 p-2 w-[300px] overflow-y-auto text-center bg-primary transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out`}>
                      <div className="text-gray-100 text-xl">
                        <div className="p-2.5 mt-1 flex items-center">
                          <img src="https://30c5ab-27.myshopify.com/cdn/shop/files/Mesa_de_trabajo_4.png?v=1719537986&width=210" className="w-28 h-12 px-2 py-1 rounded-md bg-primary" />
                          <IconLu.LuX className="cursor-pointer ml-28" onClick={toggleSidebar} />
                        </div>
                        <div className="my-2 bg-primary h-[1px]"></div>
                      </div>
                      <Link className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-hover-primary text-white" href="/ecommerce/home" onClick={() => setSidebarOpen(false)}>
                        <IconLu.LuHome />
                        <span className="text-[15px] ml-4 text-gray-200 font-bold">Home</span>
                      </Link>
                      <Link className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-hover-primary text-white" href="/ecommerce/categories" onClick={() => setSidebarOpen(false)}>
                        <IconLu.LuStore />
                        <span className="text-[15px] ml-4 text-gray-200 font-bold">Comida para gatos</span>
                      </Link>
                      <Link className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-hover-primary text-white" href="/ecommerce/categories" onClick={() => setSidebarOpen(false)}>
                        <IconLu.LuStore />
                        <span className="text-[15px] ml-4 text-gray-200 font-bold">Comida para perros</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main className="ml-0 transition-all duration-300 ease-in-out" onClick={popOverOpen ? togglePopOver : undefined}>
        <main className="flex min-h-screen flex-col z-0">
          <section>
            {/*CAROUSEL PRINCIPAL*/}
            <Swiper
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
          </section>
          <section>
            {/*CATEGORIAS*/}
            <div className="flex justify-center mx-10">
              <Swiper
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
                className="mySwiper"
              >
                {categories.length > 0 ? categories.map((ctg, index) => (
                  <SwiperSlide  key={index}>
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
          </section>
          <section>
            <div className="bg-white  mt-10 mx-10">
              <div className="ml-20 mb-10 justify-start font-bold text-2xl ">Ofertas para tu regalón</div>
              {/*CAROUSEL DE PRODUCTOS*/}
              <Swiper
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
                  <SwiperSlide  key={index}>
                    <div className="mb-10 border-solid border-2 rounded-lg p-8 mx-12">
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
                      <div className="font-light text-xs mt-3 ">$25.990 CLP</div>
                      <div className="font-normal text-sm mt-1">$20.990 CLP</div>
                      <div className="flex justify-center">
                        <button className="mt-3 w-48 border-solid border rounded-lg p-2 font-normal flex justify-center text-sm bg-primary text-white shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">Añadir al carro</button>
                      </div>
                    </div>
                  </SwiperSlide>
                )) : <></>}
              </Swiper>
            </div>
          </section>

          <section>
            <div className="bg-primary mt-10">
              <div className="ml-20 mt-10 mb-10 justify-start font-bold text-2xl text-white">Nuestras marcas</div>
              {/*CAROUSEL DE MARCAS*/}
              <div className="flex justify-center">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  xl:grid-cols-5 mb-10 gap-4">
                  {brands.length > 0 ? brands.map((ctg, index) => (
                    <div className="col-span-1" key={index}>
                      <div className="h-[280px] w-[220px] rounded-xl bg-white shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105" >
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
          </section>

          <section>
            <div className="bg-white mt-10 mx-10">
              <div className="ml-20 mb-10 justify-start font-bold text-2xl ">Ofertas para tu regalón</div>
              {/*CAROUSEL DE PRODUCTOS*/}
              <Swiper
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
                  <SwiperSlide  key={index}>
                    <div className="mb-10 border-solid border-2 rounded-lg p-8 mx-12">
                      <Link className=" rounded-lg"  href={`/ecommerce/pdp/${ctg.id_category}`}>
                        <div className="flex items-center justify-center">
                          <img
                            src={ctg.image_category}
                            alt={ctg.name}
                            className="h-[160px] w-[140px] flex items-center justify-center object-cover transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110" // Ajusta la imagen al contenedor
                          />
                        </div>
                      </Link>
                      <div className="font-semibold text-sm uppercase flex justify-center mt-5">Alimento gato ekos cat gato 10 kg</div>
                      <div className="font-light text-xs mt-3 ">$25.990 CLP</div>
                      <div className="font-normal text-sm mt-1">$20.990 CLP</div>
                      <div className="flex justify-center">
                        <button className="mt-3 w-48 border-solid border rounded-lg p-2 font-normal flex justify-center text-sm bg-primary text-white shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">Añadir al carro</button>
                      </div>
                    </div>
                  </SwiperSlide>
                )) : <></>}
              </Swiper>
            </div>
          </section>

        </main>
      </main>
      <footer className="p-10 mt-10 bg-primary">
        <div className="grid grid-cols-1 xl:grid-cols-2">
          <div className="col-span-1">
            <img src="https://30c5ab-27.myshopify.com/cdn/shop/files/Mesa_de_trabajo_4.png?v=1719537986&width=210" className="w-56 h-24 px-2 py-1 rounded-md bg-primary" />
          </div>
          <div className="col-span-1 text-white">
            <div className="text-lg font-medium uppercase">Acerca de Puppys Nutrition</div>
            <div className="text-sm font-light">Somos una tienda para Mascotas ubicados en Limache Valparaíso. Nos dedicamos a ofrecer la mejor alimentación Premium y Super Premium para tus mascotas, asegurando su bienestar y salud integral.</div>
          </div>
        </div>
      </footer>
    </>
  )
}
