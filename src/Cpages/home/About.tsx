"use client"
// components/About.tsx
import Image from 'next/image';
import React from 'react';
import sumon from "../../../public/img/paul1.jpg"
const About: React.FC = () => (
    <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-20">
            <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
            <div className='flex-1 sm:pr-10 text-justify'>
                <div className='sm:max-w-[500px] float-left mr-10 block mb-3'>
                    <Image alt="Sumon Paul" src={sumon} width={600} height={400} className='w-[400px] pointer-events-none' />
                </div>
                <p className="text-lg text-gray-900 mb-4">
                    I&apos;m <strong className="text-black">Sumon Chandra Paul</strong>, a dedicated Front-End Engineer specializing in the <strong className="text-black">MERN Stack</strong>, based in <strong className="text-black">Mymensingh, Bangladesh</strong>. With over <strong className="text-black">2 years of experience</strong>, I build responsive, high-performance web applications with clean code and user-first design.
                </p>

                <p className="text-lg text-gray-700 mb-4">
                    I work primarily with <strong className="text-black">React.js</strong> and <strong className="text-black">Next.js</strong>, using <strong className="text-black">TypeScript</strong>, <strong className="text-black">Redux/RTK Query</strong>, and <strong className="text-black">React Hooks</strong> to create scalable, maintainable front-end architectures.
                </p>

                <p className="text-lg text-gray-700 mb-4">
                    For UI styling, I use <strong className="text-black">TailwindCSS</strong>, <strong className="text-black">Bootstrap</strong>, and <strong className="text-black">Ant Design</strong> and so more js packages to ensure modern, pixel-perfect, and responsive layouts across all devices.
                </p>

                <p className="text-lg text-gray-700 mb-4">
                    I&apos;m also experienced in backend development with <strong className="text-black">Node.js</strong>, <strong className="text-black">Express.js</strong>, <strong className="text-black">MongoDB</strong>, and <strong className="text-black">Mongoose</strong>, enabling me to build full-stack applications with secure and efficient APIs.
                </p>

                <p className="text-lg text-gray-700">
                    I hold both a <strong className="text-black">Bachelor&apos;s</strong> and <strong className="text-black">Master&apos;s degree in Business Administration (BBA & MBA)</strong>, giving me a strong foundation in communication, problem-solving, and project planning that complements my technical skills.
                </p>
            </div>


            <div className="flex clear-left mt-20 flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                    <h3 className="text-2xl font-semibold mb-2">What I Do</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>📱 Build responsive, high-performance front-end user interfaces</li>
                        <li>🔐 Implement secure authentication flows using Firebase Auth, JWT & NextAuth.js</li>
                        <li>📦 Manage state and data efficiently with Redux & RTK Query</li>
                        <li>🎨 Design pixel-perfect UI using TailwindCSS, Bootstrap, and Ant Design</li>
                        <li>🛒 Develop scalable e-commerce platforms with seamless shopping experiences</li>
                        <li>🛠️ Create Point of Sale (POS) systems with real-time inventory management</li>
                        <li>🤝 Build customer support and ticketing systems for effective communication</li>
                        <li>🔄 Integrate RESTful APIs and GraphQL for robust backend connectivity</li>
                        <li>⚙️ Optimize web app performance with lazy loading, caching, and code splitting</li>
                        <li>📊 Build admin dashboards featuring real-time analytics and reporting</li>
                    </ul>
                </div>
                <div className="md:w-1/2">
                    <h3 className="text-2xl font-semibold mb-2">Tech Stack</h3>
                    <div className="grid grid-cols-2 gap-2 text-gray-700">
                        {[
                            'HTML5', 'CSS3', 'JavaScript (ES6+)',
                            'TypeScript', 'React.js', 'Next.js',
                            'TailwindCSS', 'Bootstrap', 'Ant Design', 'hero ui',
                            'Redux', 'RTK Query', 'React Hooks',
                            'Node.js', 'Express.js', 'MongoDB',
                            'Mongoose', 'Firebase Auth', 'JWT',
                            'NextAuth.js', 'Git', 'Photoshop'
                        ].map(skill => (
                            <span key={skill} className="px-2 py-1 bg-white rounded shadow-sm text-sm">{skill}</span>
                        ))}
                    </div>
                </div>
            </div>

            <p className="mt-6 text-lg text-gray-700">
                With a business background (BBA & MBA), I bring strong skills in strategy, planning, and communication to every development project. Whether building from scratch or collaborating in a team, I deliver secure, maintainable, and performance-driven solutions.</p>

            <div className="mt-8 text-center">
                <a
                    target='_blank'
                    href="mailto:sumonpaul.web@gmail.com"
                    className="mx-2 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                    📧 Email Me
                </a>
                <a
                    target='_blank'
                    href="https://wa.me/8801628883217"
                    className="mx-2 px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition"
                >
                    📱 WhatsApp
                </a>
            </div>
        </div>
    </section>
);

export default About;
