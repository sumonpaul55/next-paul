"use client"
// components/EducationSection.tsx
import { Card, CardBody, } from '@nextui-org/react';
import Image from 'next/image';
import educationIcon from "@/src/../public/img/educatation.png"
import SectionTitle from '@/src/components/shared/SectionTitle';
import Container from '@/src/components/Container';
const EducationSection: React.FC = () => {
    return (
        <Container classname='md:pt-10 mt-5 md:mt-0 pb-5 md:pb-20 educationSection font-sans text-white'>
            {/* <h2 className="text-lg md:text-3xl lg:text-4xl font-bold text-center mb-12">Education</h2> */}
            <SectionTitle title="Education" className=''>
                <p className='text-paragraphText'>All of my educational qualifiction</p>
            </SectionTitle>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                {/* MBA Section */}
                <Card className="bg-slate-900">
                    <CardBody>
                        <div className='flex gap-4 mb-5 items-center'>
                            <div className='bg-gray-200 size-16 rounded-full flex justify-center items-center'>
                                <Image src={educationIcon} alt='Education' width={200} height={200} className='size-10' />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">Master of Business Administration (MBA)</h3>
                                <h3 className="text-sm text-gray-600">2023 – Present</h3>
                            </div>
                        </div>
                        <h3 className="mt-2">
                            <strong className='md:text-md uppercase'>national University</strong>  (Management) <br />
                            Currently pursuing my MBA, focusing on Business Management. This program enhances my strategic thinking, decision-making abilities, and leadership skills, which are crucial for managing projects effectively in the tech industry.
                        </h3>
                    </CardBody>
                </Card>
                <Card className="bg-slate-900">
                    <CardBody>
                        <div className='flex gap-4 mb-5 items-center'>
                            <div className='bg-gray-200 size-16 rounded-full flex justify-center items-center'>
                                <Image src={educationIcon} alt='Education' width={200} height={200} className='size-10' />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">
                                    Bachelor of Business Administration (BBA)
                                </h3>
                                <h3 className="text-sm text-gray-600">Graduated in 2021</h3>
                            </div>
                        </div>
                        <h3 className="mt-2">
                            <strong className='md:text-md uppercase'>national University</strong>  (Management) <br />
                            Graduated with a BBA in Management, developing a strong foundation in business operations, project management, and organizational behavior. This coursework has equipped me with essential tools for leading teams and driving business success.
                        </h3>
                    </CardBody>
                </Card>
                {/* BBA Section */}
                <Card className="bg-slate-900">
                    <CardBody>
                        <div className='flex gap-4 mb-5 items-center'>
                            <div className='bg-gray-200 size-16 rounded-full flex justify-center items-center'>
                                <Image src={educationIcon} alt='Education' width={200} height={200} className='size-10' />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">
                                    Higher Secondary Certificate(HSC)
                                </h3>
                                <h3 className="text-sm text-gray-600">Graduated in 2021</h3>
                            </div>
                        </div>
                        <h3 className="mt-2">
                            <strong className='md:text-md uppercase'>Mymensingh Gov. College</strong>  (Business) <br />
                            I completed my HSC from Mymensingh Government College, where I first nurtured my interest in management and leadership, paving the way for my journey in business and technology. </h3>
                    </CardBody>
                </Card>
                {/* Developer Proficiency Section */}
                <Card className="bg-slate-900">
                    <CardBody>
                        <div className='flex gap-4 mb-5 items-center'>
                            <div className='bg-gray-200 size-16 rounded-full flex justify-center items-center'>
                                <Image src={educationIcon} alt='Education' width={200} height={200} className='size-10' />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">
                                    Proficient Developer with Business Acumen
                                </h3>
                            </div>
                        </div>

                        <h3 className="mt-2">
                            Alongside my academic achievements, I am a highly skilled web developer with expertise in modern web technologies like <strong>React.js, Node.js, Next.js, Tailwind CSS,</strong> and <strong>MongoDB</strong>. My combination of business education and technical skills allows me to approach projects holistically, ensuring strong code and sustainable business solutions.
                        </h3>
                    </CardBody>
                </Card>
            </div>
        </Container>

    );
};

export default EducationSection;
