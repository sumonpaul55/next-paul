import React, { ReactNode } from 'react'

const Container = ({ children, classname }: { classname?: string; children: ReactNode }) => {
    return (
        <section className={`${classname}`}>
            <div className={`container mx-auto`}>
                {children}
            </div>
        </section>
    )
}

export default Container