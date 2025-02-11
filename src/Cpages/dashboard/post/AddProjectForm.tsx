/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import { Button, } from "@nextui-org/react";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef } from 'react';
import JoditEditor from "jodit-react";
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import LoadingBlur from "@/src/components/shared/LoadingBlur";
import MyForm from "@/src/components/form/MyForm";
import MyInput from "@/src/components/form/MyInput";
import { projectDatavalidation, updateProjectDatavalidation } from "@/src/validation/validation";
import { useAddProjects } from "@/src/hooks/project.hooks";

export default function AddProjectForm({ page, item }: { page: string; item?: any }) {
    // const router = useRouter()
    const editor = useRef(null)
    const [content, setContent] = useState('');
    const { mutate, isPending, } = useAddProjects()
    const [image, setImage] = useState()
    const config = {
        loadExternalConfig: false,
        readonly: false, // all options from https://xdsoft.net/jodit/docs/,
        defaultActionOnPaste: 'insert_only', // Keep the formatting intact on paste
        askBeforePasteHTML: false,
        uploader: {
            url: 'https://xdsoft.net/jodit/finder/?action=fileUpload'
        },
        filebrowser: {
            ajax: {
                url: 'https://xdsoft.net/jodit/finder/'
            },
            height: 450,
        }
    }
    const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
        const formData = new FormData()
        const projectData = {
            ...data, overview: content
        }
        if (image) {
            formData.append("data", JSON.stringify(projectData))
            formData.append("image", image)
            mutate(formData)
        }

    }

    return (
        <>
            {
                isPending ? <LoadingBlur /> :
                    <div className='pb-10 px-2 md:px-0'>
                        <MyForm defaultValues={page === "edit" && item} onSubmit={handleSubmit} resolver={page !== "edit" ? zodResolver(projectDatavalidation) : zodResolver(updateProjectDatavalidation)}>
                            <div className="flex gap-4 items-center mb-3 flex-col sm:flex-row">
                                <MyInput label='Project Name' name="name" className='mb-0' size="sm" />
                                <MyInput label="Technology" name="technology" placeholder="Tech1, tech2, tech3" size="sm" />
                            </div>
                            <div className="flex gap-4 items-center mb-3 flex-col sm:flex-row">
                                <div className="flex gap-3 border px-3 py-2 rounded-md bg-indigo-50 flex-1">
                                    <label htmlFor="iamge" className="whitespace-nowrap">Project Screen shot</label>
                                    <input id="iamge" onChange={(e: any) => setImage(e?.target?.files[0])} type="file" className="w-full cursor-pointer" />
                                </div>
                                <MyInput label='Live link' name="liveLink" className='mb-0 flex-1' size="sm" />
                            </div>
                            <div className="">
                                <JoditEditor
                                    ref={editor}
                                    value={content}
                                    config={config as any}// tabIndex of textarea
                                    onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                                // onChange={newContent => { console.log(newContent) }}
                                />
                            </div>
                            <Button type='submit' className='mt-4 bg-secondary text-white md:px-20' isDisabled={!image}>Submit Project</Button>
                        </MyForm>
                    </div>
            }

        </>
    );
}