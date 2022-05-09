import React from 'react'
import { flexStyle } from 'styles'
import { classnames as twc } from 'tailwindcss-classnames';

const DropBtn = ({ children, name, onClick }) => {

    const label = name ? name : '버튼'

    const btnStyle = twc(
        flexStyle(false),
        'bg-c-main-deep',
        'px-5', 'py-2', 'rounded-xl', 'drop-shadow-md',
        'active:bg-blue-600'
    )
    return (
        <button className={btnStyle} onClick={onClick}>
            <span className='text-white'>{label}</span>
            {
                children ? <div className="ml-2">
                    {children}
                </div> : ""
            }
        </button>
    )
};

export default DropBtn;