import React from 'react'
import { BoardSubnav, Board, BoardTit } from 'components';
import MainTemplate from 'pages/template/MainTemplate';
import { useParams } from "react-router-dom";

const Home = () => {
    const { mode } = useParams()

    return (
        <MainTemplate>
            <BoardSubnav />
            <div className='px-2 py-5 lg:px-20 lg:py-10 flex flex-col gap-1'>
                <BoardTit tit={mode} />
                <Board tit={mode}>{mode}</Board>
            </div>
        </MainTemplate>
    )
}

export default Home;