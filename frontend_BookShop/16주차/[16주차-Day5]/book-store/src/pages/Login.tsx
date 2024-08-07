import styled from "styled-components";
import Title from "../components/common/Title";
import InputText from "../components/common/InputText";
import Button from "../components/common/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { login, signUp } from "../api/auth.api";
import { useAlert } from "../hooks/useAlert";
import { SignupStyle } from "./Signup";
import { useAuthStore } from "../store/authStore";
import { useAuth } from "../hooks/useAuth";

export interface LoginProps {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const { showAlert } = useAlert();
  
  const { isLoggedIn, storeLogin, storeLogout} = useAuthStore();
  const { useLogin } = useAuth();

  const { 
    register, 
    handleSubmit, 
    formState: { errors }} = 
    useForm<LoginProps>();

  const onSubmit = (data: LoginProps) => {
    useLogin(data)
  };

  return(
    <>
      <Title size="large">회원가입</Title>
      <SignupStyle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <InputText 
              placeholder="이메일" 
              inputType="email"
              {...register("email", { required: true})}
            />
            {errors.email && 
              <p className="error-text">이메일을 입력해주세요.</p>
            }
          </fieldset>
          <fieldset>
            <InputText 
              placeholder="비밀번호" 
              inputType="password"
              {...register("password", { required: true})}
            />
            {errors.password && 
              <p className="error-text">비밀번호를 입력해주세요.</p>
            }
          </fieldset>
          <fieldset>
            <Button type="submit" size="medium" schema="primary">
              회원가입
            </Button>
          </fieldset>

          <div className="info">
            <Link to="/reset">비밀번호 초기화</Link>
          </div>
        </form>
      </SignupStyle>
    </>
  );
}

export default Login;