import { SubHeader, SubHeaderNav } from 'components';
import MainTemplate from 'pages/template/MainTemplate';
import React from 'react'
import { useParams } from "react-router-dom";

const homeRoute = [
    { id: 0, name: '자주하는 질문', path: '/board/faq' },
    { id: 1, name: '묻고 답하기', path: '/board/qna' },
    { id: 2, name: '공지사항', path: '/board/support' },
]

const proRoute = [
    { id: 0, name: '우성 홈페이지2', path: '/' },
    { id: 1, name: '사용자 게시판', path: '/' },
]

const Home = ({ children }) => {
    const { mode } = useParams()

    return (
        <MainTemplate>
            <SubHeader>
                <SubHeaderNav route={homeRoute}>홈페이지 사용자 게시판</SubHeaderNav>
                <SubHeaderNav route={proRoute}>Pro 사용자 게시판</SubHeaderNav>
            </SubHeader>
            {mode}
            {children}
        </MainTemplate>
    )
}

export default Home;