import React from 'react';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
const TableRow = ({ data, index, mode }) => {
    const { cate, tit, date, join, title, idx } = data;
    const path = `/${mode}/${idx}`
    return (
        <tr className='cursor-pointer hover:bg-slate-100'>
            <td className='w-1/12'>{index + 1}</td>
            <td className='w-1/12'>{cate}</td>
            <td className='text-left'>
                <Link to={path}>
                    {tit ? tit : title}
                </Link>
            </td>
            <td className='w-1/12'>{dayjs(date).format('YYYY-MM-DD')}</td>
            <td className='w-1/12'>{join}</td>
        </tr>
    )
}

export default TableRow;