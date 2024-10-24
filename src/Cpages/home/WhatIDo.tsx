"use client"
import Container from '@/src/components/Container'
import SectionTitle from '@/src/components/shared/SectionTitle'
import React from 'react'

const WhatIDo = () => {
    return (
        <Container classname='py-10'>
            <div>
                <SectionTitle className='' title='What I do'>
                    <p className='md:text-lg'>I have over 2 years of experience building responsive and engaging front-end applications, as well as 1+ year of experience working with the MERN (MongoDB, Express, React, Node.js) stack for full-stack development.
                    </p>
                </SectionTitle>
            </div>
        </Container>
    )
}

export default WhatIDo