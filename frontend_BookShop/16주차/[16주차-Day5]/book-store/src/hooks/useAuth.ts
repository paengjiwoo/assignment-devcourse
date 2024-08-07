import { useAuthStore } from "@/store/authStore";
import { LoginProps } from "../pages/Login";
import { login, signUp } from "../api/auth.api";
import { useAlert } from "./useAlert";
import { useNavigate } from "react-router-dom";
import Signup, { SignupProps } from "../pages/Signup";

export const useAuth = () => {
  const { showAlert } = useAlert();
  const navigate = useNavigate();

  const { storeLogin, storeLogout, isLoggedIn} = useAuthStore();

  const useLogin = (data: LoginProps) => {
    login(data).then((res) => {
      storeLogin(res.token)

      showAlert("로그인이 완료되었습니다.");
      navigate("/");
    }, (error) => {
      showAlert("로그인에 실패하였습니다.");
    })
  }

  const userSignup = (data: SignupProps) => {
    signUp(data).then(res => {
      showAlert('회원가입이 완료되었습니다.');
      navigate("/login");
    })
  }

  const userResetPassword = (data: SignupProps) => {
    
  };

  return { useLogin, userSignup, userResetPassword };
};