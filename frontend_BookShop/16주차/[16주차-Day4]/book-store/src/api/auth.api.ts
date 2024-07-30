import { SignupProps } from "../pages/Signup";
import { httpClient } from "./http";

export const signUp = async(userData: SignupProps) => {
  const response = await httpClient.post("/user/join", userData);
  return response.data;
}