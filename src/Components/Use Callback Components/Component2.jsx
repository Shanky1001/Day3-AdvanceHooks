import { TextField } from '@shopify/polaris'
import React, { memo } from 'react'

const Component2 = ({ value2, inputHandle2, value1 }) => {

    console.log('component 2 rendering');

    return (
        <div className="Component2">
            <h1> Component 2 </h1>
            <TextField value={value2} onChange={inputHandle2} />
            <h1> Input in component 1 : {value1} </h1>
            <hr />
        </div>
    )
}

export default memo(Component2)