import { useEffect,  useState } from 'react'

export default function useAddCount () {
    const [count, addCount] = useState(0)

    const changeCount = () => {
        addCount(count => count + 1)
    }

    useEffect(() => {
        changeCount()
    }, [])

    return {
        count,
        changeCount
    }
}