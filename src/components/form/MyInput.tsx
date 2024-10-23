"use client"

import { TINput } from '@/src/types';
import { Input } from '@nextui-org/react'
import React from 'react'
import { useFormContext } from 'react-hook-form';

interface IINputs extends TINput {
    defaultValue?: string;
    description?: string
}

const MyInput = ({ variant = "bordered", label, className, size = "md", required = true, type = "text", name, defaultValue, description }: IINputs) => {
    const { register, formState: { errors } } = useFormContext()

    return (
        <Input
            {...register(name)}
            type={type}
            label={label}
            defaultValue={defaultValue}
            description={description}
            className={className}
            variant={variant}
            size={size}
            isRequired={required}
            isInvalid={!!errors[name]}
            errorMessage={errors[name] ? (errors[name].message as string) : ''}
        />
    )
}

export default MyInput