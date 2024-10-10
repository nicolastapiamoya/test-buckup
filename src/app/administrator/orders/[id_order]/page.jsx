'use client'
import { getCartById } from '@/app/api/sales/cart/route'
import { orderById } from '@/app/api/sales/order/route'
import Link from 'next/link'
import React, { useState } from "react";
import { FaShippingFast, FaCreditCard, FaPaypal, FaStar, FaCalendarAlt, FaBox } from "react-icons/fa";

export default function page({ params }) {
    /*     const idOrder = params.id_order
        const order = await orderById(idOrder)
        const idCart = order[0].id_shopping_cart
        const cart = await getCartById(idCart)
        console.log(order)
        console.log(cart) */

    const [products, setProducts] = useState([
        { id: 1, name: "Premium Headphones", quantity: 2, price: 149.99, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" },
        { id: 2, name: "Wireless Mouse", quantity: 1, price: 29.99, image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1467&q=80" },
        { id: 3, name: "Mechanical Keyboard", quantity: 1, price: 89.99, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1465&q=80" },
       
    ]);

    const [showProductDetails, setShowProductDetails] = useState(null);
    const updateQuantity = (id, newQuantity) => {
        setProducts(products.map(product =>
            product.id === id ? { ...product, quantity: Math.max(0, newQuantity) } : product
        ));
    };

    const totalAmount = products.reduce((sum, product) => sum + product.price * product.quantity, 0);

    return (
        <main className=" flex min-h-screen flex-col px-12 bg-gris">
            <div className="grid grid-cols-1 mt-5">
                <div className="py-3 col-span-3 rounded overflow-hidden shadow-lg bg-blanco">
                    <div className="grid grid-cols-8">
                        <div className="col-span-8 sm:col-span-8 md:col-span-2 lg:col-span-2 xl:col-span-2 ml-5 mt-2">
                            <h1 className="font-semibold text-lg">Orden N° </h1>
                        </div>
                        <div className="col-span-8 sm:col-span-8 md:col-span-2 lg:col-span-2 xl:col-span-1 mt-5 sm:mt-5 md:mt-0 lg:mt-0 xl:mt-0 flex justify-center">
                            <Link className="bg-primary hover:bg-hover-primary text-white font-bold py-2 px-10 rounded-lg focus:outline-none focus:shadow-outline" href='/dashboard/orders' type="button">
                                Volver
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 gap-10">
                <div className="col-span-4 max-w-8xl rounded shadow-lg flex flex-wrap justify-center bg-blanco">

                    {/* {
                        order.length > 0 ?
                            order.map((ord, index) => (
                                <div className="grid grid-cols-1">
                                    <div className='col-span-1  mt-10 mb-5 flex justify-center'><label className='text-lg font-semibold'>Orden de compra</label></div>
                                    <div className="col-span-1"> N° de order: {ord.id_order}</div>
                                    <div className="col-span-1"> creada el: {ord.created_at}</div>
                                    <div className="col-span-1"> N° de carro: {ord.id_shopping_cart}</div>
                                    <div className="col-span-1"> Comprado en: {ord.type_order}</div>
                                    <div className="col-span-1"> Vendedor: {ord.id_user}</div>
                                    <div className="col-span-1"> Tipo de compra: {ord.type_sales}</div>
                                    <div className="col-span-1"> Tipo de pago: {ord.payment_method}</div>
                                    <div className="col-span-1"> N° de transaccion: {ord.transaction_id}</div>
                                    <div className="col-span-1"> Despacho: {ord.delivery}</div>
                                    <div className="col-span-1"> Total: {ord.total}</div>
                                </div>
                            )) : <></>
                    } */}
                </div>
            </div>


            <div className="bg-gray-100 min-h-screen mb-10">
                <div className="w-full mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="p-6">
                        <h1 className="text-3xl font-bold mb-6">Detalle de orden</h1>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div>
                                <h2 className="text-xl font-semibold mb-4">Productos</h2>
                                {products.map((product) => (
                                    <div key={product.id} className="flex items-center mb-4 bg-gray-50 p-4 rounded-lg">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-16 h-16 object-cover rounded mr-4"
                                        />
                                        <div className="flex-grow">
                                            <h3 className="font-semibold">{product.name}</h3>
                                            <p className="text-gray-600">${product.price.toFixed(2)}</p>
                                            <div className="flex items-center mt-2">
                                                <button
                                                    onClick={() => updateQuantity(product.id, product.quantity - 1)}
                                                    className="bg-gray-200 px-2 py-1 rounded"
                                                    aria-label="Decrease quantity"
                                                >
                                                    -
                                                </button>
                                                <span className="mx-2">{product.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(product.id, product.quantity + 1)}
                                                    className="bg-gray-200 px-2 py-1 rounded"
                                                    aria-label="Increase quantity"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => setShowProductDetails(product.id === showProductDetails ? null : product.id)}
                                            className="ml-4 text-blue-600 hover:text-blue-800 transition-colors"
                                            aria-label={`View details for ${product.name}`}
                                        >
                                            {showProductDetails === product.id ? "Hide Details" : "View Details"}
                                        </button>
                                    </div>
                                ))}
                                {showProductDetails && (
                                    <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                                        <h4 className="font-semibold mb-2">{products.find(p => p.id === showProductDetails).name} Details</h4>
                                        <p>This is where you would display more detailed information about the selected product, such as a longer description, specifications, or additional images.</p>
                                    </div>
                                )}
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-4">Resumen de pedido</h2>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <div className="flex justify-between mb-2">
                                        <span>Subtotal:</span>
                                        <span>${totalAmount.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between mb-2">
                                        <span>Despacho:</span>
                                        <span>$9.99</span>
                                    </div>
                                    <div className="flex justify-between font-semibold text-lg mt-4 pt-4 border-t">
                                        <span>Total:</span>
                                        <span>${(totalAmount + 9.99).toFixed(2)}</span>
                                    </div>
                                </div>

                                <h2 className="text-xl font-semibold mt-6 mb-4">Detalle de despacho</h2>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <div className="flex items-center mb-2">
                                        <FaShippingFast className="mr-2 text-blue-600" />
                                        <span>Depacho express</span>
                                    </div>
                                    <p className="mb-2">123 Main St, Anytown, AN 12345</p>
                                    <div className="flex items-center">
                                        <FaCalendarAlt className="mr-2 text-blue-600" />
                                        <span>Estimated Delivery: July 15, 2023</span>
                                    </div>
                                </div>

                                <h2 className="text-xl font-semibold mt-6 mb-4">Metodo de pago</h2>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <div className="flex items-center mb-2">
                                        <FaCreditCard className="mr-2 text-blue-600" />
                                        <span>Tarjeta de credito</span>
                                    </div>
                                    <div className="flex items-center">
                                        <FaPaypal className="mr-2 text-blue-600" />
                                        <span>PayPal</span>
                                    </div>
                                </div>

                                <h2 className="text-xl font-semibold mt-6 mb-4">Información de vendedor</h2>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="font-semibold mb-2">TechGadgets Inc.</h3>
                                    <p className="mb-2">Contact: support@techgadgets.com</p>
                                    <div className="flex items-center">
                                        <FaStar className="text-yellow-400 mr-1" />
                                        <FaStar className="text-yellow-400 mr-1" />
                                        <FaStar className="text-yellow-400 mr-1" />
                                        <FaStar className="text-yellow-400 mr-1" />
                                        <FaStar className="text-gray-300 mr-2" />
                                        <span>(4.2/5 based on 1024 reviews)</span>
                                    </div>
                                </div>

                                <h2 className="text-xl font-semibold mt-6 mb-4">Estado de orden</h2>
                                <div className="bg-gray-50 p-4 rounded-lg py-8">
                                <span className="bg-blue-600 text-white px-10 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                                    Orden confirmada
                                </span>
                                </div>
                               
                            </div>
                        </div>

                        <div className="mt-8 mb-8 text-center">

                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
