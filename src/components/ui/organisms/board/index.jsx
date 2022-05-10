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
};
const Board = ({ tit }) => {
    const dataFilter = (data, page) => {
        return data.filter((ele) => {
            return ele.id < (page + 1) * 10 & ele.id >= page * 10
        })
    }

    const [page, setPage] = useState(0);
    const [board, setBoard] = useState(dataFilter(data, page));

    const addPage = () => {
        if (board.length >= 10) {
            const pageCtrl = page + 1
            setBoard(dataFilter(data, pageCtrl))
            setPage(pageCtrl)
        }
    };
    const minorPage = () => {
        if (page > 0) {
            const pageCtrl = page - 1
            setBoard(dataFilter(data, pageCtrl))
            setPage(pageCtrl)
        }
    };

    return (
        <div className='px-20 py-10 flex flex-col gap-5 h-full'>
            <BoardTit>{title(tit)}</BoardTit>
            <BoardBody data={data}>
                {board.map((ele) => <TableRow data={ele} key={ele.id} />)}
            </BoardBody>
            <NextBtn prev={minorPage} next={addPage} />
        </div>
    )
}

export default Board;