import React from 'react'
export const runtime = 'edge'; 
export default function page({params}) {
  return (
    <div>Categoría {params.id_category}</div>
  )
}
