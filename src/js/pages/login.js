import React from 'react';
import api from '../utils/api'

const Login = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();

        let result = await api.post('/users/authenticate', { 'email': 'test@test.com', 'password': 'test' });
        console.log(result);
        //TODO reducer
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>email</label>
                    <input type="email"></input>
                </div>
                <div>
                    <label>password</label>
                    <input type="password"></input>
                </div>
                <button>loggin</button>
            </form>
        </div>
    );
};

export default Login;