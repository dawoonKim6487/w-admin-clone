import React from 'react'
import { BoardSubnav, Board, BoardTit } from 'components';
import MainTemplate from 'pages/template/MainTemplate';
import { useParams } from "react-router-dom";

const Home = () => {
    const { mode } = useParams()
    return (
        <MainTemplate subtit={
            <BoardSubnav />
        }>
            <BoardTit tit={mode} />
            <Board tit={mode} />
        </MainTemplate>
    )
}

export default Home;