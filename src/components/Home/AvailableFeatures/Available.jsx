import React from 'react';
import img from '../../../images/features/feature.png';
import './index.css';
import AvailableServiceContent from './AvailableServiceContent';

const Availabe = () => {

	return (
		<section className="container section-features">
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-5 features-img">
						<img src={img} className="img-fluid" alt="" />
					</div>
					<div className="col-md-7">
						<div className='mb-4 section-title text-center'>
							<h2 className='text-uppercase'>Availabe Service</h2>
							<p className='m-0'>Our services are well equiped to adapt the modern infrastructure on health re-engineering to prognosis and diagnosis.</p>
						</div>
						<AvailableServiceContent/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Availabe;