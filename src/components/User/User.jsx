import React from 'react'
import { useParams } from 'react-router-dom'

export function User() {
    const {userid} = useParams()

    return (
        <>
                <div className='bg-gray-600 text-[20px] p-4'>User : {userid}</div>
        </>
    )
}

 
