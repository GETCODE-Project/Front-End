import styled from "styled-components";
import GoogleLoginButton from "@/components/auth/authForm/loginButton/GoogleLoginButton";
import { EmailDeleteSVG } from "@/public/SVG/auth";
import { useRouter } from 'next/router';
import { useState } from "react";
import { POST } from "@/pages/api/axios";
import AuthLayoutForm from "@/components/auth/authForm/AuthLayoutForm";
import AuthForm from "@/components/auth/authForm/AuthForm";
import InputForm from "@/components/auth/authForm/InputForm";

/** 구글 회원가입 시, 마지막 절차 : 닉네임 등록 */
const NickNamePage = () => {
    const router = useRouter();
    const [isSignUp, setIsSignUp] = useState<boolean>();
    const [userNickname, setUserNickname] = useState<string>('');

    /** nickname 입력 (state 변경) */
    const handleUserNickname = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const target = e.target.value;
        setUserNickname(target);
    }

    return(
        <AuthLayoutForm>
            <AuthForm
                title="닉네임 등록"
                buttonName="회원 가입 완료"
            >
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

export default NickNamePage;