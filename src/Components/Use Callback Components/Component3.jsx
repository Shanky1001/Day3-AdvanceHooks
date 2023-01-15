import React, { memo } from 'react';

const Component3 = ({ value2 }) => {
    console.log('component 3 rendering');

    return (
        <div className="Component3">
            <h1>Component 3</h1>
            <h1> Input in component 2 : {value2} </h1>
            <hr />
        </div>
    )
}

export default memo(Component3)
