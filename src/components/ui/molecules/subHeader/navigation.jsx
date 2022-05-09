import React, { useState } from 'react'
import { DropList, Route } from 'components'
import { AiFillCaretDown } from "react-icons/ai";
import { flexStyle } from 'styles';


const SubHeaderNav = ({ children, route }) => {
    const [drop, setDrop] = useState(false);

    const onClick = () => {
        setDrop(!drop)
    }

    return (
        <div className='relative' >
            <div onClick={onClick} className={flexStyle()}>
                <span>{children}</span>
                <AiFillCaretDown />
            </div>
            <DropList dropState={drop} marginList={false}>
                {route.map((ele) => <Route key={ele.id} name={ele.name} path={ele.path} />)}
            </DropList>
        </div>
    )

}

export default SubHeaderNav;