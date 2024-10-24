
import Container from '@/src/components/Container'
import AllBlogs from '@/src/Cpages/blogs/allBlogs'
import Link from 'next/link'

const page = () => {

    return (
        <main>
            <Container classname='py-6'>
                <div className='bg-gray-100 px-3'>
                    <div className='py-4 flex justify-between'>
                        <h2>Posts</h2>
                        <div>
                            <Link className='py-1 px-3 text-white rounded-lg bg-primary' href={`/createPost`}>Create Post</Link>
                        </div>
                    </div>
                    <div className='bg-white'>
                        <h1 className='p-2 text-lg md:text-xl font-semibold'>Your All Posts</h1>
                        <AllBlogs />
                    </div>
                </div>
            </Container>
        </main>
    )
}

export default page