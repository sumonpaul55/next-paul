/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
// pages/contact.js

import { useState } from 'react';
import { Input, Textarea, Button } from '@nextui-org/react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Handle form submission logic here
        // console.log(formData);
    };

    console.log(formData)

    return (
        <div className="flex flex-col items-center justify-center min-h-full bg-gray-100 p-4">
            <h1 className="text-4xl font-bold mb-6 text-center">Contact Me</h1>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <Input
                    name="name"
                    label="Name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mb-4"
                    isClearable
                />
                <Input
                    name="email"
                    label="Email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mb-4"
                    isClearable
                />
                <Textarea
                    name="message"
                    label="Message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="mb-4"
                    rows={4}
                />
                <Button type="submit" color="primary" className="w-full">
                    Send Message
                </Button>
            </form>
        </div>
    );
};

export default Contact;
