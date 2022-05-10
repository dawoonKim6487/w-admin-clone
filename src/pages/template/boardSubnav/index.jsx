import React from 'react'
import { SubHeader, SubHeaderNav } from 'components';

const homeRoute = [
    { id: 0, name: '자주하는 질문', path: '/board/faq' },
    { id: 1, name: '묻고 답하기', path: '/board/qna' },
    { id: 2, name: '공지사항', path: '/board/support' },
]

const proRoute = [
    { id: 0, name: '우성 홈페이지2', path: '/' },
    { id: 1, name: '사용자 게시판', path: '/' },
]


const subHead = () => {
    return (
        <SubHeader>
            <SubHeaderNav route={homeRoute}>홈페이지 게시판</SubHeaderNav>
            <SubHeaderNav route={proRoute}>Pro 게시판</SubHeaderNav>
        </SubHeader>
    )
}

export default subHead;