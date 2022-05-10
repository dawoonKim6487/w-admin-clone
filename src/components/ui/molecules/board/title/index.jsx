import React from 'react';
import { flexStyle } from 'styles';
import { classnames as twc } from 'tailwindcss-classnames';
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

const BoardTitle = ({ tit }) => {

    const wrapStyle = () => twc(
        flexStyle(false, 0, false, true)
    )
    return (
        <div className={wrapStyle()}>
            <h2 className='text-2xl'>{title(tit)}</h2>

        </div>
    )
}

export default BoardTitle;