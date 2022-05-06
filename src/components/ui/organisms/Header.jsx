import React from 'react'
import { Text, HeaderNav } from 'components';
const Header = () => {
    return (
        <header className='p-5 flex justify-between items-center' style={{ backgroundColor: '#90a786' }}>
            <Text color='w' size='3xl'>Admin</Text>
            <HeaderNav />
            <div className="btn">버튼</div>
        </header>
    )
}

export default Header;