import React, { ReactNode } from 'react'

const Container = ({ children, classname }: { classname?: string; children: ReactNode }) => {
    return (
        <section className={`${classname} px-4 md:px-8`}>
            <div className={`container mx-auto lg:max-w-[1150] xl:max-w-[1300px]`}>
                {children}
            </div>
        </section>
    )
}

export default Container