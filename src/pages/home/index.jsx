import { BoardSubnav, Board, BoardTit } from 'components';
import MainTemplate from 'pages/template/MainTemplate';
import React from 'react'
import { useParams } from "react-router-dom";

// const title = title => {
//     switch (title) {
//         case 'faq':
//             return '자주 묻는 질문'
//         case 'qna':
//             return '묻고 답하기'
//         case 'support':
//             return '공지사항'
//         default:
//             return '게시판'
//     }
// };

const Home = () => {
    const { mode } = useParams()

    return (
        <MainTemplate>
            <BoardSubnav />
            <div className='px-20 py-10 flex flex-col gap-5'>
                <BoardTit tit={mode} />
                <Board tit={mode}>{mode}</Board>
            </div>

        </MainTemplate>
    )
}

export default Home;