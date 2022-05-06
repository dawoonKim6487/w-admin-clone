import React from 'react';
import tw from 'tailwind-styled-components'
import { fontSize, fontColor } from '../utils';

const SpanStyle = tw.span`
    ${props => fontSize(props.size)}
    ${props => fontColor(props.color)}
    ${props => props.bold ? 'font-bold' : ''}
`

const SmText = ({ children, bold, color, size }) => <SpanStyle size={size} bold={bold} color={color}>{children}</SpanStyle>

SmText.defaultProps = {
    bold: true,
    color: 'dark',
    size: 'xl'
}


export default SmText