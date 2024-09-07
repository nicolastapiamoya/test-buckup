import React from 'react'

import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import DeleteButton from './DeleteButton'
import { deleteProductInlist } from '@/app/api/productList/route'

export default function DeleteButtonServer({ id_product_in_list, id_product_list }) {
    async function deleteForm(body) {
        'use server'
        const deleteFormProductInList = await deleteProductInlist(body.get('id_product_in_list'))
        if(deleteFormProductInList){
            revalidatePath(`/administrator/products/list/${id_product_list}`)
            redirect(`/administrator/products/list/${id_product_list}`)
        }
        
    }
    return (
        <form action={deleteForm}>
            <input type="hidden" name='id_product_in_list' value={id_product_in_list} />
            <DeleteButton></DeleteButton>
        </form>
    )
}
