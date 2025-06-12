
import DashBoardManu from '@/src/components/shared/DashBoardMane'
import LoadingDoor from '@/src/components/shared/LoadinDoor'
import Link from 'next/link'
import { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <main>
            <LoadingDoor />
            <div className='p-2'>
                <div className='flex justify-between bg-gray-200 mb-3 p-3'>
                    <Link href={"/dashboard"} className='text-primary font-semibold'>
                        Admin Dashboard
                    </Link>
                    <DashBoardManu />
                </div>
                {children}
            </div>
        </main>
    )
}

export default layout