import React from 'react';
import BreadCrumb from '../../UI/BreadCrumb';
import Footer from '../../Shared/Footer/Footer';
import logo from '../../../images/logo.png';
import './BookingInvoice.css';
import { useParams } from 'react-router-dom';
import { useGetAppointmentedPaymentInfoQuery } from '../../../redux/api/appointmentApi';
import moment from 'moment';
import { Empty } from 'antd';
import Header from '../../Shared/Header/Header';

const BookingInvoice = () => {
    const { id } = useParams();
    const {data, isLoading, isError} = useGetAppointmentedPaymentInfoQuery(id)

    let content = null;
    if (isLoading) content = <div>Loading ...</div>
    if (!isLoading && isError) content = <div>Something went Wrong!</div>
    if (!isLoading && !isError && !data) content = <Empty />
    if (!isLoading && !isError && data) content =
        <>
            <div className="col-lg-8 offset-lg-2">
                <div className="invoice-content">
                    <div className="invoice-item">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="invoice-logo">
                                    <img src={logo} alt="" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <p className="invoice-details">
                                    <strong>Order:</strong> #00124 <br />
                                    <strong>Issued:</strong> {moment(data.createdAt).format('LL')}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="invoice-item">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="invoice-info">
                                    <strong className="customer-text">Invoice From</strong>
                                    <p className="invoice-details invoice-details-two">
                                        Dr.{data?.appointment?.doctor?.firstName + ' ' + data?.appointment?.doctor?.lastName} <br />
                                        {data?.appointment?.doctor?.address}, {data?.appointment?.doctor?.city},<br />
                                        {data?.appointment?.doctor?.country} <br />
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="invoice-info invoice-info2">
                                    <strong className="customer-text">Invoice To</strong>
                                    <p className="invoice-details">
                                    {data?.appointment?.patient?.firstName + ' ' + data?.appointment?.patient?.lastName} <br />
                                    {data?.appointment?.patient?.address}, {data?.appointment?.patient?.city} ,<br />
                                    {data?.appointment?.patient?.country} <br />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="invoice-item">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="invoice-info">
                                    <strong className="customer-text">Payment Method</strong>
                                    <p className="invoice-details invoice-details-two">
                                        {data?.paymentType} <br />
                                        XXXXXXXXXXXX-2541 <br />
                                        {data?.paymentMethod}<br />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="invoice-item invoice-table-wrap">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="table-responsive">
                                    <table className="invoice-table table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Description</th>
                                                <th className="text-center">Doctor Fee</th>
                                                <th className="text-center">VAT</th>
                                                <th className="text-right">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>General Consultation</td>
                                                <td className="text-center">${data?.DoctorFee}</td>
                                                <td className="text-center">${data?.vat}</td>
                                                <td className="text-right">${data?.totalAmount}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="col-md-12 col-xl-12 me-auto">
                                <div className="table-responsive">
                                    <table className="invoice-table-two table">
                                        <tbody>
                                            <tr>
                                                <th>Subtotal:</th>
                                                <td><span>${data?.totalAmount}</span></td>
                                            </tr>
                                            <tr>
                                                <th>Discount:</th>
                                                <td><span>0%</span></td>
                                            </tr>
                                            <tr>
                                                <th>Total Amount:</th>
                                                <td><span>${data?.totalAmount}</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="other-info">
                        <h4>Other information</h4>
                        <p className="text-muted mb-0">This page has gathered the required information to pay your bill. Please contact support if certain details are not correct</p>
                    </div>

                </div>
            </div>
        </>
    return (
        <>
            <Header />
            <BreadCrumb />

            <div className="content" style={{ marginBottom: '7rem' }}>
                <div className="container-fluid">
                    <div className="row">
                        {content}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default BookingInvoice;