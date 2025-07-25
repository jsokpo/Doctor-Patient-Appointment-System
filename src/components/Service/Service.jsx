import React from 'react'
import SubHeader from '../Shared/SubHeader'
import Footer from '../Shared/Footer/Footer'
import Header from '../Shared/Header/Header'
import img from '../../images/features/baby.png'
import { Link } from 'react-router-dom'
import doctorBg from '../../images/img/doctors-bg.jpg';

const Service = () => {
  const weArePleaseStyle = {
    backgroundColor: "antiquewhite",
    height: "60vh",
    background: `url(${doctorBg}) no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    padding: "10px",
    position: "relative",
    marginTop: 200,
    marginBottom: 100
  }
  return (
    <>
      <Header />
      <SubHeader title="Service" subtitle="You can know more about our cole values to services and commitment." />

      <div class="container" style={{ marginTop: 200, marginBottom: 100 }}>
        <div class="row">
          {
            Array(6).fill(null).map((_item, id) => (
              <div class="col-lg-4 col-md-6 col-sm-6" key={id + 6}>
                <div class="card shadow border-0 mb-5">
                  <img src={img} alt="" class="img-fluid" style={{ maxHeight: '17rem', objectFit: 'cover' }} />
                  <div class="p-2">
                    <h4 class="mt-4 mb-2">Child care</h4>
                    <p class="mb-4">We are committed to ensure child care is part of our enormous consulting activity. We can recommend and support healthy checks on diet for supplementary medical assistance.</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      <section style={weArePleaseStyle}>
        <div class="container" style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}>
          <div class="row">
            <div class="col-lg-7">
              <div class="d-flex align-items-center">
                <div className='mb-4 section-title text-center'>
                  <h2 className='text-uppercase'>We are pleased to offer you unequivocal assistance to comfort of health and mind.</h2>
                  <p className='form-text'>Visit us today discuss in detail how you plan to practice and restore confidence to you health.</p>
                  <Link to={'/doctors'} className="btn-get-started scrollto">Get Started</Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </>
  )
}

export default Service