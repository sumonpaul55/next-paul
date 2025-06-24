import Image from "next/image";
import customWebdevelopment from "@/src/../public/img/webdevelopment.png"
import figma from "@/src/../public/img/figma.jpg"
import apiimplement from "@/src/../public/img/apiimplement.png"
import ecommerceImage from "@/src/../public/img/ecommerce.jpg"
import agencyWebsiteImage from "@/src/../public/img/agency.jpg"
import portfolio from "@/src/../public/img/portfolio.png"
import posImage from "@/src/../public/img/pos.jpg"
import managementimg from "@/src/../public/img/management.jpg"
// const services = [
//     {
//         title: "Custom Web Development",
//         description:
//             "I build responsive, high-performance websites using the latest technologies. Get a custom solution tailored to your needs.",
//         image: customWebdevelopment, // Replace with actual image
//     },
//     {
//         title: "Full-Stack Web Applications",
//         description:
//             "From backend to frontend, I develop dynamic and scalable web applications using the MERN stack to deliver seamless user experiences.",
//         image: fullstack, // Replace with actual image
//     },
//     {
//         title: "API Development & Integration",
//         description:
//             "I create RESTful and GraphQL APIs that connect your application with third-party services or build custom APIs to enhance functionality.",
//         image: apiimplement, // Replace with actual image
//     },
//     {
//         title: "Performance Optimization & SEO",
//         description:
//             "Boost your website’s speed, accessibility, and search rankings with advanced performance optimizations and SEO best practices.",
//         image: seo, // Replace with actual image
//     },
// ];
const services = [
    {
        title: "Custom Web Development",
        description:
            "I build responsive, high-performance websites using the latest technologies. Get a custom solution tailored to your needs.",
        image: customWebdevelopment,
    },
    {
        title: "E-Commerce Solutions",
        description:
            "I develop fully-featured e-commerce websites with secure payment integration, smooth product management, and user-friendly shopping experiences to help grow your online business.",
        image: ecommerceImage, // Add an appropriate ecommerce image
    },
    {
        title: "Figma to React.js and Next.js",
        description:
            " I convert Figma designs into pixel-perfect, responsive websites using React and Next.js. Clean code, reusable components, and full mobile responsiveness — just like the design intended.",
        image: figma,
    },
    {
        title: "API Development & Integration",
        description:
            "I create RESTful and GraphQL APIs that connect your application with third-party services or build custom APIs to enhance functionality.",
        image: apiimplement,
    },
    {
        title: "Portfolio Websites",
        description:
            "I build fast, responsive, and SEO-friendly portfolio websites using React & Next.js. Perfect for developers, designers, and creatives who want to showcase their work professionally.",
        image: portfolio,
    },

    {
        title: "Agency & Business Websites",
        description:
            "Custom-built websites designed to showcase your brand and services professionally, optimized for lead generation and customer engagement.",
        image: agencyWebsiteImage, // Add an appropriate agency image
    },
    {
        title: "Point of Sale (POS) Systems",
        description:
            "Robust POS software tailored to your business needs, offering real-time inventory, sales tracking, and seamless checkout experiences.",
        image: posImage, // Add an appropriate POS image
    },
    {
        title: "Comprehensive Management System",
        description:
            "A versatile web application that integrates project, customer, employee, and inventory management into one seamless platform, helping businesses streamline operations and improve productivity.",
        image: managementimg, // Add an appropriate POS image
    }
];

const ServiceSection = () => {
    return (
        <section className="pb-20 pt-10 px-5 bg-slate-50">
            <div className="max-w-7xl mx-auto sm:px-6">
                <h2 className="text-3xl font-bold text-center mb-20">
                    My Services
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-y-10">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-[#0a0a0a] border border-[#18181b] shadow-[#18181b] rounded-lg text-center hover:scale-105 transition-all duration-300">
                            <div className="mb-2">
                                <Image
                                    src={service?.image}
                                    alt={service?.title}
                                    width={400}
                                    height={500}
                                    className="rounded-t-lg lg:object-top w-full max-h-[220px]"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg capitalize font-semibold text-white leading-5 mb-3 border-b pb-4 border-gray-500">
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
