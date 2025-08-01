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
  {path: '/track-appointment', element: <TrackAppointment/>},

  { path: '/doctors', element: <SearchDoctor /> },
  { path: '/doctors/profile/:id', element: <DoctorProfile /> },

  { path: '/dashboard', element: <Dashboard /> },
  { path: '/dashboard/my-patients', element: <MyPatients /> },
  { path: '/dashboard/reviews', element: <Reviews /> },
  { path: '/dashboard/schedule', element: <Schedule /> },
  { path: '/dashboard/appointments', element: <Appointments /> },
  { path: '/dashboard/prescription', element: <Prescription /> },
  { path: '/dashboard/prescription/:id', element: <PrescriptionView /> },
  { path: '/dashboard/appointment/treatment/:id', element: <Treatment /> },
  { path: '/dashboard/appointment/treatment/edit/:id', element: <TreatmentEdit /> },

  { path: '/dashboard/change-password', element: <ChangePassword /> },
  { path: '/dashboard/profile-setting', element: <ProfileSetting /> },
  { path: '/dashboard/favourite', element: <PatientFavouriteDoctor /> },
  { path: '/dashboard/invoices', element: <DoctorInvoice /> },
  { path: '/dashboard/blogs', element: <Blogs /> },
  { path: '/dashboard/blogs/:id', element: <BlogsEdit /> },
  { path: '/dashboard/blogs/create', element: <AddBlog /> },

  { path: '/booking/:doctorId', element: <DoctorBooking /> },
  { path: '/booking/success/:id', element: <BookingSuccess /> },
  { path: '/booking/invoice/:id', element: <BookingInvoice /> },

  // Dashboard
  { path: '/admin/dashboard', element: <AdminDashboard /> },
  { path: '/admin/appointments', element: <AdminAppointments /> },
  { path: '/admin/doctors', element: <Doctors /> },
  { path: '/admin/patients', element: <Patients /> },
  { path: '/admin/profile', element: <Profile /> },
  { path: '/admin/reviews', element: <AdminReviews /> },
  { path: '/admin/transaction', element: <Transactions /> },
  { path: '/admin/specialites', element: <Specialites /> },

  // { path: '/appointment', element: <PrivateRoute><AppointMent /></PrivateRoute> },
])

function App() {

  useEffect(() => {
    axios.get('http://localhost:5000/')
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
