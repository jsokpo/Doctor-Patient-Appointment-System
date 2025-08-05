import React from 'react';
import img1 from '../../../images/specialities/specialities-01.png';
import img2 from '../../../images/specialities/specialities-02.png';
import img3 from '../../../images/specialities/specialities-03.png';
import img4 from '../../../images/specialities/specialities-04.png';
import img5 from '../../../images/specialities/specialities-05.png';
import { FaCheckDouble } from "react-icons/fa";
import './index.css';

const ClinicAndSpecialities = () => {
	return (
		<section className="section-specialities position-relative">
			<div className="container-fluid">
				<div className="mb-5 section-title text-center">
					<h2>Clinic and Specialities</h2>
					<p className="m-0">
						Our Clinic and Specialities showcase our desire to be more than just doctors. 
						We are fully committed and enlightened on the evolving health strategies to living and well-being.
					</p>
				</div>

				<div className="row justify-content-center">
					<div className="col-md-9">
						<div className="specialities-slider d-flex flex-wrap justify-content-center align-items-center gap-4">
							{[
								{ img: img1, name: "Urology" },
								{ img: img2, name: "Neurology" },
								{ img: img3, name: "Orthopedic" },
								{ img: img4, name: "Cardiologist" },
								{ img: img5, name: "Dentist" }
							].map((item, idx) => (
								<div className="speciality-item" key={idx}>
									<div className="speciality-img">
										<img src={item.img} alt={item.name} />
										<span><i><FaCheckDouble /></i></span>
									</div>
									<p>{item.name}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ClinicAndSpecialities;
