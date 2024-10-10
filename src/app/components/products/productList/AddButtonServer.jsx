'use client'
import React from 'react'
import { formAddProductInList } from '@/app/actions/actions'

export default function AddButtonServer({ id_product_list, id_product }) {

    async function AddForm(body) {
        console.log(body)
        const addFormProductInList = await formAddProductInList(body)
        if(addFormProductInList.status  === 'ok'){
            console.log('llegaaa')
        }
    }
    return (
        <form action={AddForm}>
            <input type="hidden" name='id_product' value={id_product} />
            <input type="hidden" name='id_product_list' value={id_product_list} />
            <button className='shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 border-solid border-2 w-8 h-8 rounded-md bg-primary hover:bg-hover-primary text-white' type="submit">+</button>
        </form>
    )
}