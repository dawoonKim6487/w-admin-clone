import React, { useEffect, useState } from 'react'
import { classnames as twc } from 'tailwindcss-classnames'
import { aniOpt } from 'styles'

const dropStyle = (marginList) => twc(
    'absolute', 'bg-white', 'w-full', 'rounded', 'drop-shadow-xl', 'z-50',
    'border', 'p-1', aniOpt(2000), marginList ? 'mt-2' : ""
)

const DropList = ({ children, dropState, marginList }) => {
    const [classState, setClassState] = useState(twc(dropStyle(marginList)))

    useEffect(() => {
        dropState ?
            setClassState(twc(
                dropStyle(marginList), 'visible', 'opacity-1'
            )) :
            setClassState(twc(
                dropStyle(marginList), 'opacity-0', 'invisible'
            ))
    }, [dropState]);

    return (
        <ul className={classState}>
            {children}
        </ul>
    )
}

export default DropList;