import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './Navigation.css'

const Navigation = () => {
    const { user, logout } = useAuth();
    // console.log(user);
    // NavLink activeStyle 
    const activeStyle = {
        fontWeight: "bold",
        color: "tomato",
        background: "black"
    };
    return (
        <Navbar bg="dark" variant="dark" expand="lg" >
            <Container fluid>
                <Navbar.Brand className="fs-1 fw-bolder ms-2">
                    <img className="img-fluid me-3" src="https://image.freepik.com/free-vector/computer-programming-camp-abstract-concept-illustration_335657-3921.jpg" alt="" width="45" height="25" />
                    <span className="fs-5">Programming Courses</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="d-flex align-items-end justify-content-end ms-auto">
                        {/* <NavLink className="nav"
                            activeStyle={activeStyle}
                            to="/">Home
                        </NavLink> */}
                        {user.email &&
                            <NavLink className="nav"
                                activeStyle={activeStyle}
                                to="/courses">Courses
                            </NavLink>
                        }

                        {/* <NavLink className="nav"
                            activeStyle={activeStyle}
                            to="/about">About
                        </NavLink> */}
                        <NavLink className="nav"
                            activeStyle={activeStyle}
                            to="/login">Login
                        </NavLink>
                        <NavLink className="nav"
                            activeStyle={activeStyle}
                            to="/register">Register
                        </NavLink>

                        {/* showing userName after login */}
                        <span className="text-white mb-1">{user.displayName}</span>
                        {/* log out button show */}
                        {user.email && <button className="ms-3 text-white btn btn-black border border-white" onClick={logout}>logout</button>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;