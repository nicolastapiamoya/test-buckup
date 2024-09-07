'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function SearchBar() {
    const { replace } = useRouter()
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const handleSearchChange = (term) => {
        console.log(term)
        const params = new URLSearchParams(searchParams);
        if(term){
            params.set('search', term);
        }else{
            params.delete('search')
        }

        replace(`${pathname}?${params.toString()}`)
    };

    return (
        <div className="mb-4">
            <input
                type="text"
                onChange={(event) => handleSearchChange(event.target.value)}
                className="shadow appearance-none border rounded text-sm w-full py-1.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Buscar..."
                //}
            />
        </div>
    );
};
