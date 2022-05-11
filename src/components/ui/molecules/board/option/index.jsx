import React from 'react';
import { Button, Input, Option } from 'components';
import { flexStyle } from 'styles';
import { classnames as twc } from 'tailwindcss-classnames';
import { AiOutlineEdit, AiOutlineSearch } from "react-icons/ai";


const BoardOption = ({ onClick, options, onChange, cate }) => {
    const wrapStyle = () => twc(
        flexStyle(false, 0, false, true)
    )
    return (
        <div className={wrapStyle()}>
            <Input Icon={<AiOutlineSearch />}>
                <select className='w-[150px] outline-none' value={cate} onChange={onChange}>
                    <Option>전체</Option>
                    {options.map((ele, index) => <Option key={index}>{ele}</Option>)}
                </select>
            </Input>
            <Button name='작성 하기' onClick={onClick}>
                <AiOutlineEdit color='#fff' size='18' />
            </Button>
        </div>
    )
}

export default BoardOption;