import dynamic from 'next/dynamic'
import React from 'react'

const CreatePost = () => {
    const CreatePost = dynamic(() => import('@/src/components/modals/CreatePostModal'), {
        ssr: false
    })
    return (
        <div className='p-4 md:p-10'>
            <CreatePost />
        </div>
    )
}

export default CreatePost