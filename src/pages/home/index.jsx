import React from 'react'
import MainTemplate from 'pages/template/MainTemplate';
import { Login } from 'components'

const Home = () => {
    return (
        <MainTemplate>
            <div className="home body h-full flex justify-center items-center">
                <Login></Login>
            </div>
        </MainTemplate>
    )
}

export default Home;