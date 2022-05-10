import { BoardSubnav, BoardTit } from 'components';
import MainTemplate from 'pages/template/MainTemplate';
import React from 'react'
import { useParams } from "react-router-dom";


const Zoom = ({ mode }) => {
    const { idx } = useParams();

    return (
        <MainTemplate>
            <BoardSubnav />
            <div className='px-20 py-10 flex flex-col gap-5'>
                <BoardTit tit={mode} />
                {idx}
                {mode}
            </div>
        </MainTemplate>
    )
}

export default Zoom;