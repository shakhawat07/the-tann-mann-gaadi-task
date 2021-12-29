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
            <div className="login-container row">

                <div className="col-lg-6 col-md-12 col-sm-12 col-12 d-flex flex-column justify-content-center align-items-center m-0 p-0 d-none d-lg-block">

                    <img className="img-fluid" style={{ width: '700px', height: '600px', overflow: 'hidden' }} src="https://image.freepik.com/free-vector/cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37330.jpg" alt="" />

                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-12 d-flex flex-column justify-content-center align-items-center m-0 p-0 form-container">
                    <h1 className="text-dark fw-bolder mb-2 mt-4 text-center">Register</h1>
                    {!isLoading &&
                        <form onSubmit={handleLoginSubmit}>

                            <div className="row mb-3 g-4 w-75 mx-auto my-3">

                                {/* user name  */}
                                <input type="text" onBlur={handleOnBlur} className="form-control" id="inputName" placeholder="Enter Username" name="name" required />

                                {/* email  */}
                                <input onBlur={handleOnBlur} type="email" className="form-control" id="inputEmail" placeholder="Enter Email" name="email" required />

                                {/* password  */}
                                <input type="password" onBlur={handleOnBlur} className="form-control" id="inputPassword" placeholder="Enter Password" name="password" autoComplete="on" required />

                                {/* phone  */}
                                <input type="text" onBlur={handleOnBlur} className="form-control" id="inputPhone" placeholder="Enter Phone" name="phone" autoComplete="on" required />
                            </div>


                            {/* submit button  */}
                            {/* <div className="row mb-2 text-danger">{error}</div> */}
                            <div className="d-flex justify-content-center">
                                <button type="submit" className="btn btn-primary rounded">Register</button>
                            </div>
                            <br />
                            <NavLink
                                style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center', fontWeight: 'bolder' }}
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
        </div>
    );
};

export default Register;