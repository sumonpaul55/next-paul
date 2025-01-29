"use client"
import Skeletons from '@/src/components/shared/Skeleton';
import { getClientMessage } from '@/src/hooks/auth.hooks'
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react';
import { ReactNode } from 'react';



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
        return <Skeletons childBox={4} parentClasses="" childClass='h-10' />
    }
    // if (!data || data?.length === 0) {
    //     return <div className="text-center text-gray-500">No messages found.</div>;
    // }

    return (
        <div className="mx-auto p-2">
            <h1 className="md:text-2xl font-bold text-gray-800 text-center mb-6">
                Client Messages
            </h1>
            <div className="overflow-x-auto">
                <table className="table-auto w-full bg-white text-black shadow-md rounded-lg border border-gray-300">
                    <thead className="bg-gray-100 border-b">
                        <tr>
                            <th className="px-4 py-2 text-left border text-gray-800 font-semibold">No</th>
                            <th className="px-4 py-2 text-left border text-gray-800 font-semibold">Name</th>
                            <th className="px-4 py-2 text-left border text-gray-800 font-semibold">Email</th>
                            <th className="px-4 py-2 text-left border text-gray-800 font-semibold">Phone</th>
                            <th className="px-4 py-2 text-left border text-gray-800 font-semibold">Message</th>
                            <th className="px-4 py-2 text-left border text-gray-800 font-semibold">Created At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((message: ClientMessage, index: number) => (
                            <tr
                                key={index}
                                className={`border-b ${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
                            >
                                <td className="px-4 py-2 text-gray-800">{index + 1}</td>
                                <td className="px-4 py-2 text-gray-800">{message?.name || "N/A"}</td>
                                <td className="px-4 py-2 text-gray-800">{message?.email || "N/A"}</td>
                                <td className="px-4 py-2 text-gray-800">{message?.phone || "N/A"}</td>
                                <td className="px-4 py-2 text-gray-800">
                                    <ShowMessage message={message?.message} name={message?.name}>
                                        {message?.message.slice(0, 20) || "N/A"}
                                    </ShowMessage>
                                </td>
                                <td className="px-4 py-2 text-gray-800">
                                    {message?.createdAt
                                        ? new Date(message.createdAt).toLocaleString()
                                        : "N/A"}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div >
    );
}

export default ClientMessage

const ShowMessage = ({ children, message, name }: { children: ReactNode, message: string, name: string }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button onPress={onOpen}>{children}</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 capitalize">{name}</ModalHeader>
                            <ModalBody>
                                <p>{message}</p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
