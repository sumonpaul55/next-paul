import Container from '@/components/Container'
import React from 'react'
import img from "@/../public/img/paul.png"
import Image from 'next/image'
import AnimateText from './AnimateText'
export const Hero = () => {
    return (
        <Container classname='py-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div>
                    <AnimateText />
                </div>
                <div className='flex justify-center'>
                    <div className='relative z-[2]'>
                        <div className=''>
                            <Image src={img} alt='Sumon Paul' height={500} width={400} className='max-w-[350px]' />
                        </div>
                        <div className='bg-blue-500 animateBg absolute h-full w-full top-0 left-0 z-[-1]'>
                        </div>
                    </div>
                </div>

            </div>
        </Container>
    )
}
