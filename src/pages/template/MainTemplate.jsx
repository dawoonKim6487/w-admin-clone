import { Header } from 'components'
import React from 'react'

const MainTemplate = ({ children }) => {
    return (
        <div className="wrap h-full">
            <Header />
            {children}
        </div>
    )
}

export default MainTemplate;