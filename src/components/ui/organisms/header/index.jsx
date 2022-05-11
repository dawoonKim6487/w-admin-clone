import React from 'react'
import { HeaderNav, DropDown } from 'components';
import { flexStyle } from 'styles'
import { classnames as twc } from 'tailwindcss-classnames';

const headTheme = twc(
    'p-2',
    'lg:p-5',
    'bg-c-main',
    'flex',
    'gap-10',
    'mb:gap-20',
    'justify-between',
    'items-center'
)

const navBlock = twc(
    flexStyle(false, 5),
    'flex-1',
    'gap-5',
    'hidden',
    'lg:block'
)

const moNav = twc(
    flexStyle(false, 2),
    'border-b',
    'px-1', 'py-2',
    'lg:hidden',
    'block'
)

const Header = () => {
    return (
        <>
            <header className={headTheme}>
                <h1 className='lg:text-2xl text-xl text-white font-bold'>
                    우성 소프트
                </h1>
                <div className={navBlock}>
                    <HeaderNav />
                </div>
                <div className="btn"><DropDown marginList={false} /></div>
            </header>
            <div className={moNav}>
                <HeaderNav />
            </div>
        </>
    )
}

export default Header;