
import dynamic from 'next/dynamic'
import React from 'react'

const AddProjects = () => {
    const AddProjectForm = dynamic(() => import('@/src/Cpages/dashboard/post/AddProjectForm'), {
        ssr: false
    })
    return (
        <div className='p-4 md:p-10'>
            <AddProjectForm page='add' />
        </div>
    )
}

export default AddProjects