import React from 'react';
import DoctorDashCard from './doctor/DoctorDashCard';
import useAuthCheck from '../../../redux/hooks/useAuthCheck';
import DashboardLayout from '../DashboardLayout/DashboardLayout';
import DashboardPage from './doctor/DashboardPage';
import PatientDashboard from './PatientDashboard';

const Dashboard = () => {
  const { role } = useAuthCheck();
  const normalizedRole = role ? role.toLowerCase().trim() : '';

  return (
    <DashboardLayout>
      <div className="row">
        {/* Doctor dashboard (profile + appointments) */}
        {normalizedRole === 'doctor' && (
          <div className="col-md-12 rounded mb-3" style={{ background: '#f8f9fa' }}>
            <h5 className="text-title my-3">Doctor Dashboard</h5>
            <DoctorDashCard />
            <div className="mt-3">
              <h5 className="text-title">Appointments</h5>
              <DashboardPage />
            </div>
          </div>
        )}

        {/* Patient dashboard */}
        {normalizedRole === 'patient' && (
          <div className="col-md-12 rounded" style={{ background: '#f8f9fa' }}>
            <h5 className="text-title my-3">My Appointments</h5>
            <PatientDashboard />
          </div>
        )}

        {/* Optional fallback while role is not ready */}
        {!normalizedRole && (
          <div className="col-md-12">
            <p>Loading dashboard…</p>
          </div>
        )}

        {/* Optional unknown role handler */}
        {normalizedRole && !['doctor', 'patient'].includes(normalizedRole) && (
          <div className="col-md-12">
            <p>Unknown role: {role}</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
