import styled from "styled-components";
import { useRouter } from 'next/router';
import { useState } from "react";
import { POST } from "@/pages/api/axios";
import InputForm from "@/components/auth/authForm/InputForm";
import AuthForm from "@/components/auth/authForm/AuthForm";
import AuthLayoutForm from "@/components/auth/authForm/AuthLayoutForm";

const SignUpPage = () => {
    const router = useRouter();
    const [isSignUp, setIsSignUp] = useState<boolean>();
    const [userEmail, setUserEmail] = useState<string>('');
    const [AuthenticationNumber, setAuthenticationNumber] = useState<any>('');
    const [userPassword, setUserPassword] = useState<string>('');
    const [userNickname, setUserNickname] = useState<string>('');

     /** email 입력 (state 변경) */
    const handleUserEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target.value;
        setUserEmail(target);
    }
    /** 인증 번호 입력 (state 변경) */
    const handleUserAuthenticationNumber = (e:React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target.value;
        setAuthenticationNumber(target);
    }
    /** password 입력 (state 변경) */
    const handleUserPassword = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const target = e.target.value;
        setUserPassword(target);
    }
    /** nickname 입력 (state 변경) */
    const handleUserNickname = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const target = e.target.value;
        setUserNickname(target);
    }

    /** 이메일 인증 번호 요청 POST */
    const postEmailAuthentication = async() => {
        await POST(`/api/emails/verification-requests?email=${userEmail}`)
        .then((response)=>{console.log(response)})
        .catch((error)=>{console.log(error)});
    }

    /** POST - 회원가입 */
    const handleSignUp = async() => {
        await POST(`/api/sign-up`,{
            email: {userEmail},
            nickname: {userNickname},
            password: {userPassword},      
        }).then((res)=>{
            console.log(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    }

    return(
        <AuthLayoutForm>
        <AuthForm
            title="회원가입"
            buttonName="회원가입"
        >
            <InputForm
                name="Email"
                type="email"
                placeholder="email@email.com"
                value={userEmail}
                onChange={handleUserEmail}
                validation={true}
                >
                <Certified onClick={postEmailAuthentication}>인증</Certified>
            </InputForm>
            {/* <InputForm
                name="Authentication"
                type="number"
                placeholder="인증 번호를 입력해주세요."
                value={AuthenticationNumber}
                onChange={handleUserAuthenticationNumber}
                validation={true}
                >
                <Certified>완료</Certified>
            </InputForm> */}
            <InputForm
                name="Password"
                type="password"
                placeholder="••••••••••"
                value={userPassword}
                onChange={handleUserPassword}
                validation={true}
            />
            <InputForm
                name="Nickname"
                type="text"
                placeholder="홍길동"
                value={userNickname}
                onChange={handleUserNickname}
                validation={true}
            />
        </AuthForm>
        </AuthLayoutForm>
    )
}

export default SignUpPage;

const Certified = styled.div`
        display:flex;
        position: absolute;
        right: 10px;
        top: 33.5px;
        align-items: center;
        justify-content: center;
        width: 55px;
        height: 25px;
        padding-top: 3px;

        background-color: #FF993A;
        border-radius: 8px;
        
        color: #fff;

        cursor: pointer;
`;