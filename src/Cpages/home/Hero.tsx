
import React from 'react'
import img from "@/src/../public/img/herotech.png"
import Image from 'next/image'
import AnimateText from './AnimateText'
import Container from '@/src/components/Container'
import MyLink, { } from '@/src/components/MyLinks/MyLink'
export const Hero = () => {
    return (
        <Container classname='py-5 md:py-20 bg-slate-950'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 py-10 text-white'>
                <div>
                    <h1 className='font-extrabold text-2xl sm:text-3xl font-open_sans'>I&apos;M,</h1>
                    <div className='flex items-center flex-wrap gap-2'>
                        <AnimateText /> <h2 className='text-2xl sm:text-[3em] font-[800]'>Developer</h2>
                    </div>
                    <div className='mt-10'>
                        <p className='md:text-lg text-paragraphText'>
                            I am <span className='text-primary font-semibold'>Sumon Chandra Paul</span>. I&apos;m a passionate web developer with a focus on creating dynamic and visually appealing websites that drive user engagement. With expertise in both front-end and back-end technologies, including Next.js, TypeScript, React, Node.js, and MongoDB.
                        </p>
                    </div>
                    <div className='mt-10 flex gap-10 text-sm md:text-base'>
                        <MyLink url='https://drive.google.com/file/d/12e53gBp7IF8nUPXuxCJWbSKFTcucYLl3/view?usp=sharing' target="_blank" className="bg-primary text-white border p-2 rounded-md font-semibold font-sans hover:bg-white hover:text-primary hover:border border-primary duration-400">
                            View Resume
                        </MyLink>
                        <a href={`resume.pdf`} download target="_blank" className={`relative inline-block px-2 md:px-6 py-2 font-semibold text-primary border-1 border-primary rounded-lg overflow-hidden transition-colors duration-300 ease-in-out group hover:text-white`}>
                            <span className="absolute inset-0 bg-primary transform translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
                            <span className="relative z-10 text-white">Downdload Resume</span>
                        </a>
                    </div>
                </div>
                <div className='flex justify-center md:justify-end mt-10 md:mt-0'>
                    <div className=''>
                        <div className='mx-5 md:mx-0'>
                            <div className='relative'>
                                <Image src={img} alt='Sumon Paul' height={400} width={400} className='rounded-full lg:size-[400px]' />
                                <div className='absolute w-[50%] h-[50%] rounded-full border-4 top-1/4 left-1/4 animate-circle'>
                                    <div className='bg-primary-600 size-5 rounded-full absolute top-1/4 right-0 translate-x-1/4'></div>
                                    <div className='bg-primary-600 size-5 rounded-full absolute top-1/4 left-0 -translate-x-1/4'></div>
                                    <div className='bg-primary-600 size-5 rounded-full absolute top-full left-1/2 -translate-y-1/2'></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}
