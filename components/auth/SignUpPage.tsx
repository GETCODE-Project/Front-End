import styled from "styled-components";
import { useRouter } from 'next/router';
import { useState } from "react";
import { POST } from "@/pages/api/axios";
import InputForm from "../common/auth/InputForm";
import AuthForm from "../common/auth/AuthForm";

const SignUpPage = () => {
    const router = useRouter();
    const [isSignUp, setIsSignUp] = useState<boolean>();
    const [userEmail, setUserEmail] = useState<string>('');
    const [userPassword, setUserPassword] = useState<string>('');
    const [userNickname, setUserNickname] = useState<string>('');

    const handleSignUp = async() => {
        POST(`${process.env.NEXT_PUBLIC_API_URL}/api/sign-up`,{
        email: 'hb057@naver.com',
        nickname: 'been',
        password: '123478'        
        }).then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
    }

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
    /** password 입력 (state 변경) */
    const handleUserNickname = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const target = e.target.value;
        setUserNickname(target);
    }

    return(
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