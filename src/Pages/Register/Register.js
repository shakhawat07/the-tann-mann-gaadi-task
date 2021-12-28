import './Register.css';
import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(loginData);
    }
    const handleLoginSubmit = e => {
        registerUser(loginData.email, loginData.password, loginData.name, loginData.phone, history);
        e.preventDefault();
        if (authError === '') {
            alert('User Created successfully!');
        }
        else {
            alert('Registration Failed. Error ' + { authError });
        }
    }
    return (
        <div className="container-fluid">
            <div className="login-container m-5">
                <h2 className="text-primary fw-bold mb-4 text-center">Please Register</h2>
                {!isLoading &&
                    <form onSubmit={handleLoginSubmit}>

                        <div className="row mb-3 g-4">

                            {/* user name  */}
                            <input type="text" onBlur={handleOnBlur} className="form-control" id="inputName" placeholder="Enter Username" name="name" required />

                            {/* email  */}
                            <input onBlur={handleOnBlur} type="email" className="form-control" id="inputEmail" placeholder="Enter Email" name="email" required />

                            {/* password  */}
                            <input type="password" onBlur={handleOnBlur} className="form-control" id="inputPassword" placeholder="Enter Password" name="password" autoComplete="on" required />

                            {/* phone  */}
                            <input type="tel" onBlur={handleOnBlur} className="form-control" id="inputPhone" placeholder="Enter Phone" name="phone" autoComplete="on" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                        </div>


                        {/* submit button  */}
                        {/* <div className="row mb-2 text-danger">{error}</div> */}
                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-danger rounded">Register</button>
                        </div>
                        <br />
                        <NavLink
                            style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center' }}
                            to="/login">
                            Already Registered? Please Login
                        </NavLink>
                        {/* google sign in button  */}
                        {/* <div className="d-flex justify-content-center mt-2">
                        <button className="btn btn-primary" onClick={handleGoogleSignIn}>Google Sign In</button>
                    </div> */}
                    </form>}
                {isLoading && <Spinner animation="border" variant="danger" />}
                {/* {user?.email && alert('User Created successfully!')}
                {authError && alert({ authError })} */}
            </div>
        </div>
    );
};

export default Register;