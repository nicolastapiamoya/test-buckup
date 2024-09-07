'use client';

import { useEffect } from "react";

export default function ProductModal({ open, onClose, children }) {
    useEffect(() => {
        if (open) {
          // Desactivar el scroll
          document.body.style.overflow = "hidden";
        } else {
          // Activar el scroll
          document.body.style.overflow = "auto";
        }
        
        // Limpiar el efecto al desmontar el componente
        return () => {
          document.body.style.overflow = "auto";
        };
    }, [open]);

    return (
        // backdrop
        <div
            onClick={onClose}
            className={`
                fixed inset-0 flex justify-center items-center transition-colors
                ${open ? "visible bg-primary/35" : "invisible"}
            `}
        >
            {/* modal */}
            <div
                onClick={(e) => e.stopPropagation()}
                className={`
                    bg-blanco rounded-xl shadow p-6 transition-all
                    ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
                `}
            >
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
                >
                    X
                </button>
                {children}
            </div>
        </div>
    )
}
