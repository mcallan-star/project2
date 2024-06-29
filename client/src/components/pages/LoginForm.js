import React from 'react';
import { fetchData } from '../../main';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const navigate = useNavigate();  //useNavigate is a hook that allows us to navigate to different pages in our app

    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const {username, password} = user;

    const onChange = (e) => setUser({...user, [e.target.name]: e.target.value});

    const onSubmit = (e) => {
        e.preventDefault();


        fetchData('/user/login', 
            {
            username,
            password
            }, 
            'POST')
            .then((data) => {
            if(!data.message) {   
                console.log(data);
                navigate('/Foods')  
            }
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="mb-3 bg-warning p-2 rounded ">
                <label htmlFor="exampleInputUsername" className="form-label">Username</label>
                <input 
                type="text" 
                className="form-control" 
                id="exampleInputUsername" 
                name="username" 
                onChange={onChange}
                value={username}
                required
                />
            </div>
            <div className="mb-3 bg-warning p-2 rounded">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input 
                type="password" 
                className="form-control" 
                id="exampleInputPassword1"
                name="password"
                onChange={onChange}
                value={password}
                required />
            </div>
            <button type="submit" className="btn btn-danger">Login</button>
        </form>
    );
}

export default LoginForm;
