import React from 'react';

import './index.css';
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaPhoneAlt, FaEnvelope  } from "react-icons/fa";

const TopHeader = () => {
    return (
        <div id="topbar" className="d-flex align-items-center fixed-top">
            <div className="container d-flex justify-content-between">
                <div className="contact-info d-flex align-items-center">
                    <FaEnvelope className='contact-icon'/> <a href="mailto:support@doctoroncall.com">support@doctoroncall.com</a>
                    <FaPhoneAlt className='contact-icon'/> <a href="tel:+234 08751 030425">+234 08751 030425</a> 
                </div>
                <div className="d-none d-lg-flex social-links align-items-center">
                    <a href="www.linkedin.com/in" target='_blank' rel="noreferrer" className="linkedin"><FaLinkedin /></a>
                    <a href="https://web.facebook.com/" target='_blank' rel="noreferrer" className="facebook"><FaFacebookSquare /></a>
                    <a href="https://www.instagram.com/" target='_blank' rel="noreferrer" className="instagram"><FaInstagramSquare /></a>
                </div>
            </div>
        </div>
    );
};
export default TopHeader;