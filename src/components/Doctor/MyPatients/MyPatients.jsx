import React from 'react';
import img from '../../../images/doc/doctor3.jpg';
import DashboardLayout from '../DashboardLayout/DashboardLayout';
import { useGetDoctorPatientsQuery } from '../../../redux/api/appointmentApi';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { FaClock, FaEnvelope, FaLocationArrow, FaPhoneAlt } from "react-icons/fa";

const MyPatients = () => {
  const { data, isLoading, isError, error } = useGetDoctorPatientsQuery();

  let content;

  if (isLoading) {
    content = <div>Loading patients...</div>;
  } 
  else if (isError) {
    // Check if backend returned a structured error
    const errMsg = error?.data?.message || "Unable to fetch patients";
    content = <div>{errMsg}</div>;
  } 
  else {
    // Sometimes backend returns { patients: [] } instead of []
    const patients = Array.isArray(data) ? data : data?.patients || [];

    if (patients.length === 0) {
      content = <div>No patients found</div>;
    } else {
      content = (
        <>
          {patients.map((item, idx) => (
            <div 
              key={item?._id || idx} 
              className="w-100 mb-3 rounded p-3 text-center" 
              style={{ background: '#f8f9fa' }}
            >
              <Link to={'/'} className="my-3 patient-img">
                <img src={img} alt="patient" />
              </Link>
              <div className="patients-info mt-4">
                <h5>{item?.firstName} {item?.lastName}</h5>
                <div className="info">
                  <p><FaClock className='icon' /> {moment(item?.appointmentTime).format("MMM Do YY")}</p>
                  <p><FaLocationArrow className='icon' /> {item?.address}</p>
                  <p><FaEnvelope className='icon' /> {item?.email}</p>
                  <p><FaPhoneAlt className='icon' /> {item?.mobile}</p>
                </div>
              </div>
            </div>
          ))}
        </>
      );
    }
  }

  return (
    <DashboardLayout>
      <div className="row">
        <div className="col-md-6 col-lg-4 col-xl-3">
          {content}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MyPatients;
