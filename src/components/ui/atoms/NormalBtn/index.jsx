import React from 'react';


const NormalBtn = ({ onClick, children }) => {
    return (
        <button className='border p-2' onClick={onClick}>
            {children}
        </button>
    )
}

export default NormalBtn;