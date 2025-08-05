import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import heroImage from '../../../images/img/hero-bg.jpg'; // update path as needed

const HeroSection = () => {
    return (
        <section id="hero" className="d-flex align-items-center">
            {/* Mobile Image (visible only on mobile via CSS) */}
            <img src={heroImage} alt="Hero" className="mobile-image" />

            <div className="container">
                <div>
                    <small>TOTAL HEALTH CARE SOLUTION</small>
                    <h1>Your Most Trusted <br />Health Partner</h1>
                    <small>
                        We are a reputable health services conglomerate desiring to expand
                        patient services on an advanced health technology model to business and equity.
                    </small>
                </div>
                <div className="d-flex justify-content-start gap-2">
                    <Link to={'/doctors'} className="btn-get-started scrollto">Get Started</Link>
                    <Link to={'/track-appointment'} className="btn-get-started scrollto">Track Appointment</Link>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
