import React, { useState, useEffect } from 'react';
import { BoardTit, BoardBody, TableRow, NormalBtn } from 'components';
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import axios from 'axios';

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
    const [orginData, setOrginData] = useState([]); // 처음 가져온 값 (재 호출 하면 안됨)
    const [board, setBoard] = useState([]); // 데이터 변환 (페이징, 검색)
    const [page, setPage] = useState(0);

    const dataFilter = (data, page) => {
        return data.filter((ele, index) => {
            return index < (page + 1) * 10 & index >= page * 10
        })
    }
    const URL = (tit) => {
        switch (tit) {
            case 'faq':
                return 'https://www.wssw.kr/admin/wsapi/faq';
            case 'qna':
                return 'https://www.wssw.kr/admin/wsapi/qna';
            case 'support':
                return 'https://www.wssw.kr/admin/wsapi/support/allList';
            default:
                return 'https://www.wssw.kr/admin/wsapi/faq';
        }
    }
    const getData = (URL) => {
        axios.get(URL ? URL : 'https://www.wssw.kr/admin/wsapi/faq').then((res) => {
            setOrginData(res.data.result)
        })
    }

    useEffect(() => {
        // tit 가 변하면 API 다시 호출
        getData(URL(tit));
        return (() => {
            console.log(tit, '렌더링 전')
        })
    }, [tit]);

    useEffect(() => {
        setBoard(dataFilter(orginData, page));
    }, [orginData])

    const addPage = () => {
        if (board.length >= 10) {
            const pageCtrl = page + 1 // 읽기 전용
            setBoard(dataFilter(orginData, pageCtrl))
            setPage(pageCtrl)
        }
    };

    const minorPage = () => {
        if (page > 0) {
            const pageCtrl = page - 1 // 읽기 전용
            setBoard(dataFilter(orginData, pageCtrl))
            setPage(pageCtrl)
        }
    };

    return (
        <div className='px-20 py-10 flex flex-col gap-5'>
            <BoardTit>{title(tit)}</BoardTit>
            <BoardBody>
                {board.map((ele, index) => <TableRow data={ele} key={index} index={index + (page * 10)} />)}
            </BoardBody>
            <div className="flex gap-2 justify-end">
                <NormalBtn onClick={minorPage}>
                    <AiFillCaretLeft size='18' />
                </NormalBtn>
                <NormalBtn onClick={addPage}>
                    <AiFillCaretRight size='18' />
                </NormalBtn>
            </div>
        </div>
    )
}

export default Board;