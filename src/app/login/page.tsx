/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import Container from "@/src/components/Container";
import MyForm from "@/src/components/form/MyForm";
import MyInput from "@/src/components/form/MyInput";
import LoadingBlur from "@/src/components/shared/LoadingBlur";
import { userLogin } from "@/src/hooks/auth.hooks";
import loginValidationSchema from "@/src/validation/loginvalidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";



const LoginPage = () => {
    const router = useRouter()
    const { mutate, isPending, isSuccess, isError } = userLogin();

    const redirect = useSearchParams()?.get("redirect")

    // const { setIsLoading } = useUser()
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const userData = { ...data }
        mutate(userData)
    }


    if (isError) {
        toast.error("Loggedin failed")
    }
    if (!isPending && isSuccess) {
        if (redirect) {
            router.push(redirect)
        } else {
            router.push("/")
        }
    }
    if (isPending) {
        return <LoadingBlur />
    }
    return (
        <>
            <Container classname="py-20">
                <div className='flex items-center justify-center w-full'>
                    <div className='md:w-[500px] w-full mx-auto p-4 md:p-7 border border-gray-300 rounded-2xl shadow-md'>
                        <h2 className="mb-10 text-center text-xl md:text-2xl font-semibold font-roboto_slab">Login</h2>
                        <MyForm onSubmit={onSubmit} resolver={zodResolver(loginValidationSchema)}>
                            <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
                                {/* <Input type="email" label="Email" name='email' /> */}
                                <MyInput type='email' name='email' label='Email' />
                                <MyInput type='password' name='password' label='Password' />

                                <Button type='submit'>Login</Button>
                            </div>
                        </MyForm>
                        <p className='py-3 text-sm'>Don&apos;t you have account <Link className='text-pink-600' href="/registration">Register</Link></p>
                    </div>
                </div>
            </Container>

        </>
    )
}

export default LoginPage