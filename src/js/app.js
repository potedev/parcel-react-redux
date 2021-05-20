import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import api from './utils/api'

//Routing
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AuthRoute } from './components/authRoute'

//Protected Routes
import Home from './pages/home'
import Books from './pages/books'

//Public Routes
import Register from './pages/register'
import Login from './pages/login'

//Components
import Layout from './components/layout'
import '../css/style.css'

const App = () => {
    const appState = useSelector(state => state.app);
    const dispatch = useDispatch();

    //Lors de l'initialisation de mon composant
    useEffect(async () => {
        dispatch({ type: 'APP_INIT' })
        dispatch({ type: 'USER_FETCH' })

        try {
            let result = await api.get('/users/me');
            dispatch({ type: 'USER_SET', payload: result.data })
        }
        catch (err) {
            dispatch({ type: 'USER_RESET' })
        }

        dispatch({ type: 'APP_READY' })

    }, [])

    if (!appState.init) return <div>Loading...</div>

    return (
        <Router>
            <Switch>
                {/* http://localhost:1234/login */}
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Layout>
                    {/* http://localhost:1234/ */}
                    <AuthRoute exact path="/" component={Home} />
                    <AuthRoute exact path="/books" component={Books} />
                </Layout>
            </Switch>
        </Router>
    )
}

export default App;