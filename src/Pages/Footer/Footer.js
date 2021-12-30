import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagramSquare, faTwitterSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import './Footer.css';


const Footer = () => {
    return (
        <div className="container-fluid">
            <div className="row bg-dark text-white py-1 px-1">
                <div className="col-lg-4 col-md-12 cl-sm-12 col-12 text-center mt-4">
                    <img className="img-fluid" src="https://image.freepik.com/free-vector/computer-programming-camp-abstract-concept-illustration_335657-3921.jpg" alt="" width="60" height="40" />
                </div>
                <div className="col-lg-4 col-md-12 cl-sm-12 col-12 text-center py-3 my-3">
                    <h3>© ProgramX Courses</h3>
                </div>
                <div className="col-lg-4 col-md-12 cl-sm-12 col-12 py-1 d-flex justify-items-center align-items-center flex-column">
                    <h2 className="mb-3">Follow Us</h2>

                    <h3>
                        <a className="mx-1 anchor-footer" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/The-Tann-Mann-Gaadi-101514085248498" >
                            <FontAwesomeIcon icon={faFacebookSquare} />
                        </a>
                        <a className="mx-1 anchor-footer" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/the-tann-mann-gaadi/about/" >
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a className="mx-1 anchor-footer" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/thetannmaangaadi/" >
                            <FontAwesomeIcon icon={faInstagramSquare} />
                        </a>
                        <a className="mx-1 anchor-footer" target="_blank" rel="noopener noreferrer" href="https://twitter.com/TtMGaadi" >
                            <FontAwesomeIcon icon={faTwitterSquare} />
                        </a>
                    </h3>
                </div>

            </div>
        </div >
    );
};

export default Footer;