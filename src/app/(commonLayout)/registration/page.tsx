/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import Container from "@/components/Container"
import MyForm from "@/components/form/MyForm"
import MyInput from "@/components/form/MyInput"
import { MyTextArea } from "@/components/form/MyTextArea"
import { registerValidation } from "@/validation/registerValidation"
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from "@nextui-org/react"
import { useState } from "react"
import { FieldValues, SubmitHandler } from "react-hook-form"

const Registration = () => {
    const [image, setImage] = useState()
    const handleSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data)
    }
    return (
        <Container classname="py-20">
            <div className="max-w-[650px] border mx-auto p-2 md:p-4 shadow rounded-lg bg-white">
                <h1 className="font-roboto_slab text-center md:text-xl lg:text-2xl font-semibold">Registration</h1>
                <div className="mt-10">
                    <MyForm onSubmit={handleSubmit} resolver={zodResolver(registerValidation)}>
                        <div className="space-y-5">
                            <div className="flex gap-2 flex-col sm:flex-row">
                                <MyInput name="name" label="Name" size="sm" />
                                <MyInput name="email" label="Email" type="email" size="sm" />
                            </div>

                            <div className="flex gap-2 flex-col sm:flex-row">
                                <MyInput name="phone" label="Phone" type="number" size="sm" />
                                <MyInput name="password" label="Password" size="sm" />
                            </div>
                            <div className="flex gap-3 border px-3 py-2 rounded-md bg-indigo-50">
                                <label htmlFor="" className="whitespace-nowrap">Your iamge</label>
                                <input onChange={(e: any) => setImage(e?.target?.files[0])} type="file" className="w-full cursor-pointer" />
                            </div>
                            <MyTextArea name="address" label="Address" />
                        </div>
                        <div>
                            <Button type="submit" className="mt-5 bg-primary text-white md:px-10 disabled:bg-gray-400" isDisabled={!image}>Register</Button>
                        </div>
                    </MyForm>
                </div>
            </div>
        </Container>
    )
}

export default Registration