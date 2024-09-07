'use client'
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useState } from 'react';

const Pagination = ({ totalPages }) => {
  const pathname = usePathname()
  const searchParams = useSearchParams();
  const currentPage =  Number(searchParams.get('page')) || 1;

  const handlePageChange = (newPage) => {
    console.log(newPage)
    const params = new URLSearchParams(currentPage);
    if(newPage >= 1){
        const params = new URLSearchParams(currentPage);
        params.set('page', newPage);
        return `${pathname}?${params.toString()}`;
    }
    return `${pathname}?${params.toString()}`; 
    
  };

  return (
    <div className="flex justify-center mt-4">
      <Link
        href={handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="border-solid border-2 rounded-lg px-4 py-2 bg-naranja text-white hover:bg-secondary disabled:opacity-50"
      >
        Anterior
      </Link>
      <span className="mx-4 mt-3">Página {currentPage} de {totalPages}</span>
      <Link
        href={handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="border-solid border-2 rounded-lg px-4 py-2 bg-naranja text-white hover:bg-secondary disabled:opacity-50"
      >
        Siguiente
      </Link>
    </div>
  );
};

export default Pagination;
