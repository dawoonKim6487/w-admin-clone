import React from 'react';

const SelectOpt = ({ value, children }) => {
    return (
        <option value={value ? value : children}>{children}</option>
    )
}

export default SelectOpt