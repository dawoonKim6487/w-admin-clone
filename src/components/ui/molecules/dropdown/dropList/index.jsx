import React, { useEffect, useState } from 'react'
import { classnames as twc } from 'tailwindcss-classnames'
import { aniOpt } from 'styles'
import List from './List'
const dropStyle = () => twc(
    'absolute', 'mt-2', 'bg-white', 'w-full', 'rounded', 'drop-shadow-xl',
    'border', 'p-1', aniOpt(2000)
)

const DropList = ({ dropState }) => {
    const [classState, setClassState] = useState(twc(dropStyle()))

    useEffect(() => {
        dropState ?
            setClassState(twc(
                dropStyle(), 'visible', 'opacity-1'
            )) :
            setClassState(twc(
                dropStyle(), 'opacity-0', 'invisible'
            ))
    }, [dropState]);

    const lists = [
        { id: 0, name: '우성 홈페이지', url: 'https://www.wssw.kr' },
        { id: 1, name: '사용자 게시판', url: 'https://www.wssw.kr/user_board' },
    ]

    return (
        <ul className={classState}>
            {lists.map((ele) => <List key={ele.id} name={ele.name} url={ele.url} />)}
        </ul>
    )
}

export default DropList;