/* eslint-disable @typescript-eslint/no-explicit-any */
import ProjectDetails from '@/src/Cpages/projects/ProjectDetails';
import { getProjectById } from '@/src/services/projectService';
import React from 'react'

const PDetails = async ({ params }: any) => {
    const { projectDetails } = params;
    const { data } = await getProjectById(projectDetails)
    // console.log(data)
    return (
        <div>
            <ProjectDetails project={data} />
        </div>
    )
}

export default PDetails