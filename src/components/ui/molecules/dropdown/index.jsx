import React, { useState } from 'react'
import { Button } from 'components'
import { AiFillCaretDown } from "react-icons/ai";
import DropList from './dropList';

const DropDown = () => {
    const [drop, setDrop] = useState(false);

    const onClick = () => {
        setDrop(!drop)
    }



    return (
        <div className='relative'>
            <Button name='우성 홈페이지 바로가기' onClick={onClick}>
                <AiFillCaretDown color='#fff' />
            </Button>
            <DropList dropState={drop} />
        </div>
    )
}

export default DropDown;