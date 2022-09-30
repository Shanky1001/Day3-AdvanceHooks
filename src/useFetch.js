import { useState } from "react"

export const useFetch = () => {

    const [result, setResult] = useState();


    const fetchApi = (api, method, payload) => {

        fetch(`${api}?&limit=5`, {
            method: method,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(response => response.json())
            .then(data => {
                setResult(data)
            })
          
    }

    return [result, fetchApi]
}