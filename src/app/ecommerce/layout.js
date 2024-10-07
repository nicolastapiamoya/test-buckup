'use client'
import React, { useState } from 'react'
import HeaderPage from '../components/HeaderPage';
import FooterPage from '../components/FooterPage';


export default function EcommerceLayout({ children }) {
    const [popOverOpen, setPopOverOpen] = useState(false);
    const togglePopOver = () => {
        setPopOverOpen(!popOverOpen);
    }

    return (
        <>
            <HeaderPage></HeaderPage>
            <main className="ml-0 transition-all duration-300 ease-in-out" onClick={popOverOpen ? togglePopOver : undefined}>
                {children}
            </main>
            <FooterPage></FooterPage>
        </>
    )
}
