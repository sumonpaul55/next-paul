import Image from "next/image";

const services = [
    {
        title: "Custom Web Development",
        description:
            "I build responsive, high-performance websites using the latest technologies. Get a custom solution tailored to your needs.",
        image: "/images/custom-web-dev.jpg", // Replace with actual image
    },
    {
        title: "Full-Stack Web Applications",
        description:
            "From backend to frontend, I develop dynamic and scalable web applications using the MERN stack to deliver seamless user experiences.",
        image: "/images/fullstack-app.jpg", // Replace with actual image
    },
    {
        title: "API Development & Integration",
        description:
            "I create RESTful and GraphQL APIs that connect your application with third-party services or build custom APIs to enhance functionality.",
        image: "/images/api-dev.jpg", // Replace with actual image
    },
    {
        title: "Performance Optimization & SEO",
        description:
            "Boost your website’s speed, accessibility, and search rankings with advanced performance optimizations and SEO best practices.",
        image: "/images/optimization.jpg", // Replace with actual image
    },
];

const ServiceSection = () => {
    return (
        <section className="bg-black py-16">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-[#030014] text-center mb-12">
                    My Services
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-[#0a0a0a] border border-[#18181b] shadow-lg shadow-[#18181b] rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300"
                        >
                            <div className="w-20 h-20 mx-auto mb-4">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    width={80}
                                    height={80}
                                    className="rounded-lg object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-[#030014] mb-3">
                                {service.title}
                            </h3>
                            <p className="text-[#cbd5e1] text-sm">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;
