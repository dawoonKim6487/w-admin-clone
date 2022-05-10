import React, { useState } from 'react'
import { Button, DropList, Link } from 'components'
import { AiFillCaretDown } from "react-icons/ai";

const DropDown = () => {
    const [drop, setDrop] = useState(false);

    const onClick = () => {
        setDrop(!drop)
    }

    const lists = [
        { id: 0, name: '우성 홈페이지', url: 'https://www.wssw.kr' },
        { id: 1, name: '사용자 게시판', url: 'https://www.wssw.kr/user_board' },
    ]

    return (
        <div className='relative'>
            <Button name='바로가기' onClick={onClick}>
                <AiFillCaretDown color='#fff' />
            </Button>
            <DropList dropState={drop} marginList={true}>
                {lists.map((ele) => <Link key={ele.id} name={ele.name} url={ele.url} />)}
            </DropList>
        </div>
    )
}

export default DropDown;