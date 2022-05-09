import React, { useState } from 'react';
import { BoardTit, BoardBody, NextBtn, TableRow } from 'components';

const data = [
    { id: 0, cate: '분류', tit: '제목1', date: '2020-01-01', join: 0 },
    { id: 1, cate: '분류', tit: '제목2', date: '2020-01-01', join: 0 },
    { id: 2, cate: '분류', tit: '제목3', date: '2020-01-01', join: 0 },
    { id: 3, cate: '분류', tit: '제목3', date: '2020-01-01', join: 0 },
    { id: 4, cate: '분류', tit: '제목3', date: '2020-01-01', join: 0 },
    { id: 5, cate: '분류', tit: '제목3', date: '2020-01-01', join: 0 },
    { id: 6, cate: '분류', tit: '제목3', date: '2020-01-01', join: 0 },
    { id: 7, cate: '분류', tit: '제목3', date: '2020-01-01', join: 0 },
    { id: 8, cate: '분류', tit: '제목3', date: '2020-01-01', join: 0 },
    { id: 9, cate: '분류', tit: '제목3', date: '2020-01-01', join: 0 },
    { id: 10, cate: '분류', tit: '제목3', date: '2020-01-01', join: 0 },
    { id: 11, cate: '분류', tit: '제목3', date: '2020-01-01', join: 0 },
]

const Board = ({ tit }) => {

    const title = title => {
        switch (title) {
            case 'faq':
                return '자주 묻는 질문'
            case 'qna':
                return '묻고 답하기'
            case 'support':
                return '공지사항'
            default:
                return '게시판'
        }
    }

    const [page] = useState(0);

    const addPage = async () => {
        setBoard(data.filter((ele) => {
            return ele.id < (page + 1) * 10 & ele.id >= page * 10
        }))
    };
    const minorPage = () => {
        setBoard(data.filter((ele) => {
            return ele.id < (page + 1) * 10 & ele.id >= page * 10
        }))
    };

    const [board, setBoard] = useState(data.filter((ele) => {
        return ele.id < (page + 1) * 10 & ele.id >= page * 10
    }))



    return (
        <div className='px-20 py-10 flex flex-col gap-5 h-full'>
            <BoardTit>{title(tit)}</BoardTit>
            {page}
            <BoardBody data={data}>
                {board.map((ele) => <TableRow data={ele} key={ele.id} />)}
            </BoardBody>
            <NextBtn prev={minorPage} next={addPage} />
        </div>
    )
}

export default Board;