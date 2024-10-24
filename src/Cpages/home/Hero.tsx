
import React from 'react'
import img from "@/src/../public/img/paul.png"
import Image from 'next/image'
import AnimateText from './AnimateText'
import Container from '@/src/components/Container'
import MyLink, { MyLinkHover } from '@/src/components/MyLinks/MyLink'
export const Hero = () => {
    return (
        <Container classname='py-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-5 py-10'>
                <div>
                    <h1 className='font-extrabold text-2xl sm:text-3xl font-open_sans'>I&apos;M,</h1>
                    <div className='flex items-center flex-wrap gap-2'>
                        <AnimateText /> <h2 className='text-5xl lg:text-[3em] font-[800]'>Developer</h2>
                    </div>
                    <div className='mt-10'>
                        <p className='text-TextHeading md:text-lg'>
                            I am <span className='text-primary font-semibold'>Sumon Chandra Paul</span>. I&apos;m a passionate web developer with a focus on creating dynamic and visually appealing websites that drive user engagement. With expertise in both front-end and back-end technologies, including Next.js, TypeScript, React, Node.js, and MongoDB.
                        </p>
                    </div>
                    <div className='mt-10 flex gap-10'>
                        <MyLink url='https://drive.google.com/file/d/1dlwy3VGj3ZyRw2T8RS5PAypqCFO3VIsg/view?usp=sharing' target="_blank" className="bg-primary text-white border p-2 rounded-md font-semibold font-sans hover:bg-white hover:text-primary hover:border border-primary duration-400">
                            View Resume
                        </MyLink>
                        <MyLinkHover url='https://drive.usercontent.google.com/u/0/uc?id=1dlwy3VGj3ZyRw2T8RS5PAypqCFO3VIsg&export=download' className="" >
                            Download Resume
                        </MyLinkHover>
                    </div>
                </div>
                <div className='flex justify-center md:justify-end mt-10 md:mt-0'>
                    <div className=''>
                        <div className='relative z-[2]'>
                            <div className=''>
                                <Image src={img} alt='Sumon Paul' height={500} width={400} className='lg:max-w-[350px]' />
                            </div>
                            <div className='bg-blue-500 animateBg absolute h-full w-full top-0 left-0 z-[-1]'></div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}
