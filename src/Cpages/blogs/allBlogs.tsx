"use client"
import Container from '@/src/components/Container'
import LoadingSpinner from '@/src/components/shared/LoadingSpinner'
import PostCard from '@/src/components/shared/PostCard'
// import SectionTitle from '@/src/components/shared/SectionTitle'
import { useGetpost } from '@/src/hooks/post.hook'
import { TPost } from '@/src/types'
import React from 'react'

const AllBlogs = () => {
    const { data, isLoading } = useGetpost()
    return (
        <Container classname='py-5'>
            <div>
                <h2 className='mb-5 text-lg font-semibold'>All Blogs</h2>
                {/* <SectionTitle title='Latest Blogs'>
                    <p>Here is showing last 6 blogs from my all blogs you can see all of my blogs from the blogs page. If you want to read more blogs please click the blog route. Some of blog written by and some of blogs can be writen by random user</p>
                </SectionTitle> */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {isLoading ? <LoadingSpinner /> :
                        data?.data?.map((post: TPost, idx: number) => (
                            <PostCard key={idx} postData={post} />
                        ))
                    }
                </div>
            </div>
        </Container>
    )
}

export default AllBlogs