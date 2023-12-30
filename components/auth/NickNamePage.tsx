import styled from "styled-components";
import GoogleLoginButton from "@/components/auth/GoogleLoginButton";
import { EmailDeleteSVG } from "@/public/SVG/auth";
import { useRouter } from 'next/router';
import { useState } from "react";
import { POST } from "@/pages/api/axios";

/** 구글 회원가입 시, 마지막 절차 : 닉네임 등록 */
const NickNamePage = () => {
    const router = useRouter();
    const [isSignUp, setIsSignUp] = useState<boolean>();

    return(
        <Layout>
            <Title>닉네임 등록</Title>
            <Content>
                <InputWrapper>
                    <p>Nickname</p>
                    <input type="text" placeholder="홍길동"/>
                </InputWrapper>
            </Content>
            <Button>
                <SignUp>회원 가입 완료</SignUp>
            </Button>
            <LoginButton onClick={()=>router.push('/auth/login')}>
                <span>이미 로그인 계정이 있으신가요?</span>
                <span>로그인하기</span>
            </LoginButton>
        
        </Layout>
    )
}

export default NickNamePage;

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 360px;
`;
const Title = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    margin-bottom: 30px;

    color: #3C3C3C;
    font-size: 2.5rem;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
const InputWrapper = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    gap: 8px;

    &>input{
        width: 100%;
        height: 45px;
        padding: 10px;
        box-sizing: border-box;

        border-radius: 8px;
        border: 1px solid #B7B7B7;
        
        color: #3c3c3c;

        &:focus{
            border: 2px solid #FF993A;
            outline: none;
        }
    }
    #certified{
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
    }
    & > div{
        cursor: pointer;
    }
`;

const Button = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 16px;
`;
const SignUp = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 45px;

    background-color: #FF4B13;
    border-radius: 8px;

    color: #FFF1E4;

    cursor: pointer;
`;

const LoginButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    font-size: 0.875rem;
    color: #3c3c3c;
    
    cursor: pointer;
    
    &>span:nth-child(2){
        color: #ff4b13;
    }
`;