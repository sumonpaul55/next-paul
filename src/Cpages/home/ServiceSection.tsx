import Image from "next/image";
import customWebdevelopment from "@/src/../public/img/webdevelopment.png"
import fullstack from "@/src/../public/img/fullstack.png"
import apiimplement from "@/src/../public/img/apiimplement.png"
import seo from "@/src/../public/img/seo.jpg"
const services = [
    {
        title: "Custom Web Development",
        description:
            "I build responsive, high-performance websites using the latest technologies. Get a custom solution tailored to your needs.",
        image: customWebdevelopment, // Replace with actual image
    },
    {
        title: "Full-Stack Web Applications",
        description:
            "From backend to frontend, I develop dynamic and scalable web applications using the MERN stack to deliver seamless user experiences.",
        image: fullstack, // Replace with actual image
    },
    {
        title: "API Development & Integration",
        description:
            "I create RESTful and GraphQL APIs that connect your application with third-party services or build custom APIs to enhance functionality.",
        image: apiimplement, // Replace with actual image
    },
    {
        title: "Performance Optimization & SEO",
        description:
            "Boost your website’s speed, accessibility, and search rankings with advanced performance optimizations and SEO best practices.",
        image: seo, // Replace with actual image
    },
];

const ServiceSection = () => {
    return (
        <section className="bg-black py-12 px-5">
            <div className="px-6">
                <h2 className="text-3xl font-bold text-white text-center mb-12">
                    My Services
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-[#0a0a0a] border border-[#18181b] shadow-lg shadow-[#18181b] rounded-2xl  text-center hover:scale-105 transition-all duration-300">
                            <div className="mb-4">
                                <Image
                                    src={service?.image}
                                    alt={service?.title}
                                    width={200}
                                    height={200}
                                    className="rounded-t-lg object-cover w-full"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-white leading-5 mb-3 border-b pb-4 border-gray-500">
                                    {service?.title}
                                </h3>
                                <p className="text-paragraphText text-sm">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;
