import React from 'react'
import { classnames as tw } from 'tailwindcss-classnames';
import { flexStyle } from 'styles';
const SubHeader = ({ children }) => {

    const style = tw(
        flexStyle(false, 5, 1, false),
        'border-b', 'px-5', 'py-2'
    )

    return (
        <div className={style}>{children}</div>
    )

}

export default SubHeader;