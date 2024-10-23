"use client"
import { UserProvider } from "@/src/context/user.provider";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { ReactNode } from 'react'
import { Toaster } from "sonner";

const Provider = ({ children }: { children: ReactNode }) => {
    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <Toaster />
            <UserProvider>
                <NextUIProvider>
                    {children}
                </NextUIProvider>
            </UserProvider>
        </QueryClientProvider>
    )
}

export default Provider