
import React from 'react'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import DeleteButton from './DeleteButton'
import { deleteClient } from '@/app/api/sales/customer/route'


export default async function DeleteButtonServer({ id_client }) {
    async function deleteFormClient(body) {
   'use server'
        const deleteFormPromo = await deleteClient(body.get('id_client'))
        if(deleteFormPromo){
            revalidatePath('/administrator/client')
            redirect('/administrator/client')
        }
    }

    return (
        <form action={deleteFormClient}>
            <input type="hidden" name='id_client' value={id_client} />
            <DeleteButton></DeleteButton>
        </form>
    )
}
