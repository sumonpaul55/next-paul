import Container from '@/src/components/Container'
import React from 'react'

const page = () => {
    return (
        <main>
            <Container classname='py-6'>
                <div className='bg-baseGray px-3'>
                    <div className='py-4 flex justify-between'>
                        <h2>Posts</h2>
                    </div>

                </div>
            </Container>
        </main>
    )
}

export default page