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
            <button className='border-solid border-2 w-8 h-8 rounded-md hover:bg-primary hover:text-white' type="submit">+</button>
        </form>
    )
}