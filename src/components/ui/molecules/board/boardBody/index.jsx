import React from 'react';
import './table.scss';
// import TableRow from './TableRow';

const BoardBody = ({ children }) => {
    return (
        <div>
            <table className="w-full border-t-2 border-black">
                <thead>
                    <tr>
                        <td className='w-1/12'>번호</td>
                        <td className='w-1/12'>분류</td>
                        <td className='text-left'>제목</td>
                        <td className='w-1/12'>날짜</td>
                        <td className='w-1/12'>조회</td>
                    </tr>
                </thead>
                <tbody>
                    {children}
                </tbody>
            </table>
        </div>
    )
}

export default BoardBody;