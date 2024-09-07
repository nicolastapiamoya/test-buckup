import React from 'react'

import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import DeleteButton from './DeleteButton'
import { deleteProductlist } from '@/app/api/productList/route'

export default function DeleteButtonServerList({  id_product_list }) {
    async function deleteForm(body) {
        'use server'
        const deleteFormProductList = await deleteProductlist(body.get('id_product_list'))
        if(deleteFormProductList){
            revalidatePath(`/administrator/products/list`)
            redirect(`/administrator/products/list`)
        }
        
    }
    return (
        <form action={deleteForm}>
            <input type="hidden" name='id_product_list' value={id_product_list} />
            <DeleteButton></DeleteButton>
        </form>
    )
}
