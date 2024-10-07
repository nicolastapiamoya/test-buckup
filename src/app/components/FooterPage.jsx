import React from 'react'

export default function FooterPage() {
  return (
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
  )
}
