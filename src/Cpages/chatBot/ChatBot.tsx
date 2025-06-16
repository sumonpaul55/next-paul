/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useRef, useState } from 'react';
import { AiOutlineMessage, AiOutlineClose } from 'react-icons/ai';


const geminiapiLink = `https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key=AIzaSyBXpXLHDtbXByQNqx7tSpMxarBUK8ktulQ`
const ChatBot = () => {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState<{ sender: 'user' | 'bot'; text: string }[] | any>([{ sender: "bot", text: "How Can I help you?" }]);
    const [input, setInput] = useState('');
    const toggleChat = () => setOpen(!open);
    const endRef = useRef<HTMLDivElement | null>(null);

    const handleSend = () => {
        setInput('');
        if (!input.trim()) return;
        const userMessage = { sender: 'user', text: input };
        const botReply = { sender: 'bot', text: generateReply(input) };
        setMessages((prev: any) => [...prev, userMessage, botReply]);
    };

    const generateReply = async (message: string) => {
        const quiestions = [
            {
                "parts": [
                    {
                        "text": `${message}`
                    }
                ]
            }
        ]
        const replyData = await fetch(geminiapiLink, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                // Your request body here (if needed)
                "contents": quiestions
            }),
        });
        const data = await replyData.json()
        const aiReply = data?.candidates[0]?.content?.parts[0]?.text;
        return aiReply
    };

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 sm:left-[97%] sm:-translate-x-full z-50">
            {open && (
                <div className="w-80 h-[430px] bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col">
                    <div className="p-2 border-b border-gray-200 flex justify-between items-center bg-gray-100 rounded-t-lg">
                        <h2 className="font-semibold text-gray-800">Chat with Me</h2>
                        <button onClick={toggleChat}>
                            <AiOutlineClose className="text-xl text-gray-600" />
                        </button>
                    </div>
                    <div className="flex-1 overflow-y-auto p-3 text-sm space-y-2">
                        {messages.map((msg: { sender: string; text: string }, i: number) => (
                            <div
                                key={i}
                                className={`p-2 rounded-md max-w-[80%] ${msg.sender === 'user'
                                    ? 'bg-blue-500 text-white ml-auto'
                                    : 'bg-gray-200 text-gray-800 mr-auto'
                                    }`}
                            >
                                {typeof msg.text === 'string' ? msg.text : <>{msg.text}</>}
                            </div>
                        ))}
                        <div ref={endRef} />
                    </div>

                    <div className="p-2 border-t border-gray-200">
                        <div className="flex">
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Type a message..."
                                className="flex-1 px-3 py-2 border rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-400"
                            />
                            <button
                                onClick={handleSend}
                                className="bg-blue-500 text-white px-4 rounded-r-md hover:bg-blue-600 transition"
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {!open && (
                <button
                    onClick={toggleChat}
                    className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
                >
                    <AiOutlineMessage className="text-2xl" />
                </button>
            )}
        </div>
    );
};

export default ChatBot;
