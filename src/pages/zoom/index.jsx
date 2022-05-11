import { BoardSubnav, BoardTit } from 'components';
import MainTemplate from 'pages/template/MainTemplate';
import React from 'react'
import { useParams } from "react-router-dom";

const Zoom = ({ mode }) => {
    const { idx } = useParams();

    return (
        <MainTemplate subtit={
            <BoardSubnav />
        }>
            <BoardTit tit={mode} />
            {idx}
            {mode}
        </MainTemplate>
    )
}

export default Zoom;