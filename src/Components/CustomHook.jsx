import { Button, FormLayout, TextField } from '@shopify/polaris'
import React, { useState } from 'react'
import { useFetch } from '../useFetch'

const CustomHook = () => {

    const [form, setForm] = useState({ api: '', limit: '', method: '', payload:'' })
    const [data, setData] = useFetch();


    

    return (
        <div className="customHook">
            <h1> Custom Hook Form </h1>
            <h1>Answer on Console</h1>

            <FormLayout>
                <TextField label="API" value={form.api} onChange={(e) => setForm({ ...form, api: e })} />
                {/* <TextField
                    label="Limit" value={form.limit}
                    onChange={(e) => setForm({ ...form, limit: e })} /> */}
                <TextField
                    label="Method" value={form.method}
                    onChange={(e) => setForm({ ...form, method: e })} />
                <TextField
                    label="Payload" value={form.payload.toString()}
                    onChange={(e) => setForm({ ...form, payload: e })} />

                <Button onClick={() => {setData(form.api,form.method);console.log(data)}}> Fetch Data </Button>
            </FormLayout>
        </div>
    )
}

export default CustomHook