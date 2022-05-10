import React from 'react';
import './table.scss';
// import TableRow from './TableRow';

const BoardBody = ({ children }) => {
    return (
        <div>
            <table className="w-full border-t-2 border-black">
                <thead>
                    <tr>
                        <td className='w-1/8 hidden lg:table-cell'>번호</td>
                        <td className='w-1/12'>분류</td>
                        <td className='text-left w-1/2'>제목</td>
                        <td className='w-1/4 lg:w-1/6'>날짜</td>
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