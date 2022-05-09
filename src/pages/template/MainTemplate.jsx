import { Header } from 'components'
import React from 'react'

const MainTemplate = ({ children }) => {
    return (
        <div className="wrap">
            <Header />
            {children}
        </div>
    )
}

export default MainTemplate;