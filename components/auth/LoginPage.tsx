import styled from "styled-components";
import GoogleLoginButton from "@/components/common/auth/loginButton/GoogleLoginButton";
import { EmailDeleteSVG } from "@/public/SVG/auth";
import { useRouter } from 'next/router';
import { POST } from '@/pages/api/axios';
import { useEffect, useState } from "react";
import InputForm from "@/components/common/auth/InputForm";
import AuthForm from "@/components/common/auth/AuthForm";

const LoginPage = () => {
    const [userEmail, setUserEmail] = useState<string>('');
    const [userPassword, setUserPassword] = useState<string>('');

    const router = useRouter();

    /** [POST] Login(Email,Password) */
    const handleLogin = async() => {
        await POST('',{
            email: 'kyun91532@naver.com',
            nickname: 'hodu',
            password: '12344'
        }).then((res)=>{
            console.log(res);
            alert(res.data);
        }).catch((err)=>{
            console.log(err);
            alert(err);
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

    useEffect(() => {
        // console.log(userEmail);
    },[userEmail]);

    return(
        <AuthForm
            title="로그인"
            buttonName="로그인"    
        >
            <InputForm
                name="Email"
                type="email"
                placeholder="email@email.com"
                value={userEmail}
                onChange={handleUserEmail}
                validation={true}
            />
            <InputForm
                name="Password"
                type="password"
                placeholder="••••••••••"
                value={userPassword}
                onChange={handleUserPassword}
                validation={true}
            />
            <ForgetPassWord onClick={()=>router.push('/auth/login/find')}>비밀번호를 잊으셨나요?</ForgetPassWord>
        </AuthForm>
    )
}

export default LoginPage;

const ForgetPassWord = styled.div`
    display: flex;
    justify-content: end;
    width: 100%;

    color: #ff4b13;
    font-size: 0.75rem;

    cursor: pointer;
`;