import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

const baseUrl = 'https://danville.pythonanywhere.com/api';

function Login() {
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        setLoginData({
            ...loginData,
            [event.target.name]: event.target.value
        });
    }

    const submitForm = () => {
        const formData = new FormData();
        formData.append('email', loginData.email);
        formData.append('password', loginData.password);

        axios.post(baseUrl + '/login/', formData)
            .then((res) => {
                if (res.data.user_type === 'instructor') {
                    localStorage.setItem('userType', 'instructor');
                    // Redirect to the Instructor Home page
                    navigate("/Teacher");
                    
                } else if (res.data.user_type === 'student') {
                    localStorage.setItem('userType', 'student');
                    // Redirect to the Student Home page
                    navigate("/Student");
                   
                } else {
                    // Handle invalid login
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        // Your login form JSX remains the same
        <div className="login-page">
            <div className="login-container">
                <form>
                    <h1 className="login-title">Login</h1>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input
                            type="email"
                            value={loginData.email}
                            name='email'
                            onChange={handleChange}
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                            type="password"
                            value={loginData.password}
                            name='password'
                            onChange={handleChange}
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Password"
                        />
                    </div>
                    <button type="button" onClick={submitForm} className="btn btn-primary">
                        Login
                    </button>
                </form>
            </div>
        </div>

    );
}

export default Login;
