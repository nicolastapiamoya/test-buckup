
import React from 'react'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import DeleteButton from './DeleteButton'
import { deleteProduct } from '@/app/api/catalog/product/route'

export default async function DeleteButtonServer({ id_product }) {
    async function deleteFormProduct(body) {
   'use server'
        const deleteFormPost = await deleteProduct(body.get('id_product'))
        if(deleteFormPost){
            revalidatePath('/administrator/products')
            redirect('/administrator/products')
        }
    }

    return (
        <form action={deleteFormProduct}>
            <input type="hidden" name='id_product' value={id_product} />
            <DeleteButton></DeleteButton>
        </form>
    )
}
