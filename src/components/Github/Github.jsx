import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

export function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState({})
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Lalit-Mohan-Cloud')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    //     .catch(error => console.error("Error fetching data:", error));
    // },[])

    return (
        <>
            <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
                Github followers: {data?.followers ?? 'N/A'}
                {data?.avatar_url && (
                    <img src={data.avatar_url} alt="Git picture" width={300} />
                )}
            </div>
        </>
    )
}

export const githubInfoLoader = async () => {
    try {
        const response = await fetch('https://api.github.com/users/Lalit-Mohan-Cloud')
        if (!response.ok) throw new Error('Network response was not ok')
        return response.json()
    } catch (error) {
        console.error("Error fetching data:", error)
        return { followers: 0, avatar_url: '' } // or handle error display
    }
}

