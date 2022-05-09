import React from 'react'
import { HeaderNav, DropDown } from 'components';
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
            <h1 className='text-2xl text-white font-bold'>우성 소프트</h1>
            <div className={navBlock}>
                <HeaderNav />
            </div>
            <div className="btn"><DropDown marginList={false} /></div>
        </header>
    )
}

export default Header;