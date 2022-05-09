import React from 'react';
import { Button } from 'components';
import { flexStyle } from 'styles';
import { classnames as twc } from 'tailwindcss-classnames';
import { AiOutlineEdit } from "react-icons/ai";


const BoardTitle = ({ children }) => {

    const onClick = () => {
        console.log('버튼')
    }
    const wrapStyle = () => twc(
        flexStyle(false, 0, false, true)
    )
    return (
        <div className={wrapStyle()}>
            <h2 className='text-2xl'>{children}</h2>
            <Button name='작성 하기' onClick={onClick}>
                <AiOutlineEdit color='#fff' size='18' />
            </Button>
        </div>
    )
}

export default BoardTitle;