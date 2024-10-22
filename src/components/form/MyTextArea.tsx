/* eslint-disable @typescript-eslint/no-empty-object-type */
"use client"

import { TINput } from '@/types';
import { Textarea } from '@nextui-org/input'
import React from 'react'
import { useFormContext } from 'react-hook-form';

interface TInputProps extends TINput { }

export const MyTextArea = ({ variant = "bordered", size = "sm", required = true, type = "text", name, label, className }: TInputProps) => {

    const { register, formState: { errors } } = useFormContext();


    return (

        <Textarea  {...register(name)} className={className && className
        } variant={variant} size={size} isRequired={required} label={label} type={type} errorMessage={errors[name] ? (errors[name].message as string) : ''} isInvalid={!!errors[name]} />
    )
}
