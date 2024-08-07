import { SignupProps } from "../pages/Signup";
import { httpClient } from "./http";

export const signUp = async(userData: SignupProps) => {
  const response = await httpClient.post("/user/join", userData);
  return response.data;
}

export const resetRequested = async (data: SignupProps) => {
  const response = await httpClient.post("/user/reset", data);
  return response.data;
}

export const resetPassword = async (data: SignupProps) => {
  const response = await httpClient.put("/users/reset", data);
  return response.data;
}

interface LoginResponse {
  token: string;
}

export const login = async (data: SignupProps) => {
  const response = await httpClient.post<LoginResponse>("/users/login", data);
  return response.data;
}