"use client"
// components/ExperienceSection.tsx
import { Card, CardBody, } from '@nextui-org/react';
import { AiFillHtml5 } from 'react-icons/ai';
import { BsBootstrap } from 'react-icons/bs';
import { FaReact } from 'react-icons/fa';
import { ImCss3 } from 'react-icons/im';
import { RiTailwindCssLine } from 'react-icons/ri';

const ExperienceSection: React.FC = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-8">Experience</h2>

                {/* Front-End Developer Experience */}
                <Card className="mb-6" isHoverable>
                    <CardBody className='lg:p-8'>
                        <div className='flex items-center gap-0 sm:gap-10 flex-col sm:flex-row'>
                            <h3 className="text-lg font-bold">Front-End Developer</h3>
                            <div className='flex text-primary gap-5 items-center'>
                                (  <FaReact />
                                <RiTailwindCssLine />
                                <BsBootstrap />
                                <AiFillHtml5 />
                                <ImCss3 />
                                )</div>
                        </div>
                        <h3 className="text-sm text-gray-600 text-center sm:text-left mb-4 sm:mb-0">Flureste.com, Mymensingh | 2 Years</h3>


                        <h3 className="mt-2">
                            I have worked as a Front-End Developer for 2 years at <strong>Flureste.com</strong>, focusing on building responsive and dynamic web applications using <strong>Tailwind CSS</strong>, <strong>Bootstrap</strong>, <strong>HTML</strong>, <strong>CSS</strong>, and <strong>React.js</strong>.
                        </h3>
                        <h3 className="mt-2">
                            During this time, I was responsible for designing and developing user-friendly interfaces that provided seamless user experiences. My key contributions involved:
                            <ul className="list-disc pl-5 mt-2">
                                <li className='font-semibold'>Creating reusable and responsive components with React.js and Tailwind CSS.</li>
                                <li className='font-semibold'>Ensuring cross-browser compatibility and mobile-first design with Bootstrap.</li>
                                <li className='font-semibold'>Optimizing page performance and improving site load times.</li>
                                <li className='font-semibold'>Collaborating with designers and backend developers to deliver fully integrated web solutions.</li>
                            </ul>
                        </h3>
                    </CardBody>
                </Card>
            </div>
        </section>
    );
};

export default ExperienceSection;
