import {useEffect, useState} from 'react'

const usePost = id => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=>{
        setLoading(true)

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(x => x.json())
            .then(x => {
                setLoading(false)
                console.log(x)
                setData(x)
            })
            .catch(err => {
                setLoading(false)
                setError(err)
                console.log(err)
            })
    }, [id])

    return { loading, data, error }
}

export default usePost