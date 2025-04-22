import axiosInstance from "../../../shared/utils/axiosInstance";


export const login = async (email: string, password: string) => {
    const response = await axiosInstance.post('/auth/login', {
      email,
      password,
    });
  
    return response.data;
  };

export const verifyOtp = async (code: string, sessionToken: string) => {
  const response = await axiosInstance.post('/auth/verify-otp', {
    code,
    sessionToken,
  });

  return response.data;
};