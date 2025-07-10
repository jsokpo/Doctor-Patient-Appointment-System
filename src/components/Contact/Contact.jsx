import React from 'react'
import Footer from '../Shared/Footer/Footer'
import { useForm } from 'react-hook-form';
import { FaLocationArrow, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Header from '../Shared/Header/Header';
import './index.css';
import SubHeader from '../Shared/SubHeader';

const Contact = () => {
    const { register, handleSubmit } = useForm({});
    const onSubmit = (data) => {

    };
    return (
        <>
            <Header />
            <SubHeader title="Contact us" subtitle="We are here to listen to you." />
            <section id="contact" className="contact mt-5 mb-5">
                <div>
                    <div className="container">
                    {/* eslint-disable-next-line */}
                        <iframe style={{ border: 0, width: "100%", height: "350px" }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1969.9016500191165!2d7.4777126522665975!3d9.08167637831168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b3779c9cf51%3A0x309e497816d66fa0!2sThe%20Place%20Restaurant%20Amino%20Kano!5e0!3m2!1sen!2sng!4v1752077398252!5m2!1sen!2sng" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>

                <div className="container" style={{ marginTop: 80, marginBottom: 120 }}>
                    <div className="row">

                        <div className="col-lg-4">
                            <div className="info rounded p-3" style={{ background: '#f8f9fa' }}>
                                <div className="d-flex mb-2 gap-2">
                                    <FaLocationArrow className='icon' />
                                    <div>
                                        <h4>Location:</h4>
                                        <p>216, FullStack Developers Heaven, 7th Avenue, Abuja, Nigeria 07206</p>
                                    </div>
                                </div>

                                <div className="d-flex mb-2 gap-2">
                                    <FaEnvelope className='icon' />
                                    <div>
                                        <h4>Email:</h4>
                                        <p>support@doctoroncall.com</p>
                                    </div>
                                </div>

                                <div className="d-flex mb-2 gap-2">
                                    <FaPhoneAlt className='icon' />
                                    <div>
                                        <h4>Call:</h4>
                                        <p>+234 08751 030425</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-8">
                            <div className="mb-5 p-2 rounded" style={{ background: '#f8f9fa' }}>
                                <form className="row form-row" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="col-md-6">
                                        <div className="form-group mb-2 card-label">
                                            <label>First Name</label>
                                            <input type="text" name="" id="" placeholder="First Name" className="form-control mb-3" />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group mb-2 card-label">
                                            <label>Last Name</label>
                                            <input type="text" name="" id="" placeholder="Last Name" className="form-control mb-3" />
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="form-group mb-2 card-label">
                                            <label>Email</label>
                                            <input type="email" name="" id="" placeholder="Email" className="form-control mb-3" />
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="form-group mb-2 card-label">
                                            <label>Subject</label>
                                            <input type="text" name="" id="" placeholder="enter your subject" className="form-control mb-3" />
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label className='form-label'>Subject</label>
                                            <textarea name="" id="" cols="30" rows="10" placeholder="enter your message" className="form-control mb-3" />
                                        </div>
                                    </div>

                                    <div className="text-center mt-3 mb-5">
                                        <button type='submit' className="appointment-btn">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Contact