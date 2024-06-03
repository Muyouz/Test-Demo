import { useEffect, useState, useRef, useCallback } from 'react'
function useLastState (data) {
    const [state, setState] = useState(data)
    const lastStateRef = useRef(state)

    useEffect(() => {
        lastStateRef.current = state;
    },[state])

    return useCallback(() => lastStateRef.current, [])
}