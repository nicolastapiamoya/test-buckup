import Link from 'next/link'
import * as IconLu from "react-icons/lu"
import React, { useState, useEffect, useRef } from "react";
import { FiMenu, FiUser, FiShoppingCart, FiSearch } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import MiniCart from './cart/MiniCart';
import mockData from '../utils/MockProducts';

export default function HeaderPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchSuggestions, setSearchSuggestions] = useState([]);
    const [cartItems, setCartItems] = useState(mockData.MockProductCart);

    const dummyProducts = [
        "Perro",
        "Gato",
        "Masterdog",
        "Mastercat",
        "Braberi",
        "Mastermouse",
        "Ekos",
    ];

    const menuRef = useRef(null); // Create a ref for the menu
    const cartRef = useRef(null);

    useEffect(() => {
        if (searchTerm.length > 0) {
            const filteredSuggestions = dummyProducts.filter((product) =>
                product.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setSearchSuggestions(filteredSuggestions);
        } else {
            setSearchSuggestions([]);
        }
    }, [searchTerm]);

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Searching for:", searchTerm);
    };

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleCart = () => setIsCartOpen(!isCartOpen);

    // Close menu when clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target) || cartRef.current && !cartRef.current.contains(event.target)) {
                setIsMenuOpen(false);
                setIsCartOpen(false)
            }
        };

        // Attach event listener
        document.addEventListener("mousedown", handleClickOutside);

        // Clean up event listener
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef, cartRef]);

    return (
        <nav className="bg-primary shadow-md">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between py-4">
                    {/* Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="p-2 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                        aria-label="Open menu"
                    >
                        <FiMenu className="w-6 h-6" />
                    </button>
                    {/* Search Bar */}
                    <div className="relative flex-grow max-w-xl mx-4">
                        <form onSubmit={handleSearch}>
                            <input
                                type="text"
                                placeholder="buscar productos..."
                                className="w-full py-2 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                aria-label="Search products"
                            />
                            <button
                                type="submit"
                                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                                aria-label="Submit search"
                            >
                                <FiSearch className="w-5 h-5 text-gray-500" />
                            </button>
                        </form>
                        {searchSuggestions.length > 0 && (
                            <ul className="absolute z-10 w-full bg-white mt-1 border border-gray-300 rounded-md shadow-lg">
                                {searchSuggestions.map((suggestion, index) => (
                                    <li
                                        key={index}
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                    >
                                        {suggestion}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className="flex items-center">
                        {/* User Button */}
                        <button
                            className="bg-white p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 mr-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                            aria-label="User account"
                        >
                            <FiUser className="w-6 h-6" />
                        </button>

                        {/* Shopping Cart */}
                        <div className="relative">
                            <button
                                onClick={toggleCart}
                                className="bg-white p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                                aria-label="Shopping cart"
                            >
                                <FiShoppingCart className="w-6 h-6" />
                                {cartItems > 0 && (
                                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                                        {cartItems.length}
                                    </span>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Slide-in Menu */}
            <div className={`fixed inset-0 flex justify-center items-center transition-colors overflow-auto ${isMenuOpen ? "visible bg-black/50" : "invisible"}`} style={{ zIndex: 1000 }}>
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            ref={menuRef}
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed inset-y-0 left-0 w-80 bg-primary shadow-xl z-50"
                        >
                            <div className="flex justify-end">
                                <IconLu.LuX
                                    className="cursor-pointer mr-5 mt-5 text-white border border-solid rounded-md w-5 h-5 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                                    onClick={() => setIsMenuOpen(false)}
                                />
                            </div>
                            <div className="flex justify-center">
                                <Link href="/">
                                    <img
                                        src="https://30c5ab-27.myshopify.com/cdn/shop/files/Mesa_de_trabajo_4.png?v=1719537986&width=210"
                                        className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 w-36 h-14 px-2 py-1 rounded-md flex justify-center bg-primary"
                                    />
                                </Link>
                            </div>
                            <div className="p-4 flex flex-col">
                                <Link href="/ecommerce/plp?ctg=Perro" className="w-full text-white hover:text-gray-200 mb-2 border border-solid m-auto p-3 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105" onClick={() => setIsMenuOpen(false)}>
                                    Perros
                                </Link>
                                <Link href="/ecommerce/plp?ctg=Gato" className="w-full text-white hover:text-gray-200 mb-2 border border-solid m-auto p-3 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105" onClick={() => setIsMenuOpen(false)}>
                                    Gatos
                                </Link>
                                <Link href="/ecommerce/plp" className="w-full text-white hover:text-gray-200 mb-2 border border-solid m-auto p-3 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105" onClick={() => setIsMenuOpen(false)}>
                                    Peces
                                </Link>
                                <Link href="/ecommerce/plp?ctg=Hamster" className="w-full text-white hover:text-gray-200 mb-2 border border-solid m-auto p-3 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105" onClick={() => setIsMenuOpen(false)}>
                                    Hamster
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <div className={`fixed inset-0 flex justify-center items-start transition-colors overflow-auto ${isCartOpen ? "visible bg-black/50" : "invisible"}`} style={{ zIndex: 1000 }}>
    <AnimatePresence>
        {isCartOpen && (
            <motion.div
                ref={cartRef}
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.2 }}
                className="fixed top-0 right-0 w-[400px] max-h-full bg-white rounded-md shadow-xl z-50 border border-solid overflow-y-auto" 
            >
                <div className="p-4 w-full">
                    <div className="flex justify-between mb-2">
                        <h3 className="text-lg font-semibold">{`Carro (${cartItems.length})`}</h3>
                        <IconLu.LuX className="cursor-pointer mr-2 text-black border border-solid rounded-md w-8 h-8 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105" onClick={() => setIsCartOpen(false)} />
                    </div>
                    <MiniCart onCartClose={() => setIsCartOpen(false)} />
                </div>
            </motion.div>
        )}
    </AnimatePresence>
</div>


        </nav >
    );
}


