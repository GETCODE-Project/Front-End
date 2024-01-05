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
    const [userPassword, setUserPassword] = useState<string>('');
    const [userNickname, setUserNickname] = useState<string>('');

     /** email 입력 (state 변경) */
    const handleUserEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target.value;
        setUserEmail(target);
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

    /** POST - 회원가입 */
    const handleSignUp = async() => {
        POST(`${process.env.NEXT_PUBLIC_API_URL}/api/sign-up`,{
            email: {userEmail},
            nickname: {userNickname},
            password: {userPassword},      
        }).then((res)=>{
            console.log(res);
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
                <Certified>인증</Certified>
            </InputForm>
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

        background-color: #FF993A;
        border-radius: 8px;
        
        color: #fff;

        cursor: pointer;
`;