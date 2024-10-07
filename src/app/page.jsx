'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import HeaderPage from './components/HeaderPage';
import FooterPage from './components/FooterPage';
import CarouselPrincipal from './components/home/CarouselPrincipal';
import CarouselCategories from './components/home/CarouselCategories';
import CarouselBrand from './components/home/CarouselBrand';
import CarouselProducts from './components/home/CarouselProducts';

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [popOverOpen, setPopOverOpen] = useState(false);

  useEffect(() => {
    // Simula un retardo de carga, puedes reemplazar esto con lógica real si es necesario
    const timer = setTimeout(() => {
      setIsLoading(false); // Oculta el spinner después de la carga
    }, 500); // 2 segundos de retardo para la simulación
    return () => clearTimeout(timer);
  }, []);

  const togglePopOver = () => {
    setPopOverOpen(!popOverOpen);
  }

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
      <HeaderPage></HeaderPage>
      <main className="ml-0 transition-all duration-300 ease-in-out" onClick={popOverOpen ? togglePopOver : undefined}>
        <main className="flex min-h-screen flex-col z-0">
          <section>
            <CarouselPrincipal></CarouselPrincipal>
          </section>
          <section>
            <CarouselCategories></CarouselCategories>
          </section>
          <section>
            <CarouselProducts></CarouselProducts>
          </section>
          <section>
            <CarouselBrand></CarouselBrand>
          </section>
          <section>
            <CarouselProducts></CarouselProducts>
          </section>
        </main>
      </main>
      <FooterPage></FooterPage>
    </>
  )
}
