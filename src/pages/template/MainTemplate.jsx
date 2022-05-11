import { Header } from 'components'
import React from 'react'

const MainTemplate = ({ children, subtit }) => {
    return (
        <div className="wrap h-screen flex flex-col">
            <Header />
            {subtit}
            <div className='px-2 py-5 lg:px-20 lg:py-10 flex flex-col gap-1 flex-1'>
                {children}
            </div>
        </div>
    )
}

export default MainTemplate;