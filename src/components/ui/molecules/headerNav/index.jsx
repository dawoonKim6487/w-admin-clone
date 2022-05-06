import React from 'react';
import List from './List';


const HeaderNav = () => {
    return (
        <ul className='flex gap-10'>
            <List>게시판</List>
            <List>농업계 소식</List>
            <List>정보동영상</List>
            <List>농자재 광고</List>
            <List>농진청 전송 관리</List>
            <List>접속 날짜 조회</List>
        </ul>
    )
}

export default HeaderNav;