import React from 'react';
import { NavLink } from 'react-router-dom';
import './List.scss'

const List = ({ children, path }) => {
    return (
        <li className='nav__list mx-1'>
            <NavLink to={path}>{children}</NavLink>
        </li>
    )
}

export default List;