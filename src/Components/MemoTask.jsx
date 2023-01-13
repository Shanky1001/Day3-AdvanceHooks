import { TextField } from '@shopify/polaris';
import React, { useMemo, useState } from 'react';
import '../App.css';

const MemoTask = () => {
    const [number, setNumber] = useState({ num1: '', num2: '' })
    const [total, setTotal] = useState('');
    const [toggle, setToggle] = useState(false);
    const multiply = useMemo(() => {
        console.log('Multiply Function rendering');
        return number.num1 * number.num2;
    }, [number])

    const add = () => {
        setTotal(+number.num1 + +number.num2)
    }

    return (
        <div className="memoContainer">
            <h1 style={{ fontSize: '3rem', margin: '2rem 0', textAlign: 'center' }}> Use Memo Task  </h1>
            <TextField label="Input 1" type='number' value={number.num1} onChange={(e) => setNumber({ ...number, num1: e })} autoComplete="off" />
            <TextField label="Input 2" type='number' value={number.num2} onChange={(e) => setNumber({ ...number, num2: e })} autoComplete="off" />

            <button onClick={add} className='btn' style={{ backgroundColor: toggle ? 'grey' : 'white' }} > Add  </button>

            <button className='btn' onClick={() => setToggle(!toggle)}> Toggle Color </button>

            <h1 style={{ fontSize: "1.5rem", margin: '2rem 0' }}> Sum is : {total}  </h1>
            <h1 style={{ fontSize: "1.5rem", margin: '2rem 0' }}> Multiplication is : {multiply}  </h1>
            
        </div>
    )
}

export default MemoTask
