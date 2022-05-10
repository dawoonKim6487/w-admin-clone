import React, { useState, useEffect } from 'react';
import { BoardBody, BoardOption, TableRow, NormalBtn } from 'components';
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import axios from 'axios';




const Board = ({ tit }) => {
    const [orginData, setOrginData] = useState([]); // 처음 가져온 값 (재 호출 하면 안됨)
    const [board, setBoard] = useState([]); // 데이터 변환 (페이징, 검색)
    const [page, setPage] = useState(0);
    const [cate, setCate] = useState([]);
    const [activeCate, setActiveCate] = useState('전체');

    const dataFilter = (data, page) => {
        return data.filter((ele, index) => {
            return index < (page + 1) * 10 & index >= page * 10
        })
    }

    const setActive = (event) => {
        const cate = event.target.value;
        setActiveCate(cate);
        setPage(0);
        if (cate === '전체') {
            setBoard(dataFilter(orginData, 0));
        }
        else {
            setBoard(orginData.filter((ele) => {
                return ele.cate === cate
            }))
        }
    }

    const getCate = (data) => {
        // 카테고리 추출
        const set = new Set(data.map(ele => ele.cate))
        return [...set]
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
        setPage(0);
        setActiveCate('전체');

    }, [tit]);

    useEffect(() => {
        setBoard(dataFilter(orginData, page));
        setCate(getCate(orginData))
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
        <>
            <BoardOption options={cate} onChange={setActive} cate={activeCate} />
            {activeCate}
            <BoardBody>
                {board.map((ele, index) => <TableRow data={ele} key={index} index={index + (page * 10)} mode={tit} />)}
            </BoardBody>
            <div className="flex gap-2 justify-end">
                <NormalBtn onClick={minorPage}>
                    <AiFillCaretLeft size='18' />
                </NormalBtn>
                <NormalBtn onClick={addPage}>
                    <AiFillCaretRight size='18' />
                </NormalBtn>
            </div>
        </>
    )
}

export default Board;