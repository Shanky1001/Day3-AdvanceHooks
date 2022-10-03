import { Button, FormLayout, TextField } from '@shopify/polaris'
import React, { useState } from 'react'
import '../App.css'
import { useFetch } from '../useFetch'

const CustomHook = () => {
    const [form, setForm] = useState({ api: '', method: '', payload: '' })
    const [data, setData] = useFetch();

    const fetchData = () => {
        if (form.api === '' || form.method === '') {
            alert('Please enter details in form');
        } else {
            setData(form.api, form.method);
        }
    }




    return (
        <div className="customHook">
            <h1> Custom Hook Form </h1>
            <h1>Answer on Console</h1>

            <FormLayout>
                <TextField label="API" value={form.api} onChange={(e) => setForm({ ...form, api: e })} />
                <TextField
                    label="Method" value={form.method}
                    onChange={(e) => setForm({ ...form, method: e })} />


                <Button onClick={fetchData}> Fetch Data </Button>
            </FormLayout>

            {data && console.log(data)}
        </div>
    )
}

export default CustomHook