"use client"


import React, { useEffect } from 'react'

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {

    useEffect(() => {
        // Log the error to an error reporting service
        /* eslint-disable no-console */
        console.log(error)
    }, [error])

    
    return (
        <div>
            <h2>Something went wrong!</h2>
            <button onClick={() => reset}>
                Try again
            </button>
        </div>
    )
}

export default Error