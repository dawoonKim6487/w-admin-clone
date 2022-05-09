import React from 'react';
import { classnames as twc } from 'tailwindcss-classnames';
import { defaultFont } from 'styles'

const SmText = ({ children, bold, color, size }) => {
    const className = twc(
        color === 'w' ? 'text-white' : "",
        bold ? 'text-bold' : "",
        defaultFont(size),
    )

    return (
        <span className={className}>
            {children}
        </span>
    );
}


SmText.defaultProps = {
    bold: true,
    color: 'dark',
    size: 'xl'
}


export default SmText