import React from 'react';

const TableRow = ({ data }) => {
    const { id, cate, tit, date, join } = data;
    return (
        <tr>
            <td className='w-1/12'>{id + 1}</td>
            <td className='w-1/12'>{cate}</td>
            <td className='text-left'>{tit}</td>
            <td className='w-1/12'>{date}</td>
            <td className='w-1/12'>{join}</td>
        </tr>
    )
}

export default TableRow;