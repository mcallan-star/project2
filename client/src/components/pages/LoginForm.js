import React from 'react';
import { fetchData } from '../../main';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from "react";
import UserContext from "../../context/userContext";

const LoginForm = () => {
    const navigate = useNavigate();  //useNavigate is a hook that allows us to navigate to different pages in our app

    const { user, updateUser, setUser } = useContext(UserContext);

    const { username, password } = user;

    const onChange = (e) => updateUser(e.target.name, e.target.value);

    const onSubmit = (e) => {
        e.preventDefault();

        fetchData('/user/login',
            {
                username,
                password
            },
            'POST')
            .then((data) => {
                // Dont need if(!data.message) because .catch will handle it
                // res.status(401) in server sets it to 
                console.log('/user/login', data);
                setUser({ ...user, authenticated: true, _id: data._id });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        if (user._id && user.authenticated) {
            console.log('Login successful redirecting to Foods page :)!!!!!!!!!!!!!!!!!!!!!');
            navigate('/Foods');
        }
    }, [user, navigate]);

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
                    value={username || ''}
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
                    value={password || ''}
                    required
                />
            </div>
            <button type="submit" className="btn btn-danger">Login</button>
        </form>
    );
}

export default LoginForm;
