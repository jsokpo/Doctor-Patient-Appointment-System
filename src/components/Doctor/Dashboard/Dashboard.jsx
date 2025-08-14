import React from 'react';
import DoctorDashCard from './doctor/DoctorDashCard';
import useAuthCheck from '../../../redux/hooks/useAuthCheck';
import DashboardLayout from '../DashboardLayout/DashboardLayout';
import DashboardPage from './doctor/DashboardPage';
import PatientDashboard from './PatientDashboard';

const Dashboard = () => {
    const { role, user, loading } = useAuthCheck(); // Assume useAuthCheck returns user info & loading state
    const normalizedRole = role?.toLowerCase().trim();

    if (loading) {
        return (
            <DashboardLayout>
                <p>Loading dashboard...</p>
            </DashboardLayout>
        );
    }

    return (
        <DashboardLayout>
            {/* Doctor top summary card with attributes */}
            {normalizedRole === 'doctor' && (
                <DoctorDashCard
                    name={user?.name}
                    specialization={user?.specialization}
                    profilePicture={user?.profilePicture}
                    totalAppointments={user?.appointments?.length || 0}
                    nextAppointment={user?.appointments?.[0]}
                />
            )}

            <div className="row">
                {normalizedRole === 'patient' ? (
                    <div className="col-md-12 rounded" style={{ background: '#f8f9fa' }}>
                        <h5 className="text-title my-3">My Appointments</h5>
                        <PatientDashboard appointments={user?.appointments} />
                    </div>
                ) : (
                    <div className="col-md-12 rounded" style={{ background: '#f8f9fa' }}>
                        <h5 className="text-title">Appointments</h5>
                        <DashboardPage
                            appointments={user?.appointments}
                            doctorId={user?._id}
                        />
                    </div>
                )}
            </div>
        </DashboardLayout>
    );
};

export default Dashboard;
