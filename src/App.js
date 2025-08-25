import { createContext, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home/Home/Home';
import SignInForm from './components/Login/SignInForm';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import DoctorBooking from './components/Booking/DoctorBooking/DoctorBooking';
import BookingSuccess from './components/Booking/BookingSuccess';
import BookingInvoice from './components/Booking/BookingInvoice/BookingInvoice';
import DoctorProfile from './components/Doctor/DoctorProfile/DoctorProfile';
import Appointments from './components/Doctor/Appointments/Appointments';
import MyPatients from './components/Doctor/MyPatients/MyPatients';
import Reviews from './components/Doctor/Reviews/Reviews';
import Schedule from './components/Doctor/Schedule/Schedule';
import ProfileSetting from './components/Doctor/ProfileSetting/ProfileSetting';
import ChangePassword from './components/Doctor/ChangePassword/ChangePassword';
import AdminDashboard from './components/Admin/Dashboard/Dashboard';
import AdminAppointments from './components/Admin/Appointments/Appointments';
import Doctors from './components/Admin/Doctors/Doctors';
import Patients from './components/Admin/Patients/Patients';
import Profile from './components/Admin/Profile/Profile';
import Transactions from './components/Admin/Transactions/Transactions';
import Specialites from './components/Admin/Specialites/Specialites';
import AdminReviews from './components/Admin/Reviews/Reviews'
import PatientFavouriteDoctor from './components/Doctor/PatientFavourite/PatientFavourite';
import DoctorInvoice from './components/Doctor/Invoice/DoctorInvoice';
import SearchDoctor from './components/Doctor/SearchDoctor/SearchDoctor';
import Blogs from './components/Doctor/Blogs/Blogs';
import BlogsEdit from './components/Doctor/Blogs/BlogsEdit';
import AddBlog from './components/Doctor/Blogs/AddBlog';
import Blog from './components/Blog/Blog';
import BlogDetails from './components/Blog/BlogDetails';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Service from './components/Service/Service';
import Dashboard from './components/Doctor/Dashboard/Dashboard';
import AppointmentPage from './components/Appointment/AppointmentPage';
import TrackAppointment from './components/TrackAppointment/TrackAppointment';
import Treatment from './components/Doctor/Treatment/Treatment';
import Prescription from './components/Doctor/Prescription/Prescription';
import PrescriptionView from './components/Doctor/Prescription/PrescriptionView';
import TreatmentEdit from './components/Doctor/Treatment/TreatmentEdit';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/blog', element: <Blog /> },
  { path: '/blog/:id', element: <BlogDetails /> },
  { path: '/contact', element: <Contact /> },
  { path: '/about', element: <About /> },
  { path: '/service', element: <Service /> },
  { path: '/login', element: <SignInForm /> },
  { path: '/appointment', element: <AppointmentPage /> },
  { path: '/track-appointment', element: <TrackAppointment /> },

  { path: '/doctors', element: <SearchDoctor /> },
  { path: '/doctors/profile/:id', element: <DoctorProfile /> },

  // ✅ Patient Dashboard
  {
    path: '/patient/dashboard',
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
  },
  {
    path: '/patient/dashboard/favourite',
    element: <PrivateRoute><PatientFavouriteDoctor /></PrivateRoute>,
  },
  {
    path: '/patient/dashboard/profile-setting',
    element: <PrivateRoute><ProfileSetting /></PrivateRoute>,
  },
  {
    path: '/patient/dashboard/change-password',
    element: <PrivateRoute><ChangePassword /></PrivateRoute>,
  },

  // ✅ Doctor Dashboard
  {
    path: '/doctor/dashboard',
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
  },
  { path: '/doctor/dashboard/my-patients', element: <PrivateRoute><MyPatients /></PrivateRoute> },
  { path: '/doctor/dashboard/reviews', element: <PrivateRoute><Reviews /></PrivateRoute> },
  { path: '/doctor/dashboard/schedule', element: <PrivateRoute><Schedule /></PrivateRoute> },
  { path: '/doctor/dashboard/appointments', element: <PrivateRoute><Appointments /></PrivateRoute> },
  { path: '/doctor/dashboard/prescription', element: <PrivateRoute><Prescription /></PrivateRoute> },
  { path: '/doctor/dashboard/prescription/:id', element: <PrivateRoute><PrescriptionView /></PrivateRoute> },
  { path: '/doctor/dashboard/appointment/treatment/:id', element: <PrivateRoute><Treatment /></PrivateRoute> },
  { path: '/doctor/dashboard/appointment/treatment/edit/:id', element: <PrivateRoute><TreatmentEdit /></PrivateRoute> },
  { path: '/doctor/dashboard/invoices', element: <PrivateRoute><DoctorInvoice /></PrivateRoute> },
  { path: '/doctor/dashboard/blogs', element: <PrivateRoute><Blogs /></PrivateRoute> },
  { path: '/doctor/dashboard/blogs/:id', element: <PrivateRoute><BlogsEdit /></PrivateRoute> },
  { path: '/doctor/dashboard/blogs/create', element: <PrivateRoute><AddBlog /></PrivateRoute> },
  { path: '/doctor/dashboard/profile-setting', element: <PrivateRoute><ProfileSetting /></PrivateRoute> },
  { path: '/doctor/dashboard/change-password', element: <PrivateRoute><ChangePassword /></PrivateRoute> },

  // Booking
  { path: '/booking/:doctorId', element: <DoctorBooking /> },
  { path: '/booking/success/:id', element: <BookingSuccess /> },
  { path: '/booking/invoice/:id', element: <BookingInvoice /> },

  // Admin Dashboard
  { path: '/admin/dashboard', element: <PrivateRoute><AdminDashboard /></PrivateRoute> },
  { path: '/admin/appointments', element: <PrivateRoute><AdminAppointments /></PrivateRoute> },
  { path: '/admin/doctors', element: <PrivateRoute><Doctors /></PrivateRoute> },
  { path: '/admin/patients', element: <PrivateRoute><Patients /></PrivateRoute> },
  { path: '/admin/profile', element: <PrivateRoute><Profile /></PrivateRoute> },
  { path: '/admin/reviews', element: <PrivateRoute><AdminReviews /></PrivateRoute> },
  { path: '/admin/transaction', element: <PrivateRoute><Transactions /></PrivateRoute> },
  { path: '/admin/specialites', element: <PrivateRoute><Specialites /></PrivateRoute> },
]);

function App() {

  useEffect(() => {
  axios.get(`${process.env.REACT_APP_API_URL}`)
    .then(res => console.log(res.data))
    .catch(err => console.error(err));
  }, []);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
