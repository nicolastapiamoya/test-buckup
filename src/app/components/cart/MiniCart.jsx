
import mockData from '@/app/utils/MockProducts';
import Link from 'next/link';
import React, { useState } from 'react'
import * as IconLu from "react-icons/lu"
export default function MiniCart({ onCartClose }) {
    const [cartItems, setCartItems] = useState(mockData.MockProductCart);

    const updateQuantity = (id, newQuantity) => {
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
        ));
    };

    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };


    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <>
            {cartItems.map(item => (
                <div key={item.id} className="bg-white rounded-lg shadow-md p-4 mb-4 transition-all duration-300 hover:shadow-lg">
                    <div className="flex justify-end">
                        <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:text-red-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                            aria-label="Remove item"
                        >
                            <IconLu.LuTrash className="w-5 h-5" />
                        </button>
                    </div>
                    <div className="flex items-center justify-between">
                        <img src={item.image} alt={item.name} className="w-28 h-28 object-cover rounded-md mb-2" />
                        <div className="flex-1 ml-2">
                            <h2 className="text-md font-semibold ">{item.name}</h2>
                            <p className="text-sm text-gray-600 line-through">${item.beforePrice.toFixed(2)}</p>
                            <p className="text-lg text-gray-600">${item.price.toFixed(2)}</p>
                        </div>
                    </div>
                    <div className="ml-3 flex items-start justify-between">
                        <div className="flex items-center mb-2">
                            <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="bg-gray-200 px-2 py-1 rounded-l"
                            >
                                -
                            </button>
                            <span className="bg-gray-100 px-4 py-1">{item.quantity}</span>
                            <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="bg-gray-200 px-2 py-1 rounded-r"
                            >
                                +
                            </button>
                        </div>

                    </div>
                </div>
            ))}
            <div className="bg-white p-6 mb-4 border-t-2 border-solid">
                <div className="font-bold mb-5">Costo de tus productos</div>
                <div className="flex justify-between">
                    <div>Total</div>
                    <div>${calculateTotal()}</div>
                </div>
            </div>
            <div className="flex justify-center">
                <Link className="w-full text-center bg-primary text-white py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105" href='/ecommerce/cart/1' onClick={() => {
                    onCartClose();
                }}>
                    Ir a mi carro
                </Link>
            </div>
        </>
    )
}
