import { useEffect, useState } from "react"

export const useFetch = (url) => {
    const [state, setState] = useState({data: null, loading: true});

    useEffect(() => {
        fetch(url)
            .then(r => r.json())
            .then(json => setState({data: json, loading: false}))
    }, [url])

    return state
}