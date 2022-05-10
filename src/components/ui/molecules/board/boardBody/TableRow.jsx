import React from 'react';
import dayjs from 'dayjs';
const TableRow = ({ data, index }) => {
    const { cate, tit, date, join, title } = data;
    return (
        <tr className='cursor-pointer hover:bg-slate-100'>
            <td className='w-1/12'>{index + 1}</td>
            <td className='w-1/12'>{cate}</td>
            <td className='text-left'>{tit ? tit : title}</td>
            <td className='w-1/12'>{dayjs(date).format('YYYY-MM-DD')}</td>
            <td className='w-1/12'>{join}</td>
        </tr>
    )
}

export default TableRow;