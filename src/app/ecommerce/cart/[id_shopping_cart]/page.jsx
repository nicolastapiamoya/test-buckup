'use client'

import CarouselProducts from "@/app/components/home/CarouselProducts";
import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import * as IconLu from "react-icons/lu"
import { MdErrorOutline } from "react-icons/md";

export default function Page() {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Alimento para gatos BOREAL",
            beforePrice: 39.990,
            price: 29.990,
            quantity: 2,
            image: 'https://30c5ab-27.myshopify.com/cdn/shop/files/ALIMENTO_PARA_GATOS_EKOS_CAT_GATO_10_KG.jpg?v=1719610200&width=360',
            rating: 4,
            size: "M",
            sizes: ["S", "M", "L", "XL"]
        },
        {
            id: 2,
            name: "Alimento para gatos EKOS CAT",
            beforePrice: 69.990,
            price: 59.990,
            quantity: 1,
            image: "https://30c5ab-27.myshopify.com/cdn/shop/files/BOREAL_ORIGINAL_GATO_FISH_TRIO_2_26KG_SUPER_PREMIUM.jpg?v=1719610191&width=360",
            rating: 5,
            size: "32",
            sizes: ["28", "30", "32", "34", "36"]
        }
    ]);

    const [cardDetails, setCardDetails] = useState({
        number: "",
        expiry: "",
        cvv: "",
        name: ""
    });

    const [errors, setErrors] = useState({});
    const [isProcessing, setIsProcessing] = useState(false);

    const updateQuantity = (id, newQuantity) => {
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
        ));
    };

    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const updateRating = (id, newRating) => {
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, rating: newRating } : item
        ));
    };

    const updateSize = (id, newSize) => {
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, size: newSize } : item
        ));
    };

    const handleCardDetailChange = (e) => {
        const { name, value } = e.target;
        setCardDetails({ ...cardDetails, [name]: value });
        validateField(name, value);
    };

    const validateField = (fieldName, value) => {
        let newErrors = { ...errors };

        switch (fieldName) {
            case "number":
                newErrors.number = /^\d{16}$/.test(value) ? "" : "Invalid card number";
                break;
            case "expiry":
                newErrors.expiry = /^(0[1-9]|1[0-2])\/\d{2}$/.test(value) ? "" : "Invalid expiry date";
                break;
            case "cvv":
                newErrors.cvv = /^\d{3,4}$/.test(value) ? "" : "Invalid CVV";
                break;
            case "name":
                newErrors.name = value.trim() ? "" : "Name is required";
                break;
            default:
                break;
        }

        setErrors(newErrors);
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const handlePlaceOrder = () => {
        if (Object.values(errors).some(error => error) || Object.values(cardDetails).some(value => !value)) {
            alert("Please correct the errors before placing the order.");
            return;
        }

        setIsProcessing(true);
        setTimeout(() => {
            setIsProcessing(false);
            alert("Order placed successfully!");
            setCartItems([]);
            setCardDetails({ number: "", expiry: "", cvv: "", name: "" });
        }, 2000);
    };

    useEffect(() => {
        document.title = `Shopping Cart (${cartItems.length} items)`;
    }, [cartItems]);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    {cartItems.map(item => (
                        <div key={item.id} className="bg-white rounded-lg shadow-md p-6 mb-4 transition-all duration-300 hover:shadow-lg">
                            <div className="flex justify-end">
                            <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:text-red-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                            aria-label="Remove item"
                        >
                            <IconLu.LuTrash className="w-5 h-5" />
                        </button>
                            </div>

                            <div className="flex items-center justify-between mb-4">
                                <img src={item.image} alt={item.name} className="w-36 h-32 object-cover rounded-md" />
                                <div className="flex-1 ml-4">
                                    <h2 className="text-xl font-semibold">{item.name}</h2>
                                    <p className="text-sm text-gray-600 line-through">${item.beforePrice.toFixed(2)}</p>
                                    <p className="text-lg text-gray-600">${item.price.toFixed(2)}</p>
                                    <div className="flex items-center mt-2">
                                        <label htmlFor={`size-${item.id}`} className="mr-2">Size:</label>
                                        <select
                                            id={`size-${item.id}`}
                                            value={item.size}
                                            onChange={(e) => updateSize(item.id, e.target.value)}
                                            className="border rounded px-2 py-1"
                                        >
                                            {item.sizes.map(size => (
                                                <option key={size} value={size}>{size}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end">
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
                            <div className="flex items-center ml-8">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <FaStar
                                        key={star}
                                        className={`cursor-pointer ${star <= item.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                        onClick={() => updateRating(item.id, star)}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                        <h2 className="text-2xl font-semibold mb-4">Credit Card Details</h2>
                        <div className="mb-4">
                            <label htmlFor="cardNumber" className="block mb-2">Card Number</label>
                            <input
                                type="text"
                                id="cardNumber"
                                name="number"
                                value={cardDetails.number}
                                onChange={handleCardDetailChange}
                                className={`w-full p-2 border rounded ${errors.number ? 'border-red-500' : 'border-gray-300'}`}
                                placeholder="1234 5678 9012 3456"
                                maxLength="16"
                                aria-invalid={errors.number ? "true" : "false"}
                                aria-describedby="cardNumberError"
                            />
                            {errors.number && (
                                <p id="cardNumberError" className="text-red-500 text-sm mt-1">
                                    <MdErrorOutline className="inline mr-1" />
                                    {errors.number}
                                </p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="expiryDate" className="block mb-2">Expiry Date</label>
                            <input
                                type="text"
                                id="expiryDate"
                                name="expiry"
                                value={cardDetails.expiry}
                                onChange={handleCardDetailChange}
                                className={`w-full p-2 border rounded ${errors.expiry ? 'border-red-500' : 'border-gray-300'}`}
                                placeholder="MM/YY"
                                maxLength="5"
                                aria-invalid={errors.expiry ? "true" : "false"}
                                aria-describedby="expiryError"
                            />
                            {errors.expiry && (
                                <p id="expiryError" className="text-red-500 text-sm mt-1">
                                    <MdErrorOutline className="inline mr-1" />
                                    {errors.expiry}
                                </p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="cvv" className="block mb-2">CVV</label>
                            <input
                                type="text"
                                id="cvv"
                                name="cvv"
                                value={cardDetails.cvv}
                                onChange={handleCardDetailChange}
                                className={`w-full p-2 border rounded ${errors.cvv ? 'border-red-500' : 'border-gray-300'}`}
                                placeholder="123"
                                maxLength="4"
                                aria-invalid={errors.cvv ? "true" : "false"}
                                aria-describedby="cvvError"
                            />
                            {errors.cvv && (
                                <p id="cvvError" className="text-red-500 text-sm mt-1">
                                    <MdErrorOutline className="inline mr-1" />
                                    {errors.cvv}
                                </p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="nameOnCard" className="block mb-2">Name on Card</label>
                            <input
                                type="text"
                                id="nameOnCard"
                                name="name"
                                value={cardDetails.name}
                                onChange={handleCardDetailChange}
                                className={`w-full p-2 border rounded ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                                placeholder="John Doe"
                                aria-invalid={errors.name ? "true" : "false"}
                                aria-describedby="nameError"
                            />
                            {errors.name && (
                                <p id="nameError" className="text-red-500 text-sm mt-1">
                                    <MdErrorOutline className="inline mr-1" />
                                    {errors.name}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-semibold mb-4">Resumen de compra</h2>
                        <div className="flex justify-between mb-2">
                            <span>Subtotal:</span>
                            <span>${calculateTotal().toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span>Despacho:</span>
                            <span>$10.00</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span>IVA:</span>
                            <span>${(calculateTotal() * 0.1).toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between font-semibold text-lg mt-4">
                            <span>Total:</span>
                            <span>${(calculateTotal() + 10 + calculateTotal() * 0.1).toFixed(2)}</span>
                        </div>
                        <button
                            onClick={handlePlaceOrder}
                            className={`w-full mt-6 bg-primary text-white py-3 rounded-lg font-semibold shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105`}
                            disabled={isProcessing}
                        >
                            Pagar
                        </button>
                    </div>
                </div>
            </div>
            <CarouselProducts title='Complementa tu compra'></CarouselProducts>
        </div>
    );
};
