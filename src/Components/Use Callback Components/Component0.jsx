import React, { useState } from 'react'
import Component1 from './Component1'
import Component2 from './Component2'
import Component3 from './Component3'
import '../../App.css'

const Component0 = () => {

    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');


    return (
        <div className="Component0Container">
            <h1 >
                Use CallBack top Component
            </h1>
            <h1>(check console for difference)</h1>
            <Component1 value1={value1} setValue1={setValue1} />
            <Component2 value2={value2} setValue2={setValue2} value1={value1} />
            <Component3 value2={value2} />
        </div>
    )
}

export default Component0