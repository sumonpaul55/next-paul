/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { ReactNode } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'


interface Iprops extends TFormConfig {
    children: ReactNode;
    onSubmit: SubmitHandler<any>;
}

interface TFormConfig {
    defaultValues?: Record<string, any>;
    resolver?: any
}
const MyForm = ({ children, onSubmit, defaultValues, resolver }: Iprops) => {

    const formConfig: TFormConfig = {};

    if (!!defaultValues) {
        formConfig["defaultValues"] = defaultValues;
    }
    if (!!resolver) {
        formConfig["resolver"] = resolver;
    }
    const methods = useForm(formConfig);
    // get the function from method
    const submitHandler = methods.handleSubmit;

    return (
        <FormProvider {...methods}>
            <form onSubmit={submitHandler(onSubmit)}>
                {children}
            </form>
        </FormProvider>
    )
}

export default MyForm