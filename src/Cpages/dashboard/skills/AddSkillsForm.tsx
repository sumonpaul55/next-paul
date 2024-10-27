/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import MyForm from '@/src/components/form/MyForm'
import MyInput from '@/src/components/form/MyInput'
import { MyTextArea } from '@/src/components/form/MyTextArea'
import LoadingBlur from '@/src/components/shared/LoadingBlur'
import { useAddSkills } from '@/src/hooks/skills.hook'
import { SkillsValidation } from '@/src/validation/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@nextui-org/react'
import React, { useState } from 'react'
import { FieldValues, SubmitHandler } from 'react-hook-form'

const AddSkillsForm = () => {
    const { mutate: addSkills, isPending } = useAddSkills();
    // const { user } = useUser();
    const [image, setImage] = useState()

    const handleSubmit: SubmitHandler<FieldValues> = (data) => {
        if (image) {
            const formData = new FormData();
            const allData = { ...data }
            formData.append("data", JSON.stringify(allData))
            formData.append("image", image)
            addSkills(formData)
        }
    }

    if (isPending) {
        return <LoadingBlur />
    }
    return (

        <div>
            <h2 className='font-roboto_slab font-semibold text-lg md:text-xl lg:text-2xl'>Add a Skills</h2>
            <div className='mt-4'>
                <MyForm onSubmit={handleSubmit} resolver={zodResolver(SkillsValidation)}>
                    <div className="space-y-5">
                        <div className="flex gap-2 flex-col sm:flex-row">
                            <MyInput name="name" label="Skills name" size="sm" />
                            {/* <MyInput name="email" label="use" type="email" size="sm" /> */}
                        </div>

                        <div className="flex gap-3 border px-3 py-2 rounded-md bg-indigo-50">
                            <label htmlFor="" className="whitespace-nowrap">Skills iamge (120*120)</label>
                            <input onChange={(e: any) => setImage(e?.target?.files[0])} type="file" className="w-full cursor-pointer" />
                        </div>
                        <MyTextArea name="description" label="Description" />
                    </div>
                    <div>
                        <Button type="submit" className="mt-5 bg-primary text-white md:px-10 disabled:bg-gray-400" isDisabled={!image}>Register</Button>
                    </div>
                </MyForm>
            </div>
        </div>
    )
}

export default AddSkillsForm