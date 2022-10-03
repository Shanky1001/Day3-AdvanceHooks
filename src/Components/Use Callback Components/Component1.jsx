import { TextField } from '@shopify/polaris'
import React, { memo } from 'react'

const Component1 = ({ value1, inputHandle1 }) => {


    console.log('component 1 rendering');

    return (
        <div className="Component1">
            <h1> Component 1 </h1>
            <TextField value={value1} onChange={inputHandle1} />
            <hr />
        </div>

    )
}

export default memo(Component1)