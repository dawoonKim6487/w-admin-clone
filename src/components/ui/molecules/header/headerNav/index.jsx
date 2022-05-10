import React from 'react';
import List from './List';
// import { classnames as twc } from 'tailwindcss-classnames';
// import { flexStyle } from 'styles'


const HeaderNav = ({ gap }) => {
    const routes = [
        { id: 0, name: '게시판', path: '/' },
        { id: 1, name: '농업계 소식', path: '/page1' },
        { id: 2, name: '정보동영상', path: '/page2' },
        { id: 3, name: '농자재 광고', path: '/page3' },
        { id: 4, name: '농진청 전송 관리', path: '/page4' },
        { id: 5, name: '접속 날짜 조회', path: '/page5' },
        { id: 6, name: '기타', path: '/page6' },
    ]
    return (
        <ul className={`flex flex-wrap justify-start gap-${gap ? gap : 8}`}>
            {routes.map((ele) => <List path={ele.path} key={ele.id}>{ele.name}</List>)}
        </ul>
    )
}

export default HeaderNav;