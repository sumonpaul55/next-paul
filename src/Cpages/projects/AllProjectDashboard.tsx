'use client'

import Skeletons from '@/src/components/shared/Skeleton'
import { useGetProject } from '@/src/hooks/project.hooks'
import { TProjects } from '@/src/types'
import { getKeyValue, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsTrash } from 'react-icons/bs'
import { FaEdit } from 'react-icons/fa'


const AllProjectDashboard = () => {
    const { data, isLoading } = useGetProject()
    const allProject = data?.data;
    console.log(allProject)

    // handle delte project
    const handleDelete = (id: string) => {
        console.log(id)
    }
    // handle update project
    const handleUpdateProject = (id: string) => {
        console.log(id)
    }


    const rows: { key: number, liverLink: string, image: string, overview: string, name: string, technology: string }[] = allProject?.map((item: TProjects, idx: number) => {
        return {
            key: idx,
            liverLink: <Link target="_blank" href={item?.liveLink}>View Live</Link>,
            image: <Image src={item?.image} width={200} height={400} alt={item?.name} className='size-14 object-cover' />,
            overview: item?.overview,
            name: item?.name,
            technology: item?.technology,
            action: <div>
                <button onClick={() => handleDelete(item?._id)} className='p-2 hover:bg-red-500 hover:text-white text-xl rounded-full duration-400'>
                    <BsTrash />
                </button>
                <button onClick={() => handleUpdateProject(item?._id)} className='p-2 hover:bg-red-500 hover:text-white text-xl rounded-full duration-400'>
                    <FaEdit />
                </button>
            </div>
        }
    })

    const columns = [
        {
            key: "name",
            label: "NAME"
        },
        {
            key: "image",
            label: "IMAGE"
        },
        {
            key: "technology",
            label: "TECHNOLOGY"
        },
        {
            key: "liverLink",
            label: "LIVE URL"
        },
        {
            key: "action",
            label: "ACTION"
        }
    ]
    return (
        <div>
            {
                isLoading ? <Skeletons childBox={10} childClass='h-8' parentClasses='' /> :
                    <div>
                        <Table aria-label="Example table with dynamic content">
                            <TableHeader columns={columns}>
                                {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                            </TableHeader>
                            <TableBody items={rows}>
                                {(item) => (
                                    <TableRow key={item?.key}>
                                        {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </div>
            }
        </div>
    )
}

export default AllProjectDashboard