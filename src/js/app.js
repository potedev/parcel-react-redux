import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {
    const dispatch = useDispatch();
    const appState = useSelector(state => state.app)

    useEffect(() => {

        dispatch({ type: "APP_INIT" })

        setTimeout(() => {
            dispatch({ type: "APP_READY" })
        }, 2000)
    }, [])

    console.log('APP global state : ', appState)

    return <h1>Hello App</h1>
}

export default App