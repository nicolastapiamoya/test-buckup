'use client'

import { useFormStatus } from 'react-dom';
import React from 'react'
import * as FaIcons from 'react-icons/fa'
import Loader from '../../Loader';


export default function DeleteButton() {
    const { pending } = useFormStatus();
    return (
        <>
            {
                pending ?
                    <Loader></Loader>
                    :
                    (
                        <button className="shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 bg-naranja hover:bg-orange-300 p-1 rounded-xl w-12 flex justify-center" type="submit">
                            <FaIcons.FaTrash className='text-white'></FaIcons.FaTrash>
                        </button>
                    )
            }
        </>
    )
}
