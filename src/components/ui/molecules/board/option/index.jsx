import React from 'react';
import { Button } from 'components';
import { flexStyle } from 'styles';
import { classnames as twc } from 'tailwindcss-classnames';
import { AiOutlineEdit } from "react-icons/ai";


const BoardOption = ({ onClick }) => {
    const wrapStyle = () => twc(
        flexStyle(false, 0, false, true)
    )
    return (
        <div className={wrapStyle()}>
            <Button name='작성 하기' onClick={onClick}>
                <AiOutlineEdit color='#fff' size='18' />
            </Button>
        </div>
    )
}

export default BoardOption;