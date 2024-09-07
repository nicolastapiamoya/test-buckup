'use client';

import { useEffect } from "react";

export default function ModalAddImagePrincipal({ open, onClose, children }) {
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
                z-50 fixed inset-0 flex justify-center items-center transition-colors overflow-auto
                ${open ? "visible bg-primary/35" : "invisible"}
            `}
        >
            {/* modal */}
            <div
                onClick={(e) => e.stopPropagation()}
                className={` w-[650px]
                    bg-blanco rounded-xl shadow p-4 transition-all
                    ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
                `}
            >
                <button
                    onClick={onClose}
                    className="absolute top-1 right-2 p-1 px-2.5 rounded-lg hover:bg-hover-primary text-gray-400 bg-white  border-solid border-2 hover:text-white"
                >
                    X
                </button>
                {children}
            </div>
        </div>
    )
}
