import { useEffect, useState } from "react";
import { useGetDoctorQuery } from "../api/doctorApi";
import { useGetPatientQuery } from "../api/patientApi";
import { getUserInfo } from "../../service/auth.service";

export default function useAuthCheck() {
  const [userId, setUserId] = useState("");
  const [isSkip, setIsSkip] = useState(true);
  const [role, setRole] = useState("");
  const [authChecked, setAuthChecked] = useState(false);

  // Queries
  const {
    data: doctorData,
    isError: dIsError,
    isSuccess: dIsSuccess,
    isLoading: dIsLoading,
  } = useGetDoctorQuery(userId, { skip: isSkip });

  const {
    data: patientData,
    isError: pIsError,
    isSuccess: pIsSuccess,
    isLoading: pIsLoading,
  } = useGetPatientQuery(userId, { skip: isSkip });

  // On mount: load local user info
  useEffect(() => {
    const localAuth = getUserInfo();

    if (localAuth) {
      const normalizedRole = localAuth.role?.toLowerCase();
      setRole(normalizedRole);
      setUserId(localAuth.userId);
      setIsSkip(false);
    }
  }, []);

  // Check if authenticated based on query status
  useEffect(() => {
    if (role === "doctor" && dIsSuccess && !dIsError) {
      setAuthChecked(true);
    }
    if (role === "patient" && pIsSuccess && !pIsError) {
      setAuthChecked(true);
    }
  }, [role, dIsSuccess, dIsError, pIsSuccess, pIsError]);

  // Choose correct data only when available
  let finalData = null;
  if (role === "doctor" && dIsSuccess && doctorData) {
    finalData = doctorData;
  }
  if (role === "patient" && pIsSuccess && patientData) {
    finalData = patientData;
  }

  return {
    authChecked,
    role,
    data: finalData,
    isLoading: dIsLoading || pIsLoading,
  };
}
