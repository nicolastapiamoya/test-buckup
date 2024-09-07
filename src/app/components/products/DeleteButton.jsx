'use client'

import { useFormStatus } from 'react-dom';
import React from 'react'
import * as FaIcons from 'react-icons/fa'
import Loader from '../Loader';


export default function DeleteButton() {
    const { pending } = useFormStatus();
    return (
        <>
            {
                pending ?
                    <Loader></Loader>
                    :
                    (
                        <button className="border-solid border-2 border-red-400 hover:bg-naranja p-1 rounded-xl w-12 flex justify-center" type="submit">
                            <FaIcons.FaTrash ></FaIcons.FaTrash>
                        </button>)
            }
        </>
    )
}
