import React, { useState } from 'react'
import { DropList, Route } from 'components'
import { AiFillCaretDown } from "react-icons/ai";
import { flexStyle } from 'styles';
import { classnames as twc } from 'tailwindcss-classnames';


const SubHeaderNav = ({ children, route }) => {
    const [drop, setDrop] = useState(false);
    const onClick = () => {
        setDrop(!drop)
    }

    return (
        <div className='relative' >
            <div onClick={onClick} className={twc(flexStyle(), 'cursor-pointer', 'active:bg-stone-200', 'rounded', 'p-1')}>
                <span className='mr-2'>{children}</span>
                <AiFillCaretDown />
            </div>
            <DropList dropState={drop} marginList={false}>
                {route.map((ele) => <Route key={ele.id} name={ele.name} path={ele.path} onClick={onClick} />)}
            </DropList>
        </div >
    )

}

export default SubHeaderNav;