import React from 'react'
import { Text, HeaderNav } from 'components';
import { flexStyle } from 'styles'
import { classnames as twc } from 'tailwindcss-classnames';

const headTheme = twc(
    'p-5',
    'gap-20',
    'bg-c-main',
    flexStyle(false),
)

const navBlock = twc(
    flexStyle(false, 5),
    'flex-1',
    'gap-5'
)

const Header = () => {
    return (
        <header className={headTheme}>
            <Text color='w' size='3xl'>Admin</Text>
            <div className={navBlock}>
                <HeaderNav />
            </div>
            <div className="btn">버튼</div>
        </header>
    )
}

export default Header;