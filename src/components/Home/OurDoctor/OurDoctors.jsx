import './index.css';
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { Empty, Spin } from 'antd';
import { useGetDoctorsQuery } from '../../../redux/api/doctorApi';

const OurDoctors = () => {
  const { data, isLoading, isError, error } = useGetDoctorsQuery({ limit: 4 });
  const doctors = data?.doctors;

  let content = null;

  if (isLoading) {
    content = (
      <div className="text-center w-100">
        <Spin tip="Loading doctors..." />
      </div>
    );
  } else if (isError) {
    console.error("Error fetching doctors:", error);
    content = <div className="text-danger">Something went wrong!</div>;
  } else if (!doctors || doctors.length === 0) {
    content = <Empty description="No doctors found" />;
  } else {
    content = (
      <>
        {doctors.map((item, key) => (
          <div className="col-lg-6 mt-3" key={key}>
            <div className="member d-flex align-items-start">
              <div className="pic">
                {item.img && <img src={item.img} className="img-fluid" alt={item.firstName} />}
              </div>
              <div className="member-info">
                <h4>{item.firstName} {item.lastName}</h4>
                <span>{item.designation}</span>
                <p>{item.specialization}</p>
                <div className="social">
                  <a><FaFacebookSquare className="icon" /></a>
                  <a><FaInstagramSquare className="icon" /></a>
                  <a><FaLinkedin className="icon" /></a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }

  return (
    <section id="doctors" className="doctors">
      <div className="container">
        <div className="section-title text-center mb-3">
          <h2>OUR DOCTORS</h2>
          <p className="form-text">
            Our Doctors are growth-inclined to maintaining trust and competency on patient psychology to privacy and ethical conduct on health diagnosis. Book us today and experience our capabilities.
          </p>
        </div>
        <div className="row">{content}</div>
      </div>
    </section>
  );
};

export default OurDoctors;
