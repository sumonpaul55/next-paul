"use client"
// components/About.tsx
import Image from 'next/image';
import React from 'react';
import sumon from "../../../public/img/paul1.jpg"
const About: React.FC = () => (
    <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-20">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12">About Me</h2>
            <div className="flex-1 sm:pr-10 text-justify">
                {/* Image */}
                <div className="sm:max-w-[500px] float-left mr-10 block mb-3">
                    <Image
                        alt="Sumon Paul"
                        src={sumon}
                        width={600}
                        height={400}
                        className="w-[400px] pointer-events-none"
                    />
                </div>

                <div>
                    {/* Introduction */}
                    <p className="text-sm md:text-lg text-gray-900 mb-4">
                        I&apos;m <strong className="text-black">Sumon Chandra Paul</strong>, a confident and results-driven <strong className="text-black">MERN Stack Developer</strong> with a strong focus on <strong className="text-black">Front-End Development</strong> using <strong className="text-black">Next.js</strong> and <strong className="text-black">TypeScript</strong>. I have over <strong className="text-black">2 years of hands-on experience</strong> delivering high-performance, user-centric web applications.
                    </p>

                    {/* Frontend Focus */}
                    <p className="text-sm md:text-lg text-gray-700 mb-4">
                        I specialize in crafting responsive and scalable front-end architectures using <strong className="text-black">React.js</strong>, <strong className="text-black">Next.js</strong>, and <strong className="text-black">TypeScript</strong>. With advanced proficiency in <strong className="text-black">Redux Toolkit (RTK Query)</strong>, <strong className="text-black">React Context API</strong>, and <strong className="text-black">React Hooks</strong>, I build maintainable and efficient state management solutions that power modern interfaces.
                    </p>

                    {/* UI/UX & Styling */}
                    <p className="text-sm md:text-lg text-gray-700 mb-4">
                        I bring designs to life using <strong className="text-black">TailwindCSS</strong>, <strong className="text-black">Bootstrap</strong>, <strong className="text-black">Ant Design</strong>,<strong className="text-black">Hero Ui</strong> and so more required packages, focusing on accessibility, responsiveness, and visual consistency. Every component I build is user-centered, visually refined, and performance-optimized.
                    </p>

                    {/* Backend Skills */}
                    <p className="text-sm md:text-lg text-gray-700 mb-4">
                        On the back end, I&apos;m proficient with <strong className="text-black">Node.js</strong>, <strong className="text-black">Express.js</strong>, <strong className="text-black">MongoDB</strong>, and <strong className="text-black">Mongoose</strong>. I design scalable APIs, implement secure authentication and authorization systems (JWT, OAuth), and follow RESTful best practices to ensure performance and stability.
                    </p>

                    {/* Security & Dev Best Practices */}
                    <p className="text-sm md:text-lg text-gray-700 mb-4">
                        I prioritize security and reliability by implementing input validation, error handling, environment variable management, and secure deployment techniques. I also follow coding best practices like modular architecture, Git version control, and performance profiling to ensure my projects are production-ready.
                    </p>

                    {/* Additional Tools */}
                    <p className="text-sm md:text-lg text-gray-700 mb-4">
                        I’m experienced with essential development tools like <strong className="text-black">Postman</strong>, <strong className="text-black">VS Code</strong>, <strong className="text-black">Figma</strong>, <strong className="text-black">ESLint/Prettier</strong>, and <strong className="text-black">GitHub</strong>. I also use tools like <strong className="text-black">Zod</strong> and <strong className="text-black">Yup</strong> for schema validation and <strong className="text-black">dotenv</strong> for configuration management.
                    </p>

                    {/* Education */}
                    <p className="text-sm md:text-lg text-gray-700">
                        I hold both a <strong className="text-black">Bachelor&apos;s</strong> and <strong className="text-black">Master&apos;s degree in Business Administration (BBA & MBA)</strong>, which enhances my ability to communicate effectively, think strategically, and manage projects with a business-first mindset — adding value beyond code.
                    </p>
                </div>

            </div>



            <div className="flex clear-left mt-20 flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                    <h3 className="text-2xl font-semibold mb-2">What I Do</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm md:text-base">
                        <li>📱 Build responsive, high-performance front-end user interfaces</li>
                        <li>🔐 Implement secure authentication flows using Firebase Auth, JWT & NextAuth.js</li>
                        <li>📦 Manage state and data efficiently with Redux & RTK Query</li>
                        <li>🎨 Design pixel-perfect UI using TailwindCSS, Bootstrap, and Ant Design</li>
                        <li>🧩 Convert Figma designs to fully responsive React/Next.js applications</li>
                        <li>🛒 Develop scalable e-commerce platforms with seamless shopping experiences</li>
                        <li>🛠️ Create Point of Sale (POS) systems with real-time inventory management</li>
                        <li>🤝 Build customer support and ticketing systems for effective communication</li>
                        <li>🔄 Integrate RESTful APIs and GraphQL for robust backend connectivity</li>
                        <li>⚙️ Optimize web app performance with lazy loading, caching, and code splitting</li>
                        <li>📊 Build admin dashboards featuring real-time analytics and reporting</li>
                        <li>🧠 Debug and solve complex issues in existing projects to improve stability and performance</li>
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

            <p className="mt-6 text-sm md:text-base lg:text-lg text-gray-700">
                With a business background (BBA & MBA), I bring strong skills in strategy, planning, and communication to every development project. Whether building from scratch or collaborating in a team, I deliver secure, maintainable, and performance-driven solutions.</p>

            <div className="mt-8 text-center flex gap-4">
                <a
                    target='_blank'
                    href="mailto:sumonpaul.web@gmail.com"
                    className="px-3 md:px-6 py-2 md:py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                    📧 Email Me
                </a>
                <a
                    target='_blank'
                    href="https://wa.me/8801628883217"
                    className="px-3 md:px-6 py-2 md:py-3 bg-green-600 text-white rounded hover:bg-green-700 transition"
                >
                    📱 WhatsApp
                </a>
            </div>
        </div>
    </section>
);

export default About;
