import React from 'react';
import { AiOutlineSearch } from "react-icons/ai";


const InputComponent = ({ children }) => {
    return (
        <div className='border h-full flex rounded-md overflow-hidden'>
            <div className='bg-slate-300 p-2'>
                <AiOutlineSearch />
            </div>
            {children}
        </div>
    )
}

export default InputComponent;