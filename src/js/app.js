import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

//Routing
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

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
    const appState = useSelector(state => state);
    const dispatch = useDispatch();

    //Lors de l'initialisation de mon composant
    useEffect(() => {
        //J'envoie une action à mon store
        dispatch({ type: 'APP_INIT' })

        setTimeout(() => {
            dispatch({ type: 'APP_READY' })
        }, 1000)
    }, [])

    if (appState.loading) return <div>Loading...</div>

    return (
        <Router>
            <Switch>
                {/* http://localhost:1234/login */}
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Layout>
                    {/* http://localhost:1234/ */}
                    <Route exact path="/" component={Home} />
                    <Route exact path="/books" component={Books} />
                </Layout>
            </Switch>
        </Router>
    )
}

export default App;