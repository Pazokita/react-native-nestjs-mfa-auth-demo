import axiosInstance from "../../../shared/utils/axiosInstance";


export const login = async (email: string, password: string) => {
    const response = await axiosInstance.post('/auth/login', {
      email,
      password,
    });
  
    return response.data;
  };

export const verifyOtp = async (otp: string, sessionToken: string) => {
  const response = await axiosInstance.post('/auth/verify-otp', {
    otp,
    sessionToken,
  });

  return response.data;
};