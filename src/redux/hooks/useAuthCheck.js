import { useEffect, useState } from "react";
import { useGetDoctorQuery } from "../api/doctorApi";
import { useGetPatientQuery } from "../api/patientApi";
import { getUserInfo } from "../../service/auth.service";

export default function useAuthCheck() {
    const [authChecked, setAuthChecked] = useState(false);
    const [userId, setUserId] = useState(null);
    const [role, setRole] = useState(null);

    // Read local storage once on mount
    useEffect(() => {
        const localAuth = getUserInfo();
        if (localAuth?.userId && localAuth?.role) {
            setUserId(localAuth.userId);
            setRole(localAuth.role);
        }
    }, []);

    // Fetch only the query that matches the role
    const isDoctor = role === "doctor";
    const isPatient = role === "patient";

    const {
        data: doctorData,
        isSuccess: doctorSuccess,
        isError: doctorError,
        isLoading: doctorLoading
    } = useGetDoctorQuery(userId, { skip: !isDoctor || !userId });

    const {
        data: patientData,
        isSuccess: patientSuccess,
        isError: patientError,
        isLoading: patientLoading
    } = useGetPatientQuery(userId, { skip: !isPatient || !userId });

    // Update auth check when query finishes
    useEffect(() => {
        if (isDoctor) {
            setAuthChecked(doctorSuccess && !doctorError);
        } else if (isPatient) {
            setAuthChecked(patientSuccess && !patientError);
        }
    }, [isDoctor, isPatient, doctorSuccess, doctorError, patientSuccess, patientError]);

    return {
        authChecked,
        role,
        userId,
        data: isDoctor ? doctorData : patientData,
        loading: doctorLoading || patientLoading,
        error: doctorError || patientError
    };
}
