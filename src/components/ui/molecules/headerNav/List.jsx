import React from 'react';
import { Text } from 'components';


const List = ({ children }) => {
    return (
        <li><Text size='lg'>{children}</Text></li>
    )
}

export default List;