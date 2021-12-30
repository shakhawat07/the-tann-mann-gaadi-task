import './Register.css';
import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons"

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { registerUser, isLoading, signInUsingGoogle, signInUsingFacebook, setUser } = useAuth();

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
    };

    const handleGoogleSignIn = () => {
        signInUsingGoogle(history)
            .then(result => {
                setUser(result.user);
                alert('Login successfully!');
                history.replace('/courses');
            })
    };

    const handleFacebookSignIn = () => {
        signInUsingFacebook(history)
            .then(result => {
                setUser(result.user);
                alert('Login successfully!');
                history.replace('/courses');
            })
    };
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
                                <input type="text" onBlur={handleOnBlur} className="form-control zoom" id="inputName" placeholder="Enter Username" name="name" maxLength={80} required />

                                {/* email  */}
                                <input onBlur={handleOnBlur} type="email" className="form-control zoom" id="inputEmail" placeholder="Enter Email" name="email" maxLength={62} required />

                                {/* password  */}
                                <input type="password" onBlur={handleOnBlur} className="form-control zoom" id="inputPassword" placeholder="Enter Password" name="password" maxLength={40} autoComplete="on" required />

                                {/* phone  */}
                                <input type="text" onBlur={handleOnBlur} className="form-control zoom" id="inputPhone" placeholder="Enter Phone" name="phone" maxLength={16} autoComplete="on" required />
                            </div>


                            {/* submit button  */}
                            {/* <div className="row mb-2 text-danger">{error}</div> */}
                            <div className="d-flex justify-content-center mt-4">
                                <button type="submit" className="btn btn-primary rounded zoom">Register</button>
                            </div>
                            <br />
                            <NavLink
                                style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center', fontWeight: 'bolder' }}
                                to="/login">
                                Already Registered? Please Login
                            </NavLink>
                            <br />
                            {/* google sign in button  */}
                            <div className="d-flex justify-content-center mt-2">
                                <button className="btn btn-danger sign-in-google" onClick={handleGoogleSignIn}><FontAwesomeIcon icon={faGoogle} /> Google Sign In</button>
                            </div>
                            {/* facebook sign in button  */}
                            <div className="d-flex justify-content-center mt-2">
                                <button className="btn btn-primary sign-in-facebook" onClick={handleFacebookSignIn}><FontAwesomeIcon icon={faFacebook} /> Facebook Sign In</button>
                            </div>
                            <br />
                        </form>
                    }
                    {isLoading && <Spinner animation="border" variant="danger" />}

                </div>

            </div>
        </div>
    );
};

export default Register;