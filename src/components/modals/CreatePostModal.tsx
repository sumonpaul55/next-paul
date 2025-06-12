"use client"
import { Button, } from "@nextui-org/react";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef } from 'react';
import JoditEditor from "jodit-react";
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { Select, SelectItem } from '@nextui-org/react';
import { zodResolver } from '@hookform/resolvers/zod';
// import { toast } from 'sonner';
// import { useRouter } from 'next/navigation';
import { useUser } from "@/src/context/user.provider";
import MyForm from "../form/MyForm";
import MyInput from "../form/MyInput";
import { createApost } from "@/src/hooks/post.hook";
import { postValidation } from "@/src/validation/validation";
import LoadingBlur from "../shared/LoadingBlur";

export default function CreateAPost() {
    // const router = useRouter()
    const editor = useRef(null)
    const [content, setContent] = useState('');
    const [category, setCategory] = useState()
    const { user } = useUser()
    const { mutate, isPending, } = createApost()

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

        const postData = {
            ...data, post: content, category, userId: user?._id,
        }
        mutate(postData)

    }

    return (
        <>
            {
                isPending ? <LoadingBlur /> :
                    <div className='pb-10 px-2 md:px-0'>
                        <MyForm onSubmit={handleSubmit} resolver={zodResolver(postValidation)}>
                            <MyInput label='Post Title' name="title" className='mb-0' size="sm" />
                            <div className='flex md:gap-2 w-full justify-between items-center flex-col md:flex-row gap-4 mb-2 mt-1 '>
                                <div className="flex min-w-[120px] md:min-w-[500px] flex-wrap md:flex-nowrap gap-4 md:my-5">
                                    <Select
                                        label="Select an animal"
                                        size='sm'
                                        className="max-w-xs"
                                        onChange={(e: any) => setCategory(e.target.value)}>
                                        <SelectItem key="javascript" value="javascript">javascript</SelectItem>
                                        <SelectItem key="react" value="react">React</SelectItem>
                                        <SelectItem key="next" value="next" className="capitalize">next</SelectItem>
                                        <SelectItem key="mongodb" value="mongodb" className="capitalize">mongodb</SelectItem>
                                        <SelectItem key="express" value="express" className="capitalize">express</SelectItem>
                                        <SelectItem key="css" value="css" className="capitalize">css</SelectItem>
                                        <SelectItem key="tailwind" value="tailwind" className="capitalize">tailwind</SelectItem>
                                    </Select>
                                </div>
                            </div>
                            <div className="overflow-y-scroll max-h-[600px]">
                                <JoditEditor
                                    ref={editor}
                                    value={content}
                                    config={config as any}// tabIndex of textarea
                                    onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                                // onChange={newContent => { console.log(newContent) }}
                                />
                            </div>
                            <Button type='submit' className='mt-4 bg-secondary text-white md:px-20'>Submit Post</Button>
                        </MyForm>
                    </div>
            }

        </>
    );
}