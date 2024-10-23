"use client"
// components/TestimonialSlider.tsx
import { Card, Avatar, CardBody } from '@nextui-org/react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// Import css files
const testimonials = [

    {
        name: 'Emily Foster',
        role: 'AI Specialist',
        image: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
        feedback:
            'Sumon Paul is front-end development skills are outstanding. He transformed our design vision into a visually impressive and responsive website. With excellent attention to detail and clear communication, Sumon made the entire process seamless. I highly recommend him for any web development project.',
    },
    {
        name: 'Kevin Lee',
        role: 'IT Support Specialist',
        image: 'https://i.pravatar.cc/150?u=a042581f4e29026724d',
        feedback:
            'Sumon Paul is a top-notch front-end developer. His ability to translate design concepts into polished, responsive websites is truly impressive. With a keen eye for detail and effective communication, Sumon delivered exceptional results. I highly recommend him for any web development needs.',
    },
    {
        name: 'Tanbirul Zihad',
        role: 'Content Writter',
        image: 'https://i.pravatar.cc/150?u=a042581f4e29026924d',
        feedback:
            'Sumon Paul is an exceptional front-end developer. His proficiency in turning design ideas into visually striking, responsive websites is commendable. With a keen eye for detail and effective communication, Sumon delivered impressive results. Highly recommended for any web development project.',
    },
    {
        name: 'Ashiqur Rahman',
        role: 'CEO of Fluresta & Hostflue',
        image: 'https://i.pravatar.cc/150?u=a042581f4e29026924d',
        feedback:
            'Sumon Paul"s front-end development expertise is outstanding. He seamlessly brought our design vision to life with precision and creativity. His attention to detail, timely communication, and commitment to quality make him a standout choice for any web development project. Highly recommended.',
    },
];

const TestimonialSlider = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-8">What Our Clients Say</h2>

                <Carousel responsive={responsive} draggable={true} showDots={true} ssr={true} infinite={true}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="px-4">
                            <Card isHoverable className="p-6 h-full">
                                <CardBody>
                                    <div className="flex justify-center mb-4">
                                        <Avatar
                                            src={testimonial.image}
                                            size="lg"
                                            className="border-4 border-gray-200 rounded-full"
                                        />
                                    </div>
                                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                    <p className="mt-4 text-gray-700">{testimonial.feedback}</p>
                                </CardBody>
                            </Card>
                        </div>
                    ))}
                </Carousel>
            </div>
        </section>
    );
};

export default TestimonialSlider;
