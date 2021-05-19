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
    const appState = useSelector(state => state);
    const dispatch = useDispatch();

    //Lors de l'initialisation de mon composant
    useEffect(async () => {
        //J'envoie une action à mon store
        dispatch({ type: 'APP_INIT' })

        let result = await api.get('/users/me');

        console.log(result);

        console.log('USER', result.data);

        dispatch({ type: 'APP_READY' })

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