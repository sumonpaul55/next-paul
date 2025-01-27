"use client"
import { getClientMessage } from '@/src/hooks/auth.hooks'
type ClientMessage = {
    name: string;
    email: string;
    message: string;
    phone: string;
    createdAt: string;
};
export const ClientMessage = () => {
    const { data, isLoading } = getClientMessage()
    console.log(data)
    if (isLoading) {
        return <div className="text-center text-gray-500">Loading...</div>;
    }
    if (!data || data?.length === 0) {
        return <div className="text-center text-gray-500">No messages found.</div>;
    }

    return (
        <div className="max-w-3xl mx-auto mt-10">
            <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
                Client Messages
            </h1>
            <div className="space-y-6">
                {data.map((message: ClientMessage, index: number) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-lg p-6 border"
                    >
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">
                            Message {index + 1}
                        </h2>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <span className="font-semibold text-gray-700 w-28">Name:</span>
                                <span className="text-gray-800">{message?.name || "N/A"}</span>
                            </div>
                            <div className="flex items-center">
                                <span className="font-semibold text-gray-700 w-28">Email:</span>
                                <span className="text-gray-800">{message?.email || "N/A"}</span>
                            </div>
                            <div className="flex items-center">
                                <span className="font-semibold text-gray-700 w-28">Phone:</span>
                                <span className="text-gray-800">{message?.phone || "N/A"}</span>
                            </div>
                            <div className="flex items-center">
                                <span className="font-semibold text-gray-700 w-28">
                                    Message:
                                </span>
                                <span className="text-gray-800">{message?.message || "N/A"}</span>
                            </div>
                            <div className="flex items-center">
                                <span className="font-semibold text-gray-700 w-28">
                                    Created At:
                                </span>
                                <span className="text-gray-800">
                                    {message?.createdAt
                                        ? new Date(message.createdAt).toLocaleString()
                                        : "N/A"}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ClientMessage