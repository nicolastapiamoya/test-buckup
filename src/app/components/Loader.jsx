import React from 'react'
import { Oval } from 'react-loader-spinner'

export default function Loader() {
    return (
        <div className="fixed inset-0 flex justify-center items-center transition-colors visible bg-primary/35">
            <Oval
                visible={true}
                height="60"
                width="60"
                color="#FFF"
                secondaryColor="#FC5C21"
                ariaLabel="oval-loading"
            />
        </div>
    )
}
