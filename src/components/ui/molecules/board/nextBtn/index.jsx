import React from 'react';
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";


const NextBtn = ({ prev, next }) => {
    return (
        <div className='flex gap-2 justify-end'>
            <button className='border p-2' onClick={prev}>
                <AiFillCaretLeft size='18' />
            </button>
            <button className='border p-2' onClick={next}>
                <AiFillCaretRight size='18' />
            </button>
        </div>
    )
}

export default NextBtn;