import React from 'react'
import './index.css';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import img2 from '../../images/doc/doctor 5.jpg'
import docImg from '../../images/doc/doctor3.jpg'
import docImg2 from '../../images/doc/doctor6.jpg'
import docImg3 from '../../images/doc/doctor8.jpg'
import docImg4 from '../../images/doc/doctor7.jpg'
import SubHeader from '../Shared/SubHeader';

const doctors = [
  {
    id: 1,
    name: "John Amili",
    specialty: "Urology Specialist",
    image: docImg,
  },
  {
    id: 2,
    name: "Agnes Ogufo",
    specialty: "Neurology Specialist",
    image: docImg2,
  },
  {
    id: 3,
    name: "Jeff Obandele",
    specialty: "Orthopedic Specialist",
    image: docImg3,
  },
  {
    id: 4,
    name: "Mary Akiro",
    specialty: "Cardiology Specialist",
    image: docImg4,
  },
];

const About = () => {
    return (
        <>
            <Header />
            <SubHeader title="about us" subtitle="You can know more about our cole values and achievements."/>
            <div className="container" style={{ marginBottom: 100, marginTop: 100 }}>
                <div className="row p-5">
                    <div className="col-lg-4">
                        <div className='section-title text-center'>
                            <h2 className='text-uppercase'>Our Doctors Acheivement</h2>
                            <p className='form-text m-0'>Our doctors are inclined to the best professional practices for health technology development models.</p>
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <p>We are constantly engaging with high cabibre prospectus to evolve with the rythm of service and growth to patient diagnosis at the highest ethical process on result or treatment delivery. We span on meticulous ideas in accord with the hippocratic oath to make service and commitment transparent to patients.</p>
                        <img src={img2} alt="" className="img-fluid rounded shadow" />
                    </div>
                </div>
            </div>

            <div className="container" style={{ marginBottom: 100, marginTop: 100 }}>
                <div className="row">
                    {
                        Array(4).fill(null).map((_item, id) => (
                            <div className="col-lg-3 col-md-6" key={id + 4}>
                                <div className="card shadow border-0 mb-5 mb-lg-0">
                                    <img src={img2} alt="" className="m-0 img-fluid w-100" />
                                    <div className='p-2'>
                                        <h4 className="mt-3" style={{ color: '#223a66' }}>Healthcare for Kids</h4>
                                        <p className='form-text'>We are capable of optimum service in paediatric care that characterises counselling and observation as means of deeper unndestanding of causes and control.</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="container" style={{ marginBottom: 100, marginTop: 100 }}>
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className='mb-4 section-title text-center'>
                            <h2 className='text-uppercase'>Meet Our Specialist</h2>
                            <p className='form-text m-0'>Visit our specialist and learn better ways to control and maintain body health stardards.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                {doctors.map((doctor) => (
                    <div className="col-lg-3 col-md-6 col-sm-6" key={doctor.id}>
                    <div className="card shadow border-0 mb-5 mb-lg-0">
                        <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="img-fluid w-100"
                        style={{ height: '950px', objectFit: 'cover' }}
                        />
                        <div className="p-2">
                        <h4 className="mt-4 mb-0" style={{ color: '#223a66' }}>
                            <a>{doctor.name}</a>
                        </h4>
                        <p>{doctor.specialty}</p>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            </div>


            <div className="container say-about" style={{ marginBottom: 100, marginTop: 100 }}>
                <div className="row">
                    <div className="col-lg-6 offset-lg-6">
                        <div className='mb-4 section-title text-center'>
                            <h2 className='text-uppercase'>What Doctor's Say</h2>
                            <p className='form-text m-0'>Our patients are kind and understanding. They are always willing to give precise information about health challenges, leaving behind torns of tips on how we can treat and recommend on diagnosis. </p>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6 offset-lg-6">
                        <div className="my-2">
                            <h4 style={{ color: '#223a66' }} className='my-0'>Amazing service!</h4>
                            <span>Eluma Odowa</span>
                        </div>
                        <p className='form-text'>
                            They provide comprehensive service and support with regular review and update to recommendations as report continues to expand on research.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About