import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { loginUser, isLoading } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();

    }
    return (
        <div className="container-fluid">
            <div className="login-container m-5">
                <h2 className="text-primary fw-bold mb-4 text-center">Please Login</h2>
                <form onSubmit={handleLoginSubmit}>
                    <div className="row mb-3 g-4">
                        {/* email  */}
                        <input type="email" onChange={handleOnChange} className="form-control" id="inputEmail" placeholder="Enter Email" name="email" required />

                        {/* password  */}
                        <input type="password" onChange={handleOnChange} className="form-control" id="inputPassword3" placeholder="Enter Password" name="password" autoComplete="on" required />
                    </div>

                    <br />
                    {/* submit button  */}
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-danger rounded">Login</button>
                    </div>
                    <br />
                    <NavLink
                        style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center' }}
                        to="/register">
                        New User? Please Register
                    </NavLink>

                    {/* google sign in button  */}
                    {/* <div className="d-flex justify-content-center mt-2">
                        <button className="btn btn-primary" onClick={handleGoogleSignIn}>Google Sign In</button>
                    </div> */}
                </form>
                {isLoading && <Spinner animation="border" variant="danger" />}
            </div>
        </div>
    );
};

export default Login;