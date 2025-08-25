import { useEffect, useState } from "react";
import { useGetDoctorQuery } from "../api/doctorApi";
import { useGetPatientQuery } from "../api/patientApi";
import { getUserInfo } from "../../service/auth.service";

export default function useAuthCheck() {
    const [authChecked, setAuthChecked] = useState(false);
    const [userId, setUserId] = useState('');
    const [isSkip, setIsSkip] = useState(true);
    const [role, setRole] = useState("");
    
    // Queries
    const { data: doctorData, isError: dIsError, isSuccess: dIsSuccess } = useGetDoctorQuery(userId, { skip: isSkip });
    const { data: patientData, isError: pIsError, isSuccess: pIsSuccess } = useGetPatientQuery(userId, { skip: isSkip });

    useEffect(() => {
        const localAuth = getUserInfo();

        if (localAuth && localAuth !== null) {
            const normalizedRole = localAuth.role?.toLowerCase();
            setRole(normalizedRole);
            setUserId(localAuth?.userId);
            setIsSkip(false);
        }
    }, []);

    useEffect(() => {
        if (role === "doctor" && dIsSuccess && !dIsError) {
            setAuthChecked(true);
        }
        if (role === "patient" && pIsSuccess && !pIsError) {
            setAuthChecked(true);
        }
    }, [role, dIsSuccess, dIsError, pIsSuccess, pIsError]);

    return {
        authChecked,
        data: role === "doctor" ? doctorData : patientData,
        role
    };
}
