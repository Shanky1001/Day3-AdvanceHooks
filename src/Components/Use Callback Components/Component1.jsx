import { TextField } from '@shopify/polaris'
import React, { memo, useCallback } from 'react'

const Component1 = ({ value1, setValue1 }) => {
    const inputHandle = useCallback((e) => {
        setValue1(e);
        console.log('component 1 rendering');
    }, [setValue1])


    return (
        <div className="Component1">
            <h1> Component 1 </h1>
            <TextField value={value1} onChange={inputHandle} />
            <hr />
        </div>

    )
}

export default memo(Component1)