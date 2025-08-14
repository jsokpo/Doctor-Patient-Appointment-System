import React from 'react';
import DoctorDashCard from './doctor/DoctorDashCard';
import useAuthCheck from '../../../redux/hooks/useAuthCheck';
import DashboardLayout from '../DashboardLayout/DashboardLayout';
import DashboardPage from './doctor/DashboardPage';
import PatientDashboard from './PatientDashboard';

const Dashboard = () => {
    const { role, user, loading } = useAuthCheck(); // Ensure hook returns user & loading
    const normalizedRole = role?.toLowerCase().trim();

    // Show loading until auth check is complete
    if (loading) {
        return (
            <DashboardLayout>
                <p>Loading dashboard...</p>
            </DashboardLayout>
        );
    }

    return (
        <DashboardLayout>
            {normalizedRole === 'doctor' && (
                <>
                    {/* Doctor profile summary */}
                    <DoctorDashCard
                        name={user?.name}
                        specialization={user?.specialization}
                        profilePicture={user?.profilePicture}
                        totalAppointments={user?.appointments?.length || 0}
                        nextAppointment={user?.appointments?.[0]}
                    />

                    {/* Doctor's appointments list */}
                    <div className="col-md-12 rounded" style={{ background: '#f8f9fa' }}>
                        <h5 className="text-title">My Appointments</h5>
                        <DashboardPage appointments={user?.appointments} />
                    </div>
                </>
            )}

            {normalizedRole === 'patient' && (
                <div className="col-md-12 rounded" style={{ background: '#f8f9fa' }}>
                    <h5 className="text-title my-3">My Appointments</h5>
                    <PatientDashboard appointments={user?.appointments} />
                </div>
            )}
        </DashboardLayout>
    );
};

export default Dashboard;
