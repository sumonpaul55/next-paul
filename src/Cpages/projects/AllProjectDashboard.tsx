'use client'

import Skeletons from '@/src/components/shared/Skeleton'
import { useGetProject } from '@/src/hooks/project.hooks'
import { TProjects } from '@/src/types'
import { getKeyValue, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const AllProjectDashboard = () => {
    const { data, isLoading } = useGetProject()
    const allProject = data?.data;
    console.log(allProject)


    const rows: { key: number, liverLink: string, image: string, overview: string, name: string, technology: string }[] = allProject?.map((item: TProjects, idx: number) => {
        return {
            key: idx,
            liverLink: <Link target="_blank" href={item?.liveLink}>View Live</Link>,
            image: <Image src={item?.image} width={200} height={200} alt={item?.name} className='size-20 object-cover' />,
            overview: item?.overview,
            name: item?.name,
            technology: item?.technology,
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