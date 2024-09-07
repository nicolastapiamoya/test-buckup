
import React from 'react'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import DeleteButton from './DeleteButton'
import { deleteCategory } from '@/app/api/catalog/category/route'

export default async function DeleteButtonServer({ id_category }) {
    async function deleteFormCategory(body) {
   'use server'
        const deleteFormPromo = await deleteCategory(body.get('id_category'))
        if(deleteFormPromo){
            revalidatePath('/administrator/categories')
            redirect('/administrator/categories')
        }
    }

    return (
        <form action={deleteFormCategory}>
            <input type="hidden" name='id_category' value={id_category} />
            <DeleteButton></DeleteButton>
        </form>
    )
}
