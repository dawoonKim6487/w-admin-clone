import React from 'react'
import { NavLink } from 'react-router-dom';
const Lists = ({ path, name, onClick }) => {

    return (
        <li className='p-1 text-center'>
            <NavLink onClick={onClick} to={path}>{name}</NavLink>
        </li>
    )
}

export default Lists
