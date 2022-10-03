import { TextField } from '@shopify/polaris'
import React, { memo, useCallback } from 'react'

const Component2 = ({ value2, setValue2, value1 }) => {
    const inputHandle = useCallback((e) => {
        setValue2(e);
        console.log('component 2 rendering');
    }, [setValue2]);

    return (
        <div className="Component2">
            <h1> Component 2 </h1>
            <TextField value={value2} onChange={inputHandle} />
            <h1> Input in component 1 : {value1} </h1>
            <hr />
        </div>
    )
}

export default memo(Component2)