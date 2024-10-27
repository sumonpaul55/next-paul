import LoadingDoor from '@/src/components/shared/LoadinDoor'
import AllBlogs from '@/src/Cpages/blogs/allBlogs'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <>
            <LoadingDoor />
            <div className='bg-gray-100 px-3 py-2'>

                <div className='py-4 flex justify-between'>
                    <h2>Posts</h2>
                    <div>
                        <Link className='py-1 px-3 text-white rounded-lg bg-primary' href={`/dashboard/post/createPost`}>Create Post</Link>
                    </div>
                </div>
                <div className='bg-white'>
                    <h1 className='p-2 text-lg md:text-xl font-semibold'>Your All Posts</h1>
                    <AllBlogs />
                </div>
            </div>
        </>
    )
}

export default page