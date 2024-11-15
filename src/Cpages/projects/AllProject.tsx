"use client"
import LoadingSpinner from '@/src/components/shared/LoadingSpinner'
import ProjectCard from '@/src/components/shared/ProjectsCard'
import { useGetProject } from '@/src/hooks/project.hooks'
import { TProjects } from '@/src/types'
import React from 'react'

const AllProject = () => {
    const { data, isLoading } = useGetProject()
    return (
        <div className='p-3 md:p-5 bg-gray-200'>
            {
                isLoading ? <LoadingSpinner /> :
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
                        {
                            data?.data?.map((item: TProjects, idx: number) => (
                                <div key={idx} className='shadow'>
                                    <ProjectCard _id={item?._id} image={item?.image} liveLink={item?.liveLink} name={item?.name} technology={item?.technology} />

                                </div>))
                        }
                    </div>
            }
        </div>
    )
}

export default AllProject