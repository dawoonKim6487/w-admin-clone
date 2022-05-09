import React from 'react';
import List from './List';
// import { classnames as twc } from 'tailwindcss-classnames';
// import { flexStyle } from 'styles'


const HeaderNav = () => {
    return (
        <ul className='flex gap-8'>
            <List path='/'>게시판</List>
            <List path='/page1'>농업계 소식</List>
            <List path='/page2'>정보동영상</List>
            <List path='/page3'>농자재 광고</List>
            <List path='/page4'>농진청 전송 관리</List>
            <List path='/page5'>접속 날짜 조회</List>
            <List path='/page6'>기타</List>
        </ul>
    )
}

export default HeaderNav;