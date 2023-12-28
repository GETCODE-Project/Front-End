import styled from "styled-components";
import GoogleLoginButton from "@/components/auth/GoogleLoginButton";
import { EmailDeleteSVG } from "@/public/SVG/auth";
import { useRouter } from 'next/router';
import { useState } from "react";

const SignUpPage = () => {
    const router = useRouter();
    const [isSignUp, setIsSignUp] = useState<boolean>();

    return(
        <Layout>
            {isSignUp?
            <>
            <Title style={{fontSize:'1.875rem', lineHeight:'3.125rem'}}>환영합니다!<br/>회원가입이 완료되었습니다!</Title>
            <Button>
                <SignUp onClick={()=>router.push('/')}>로그인</SignUp>
            </Button>
            </>
            :
            <>
            <Title>회원가입</Title>
            <Content>
                <InputWrapper className='Email'>
                    <p>Email</p>
                    <input type="email" placeholder="email@email.com"/>
                    <div id='certified'>인증</div>
                </InputWrapper>
                <InputWrapper className='PassWord'>
                    <p>Password</p>
                    <input type="password" placeholder="••••••••••"/>
                </InputWrapper>
                <InputWrapper className='NickName'>
                    <p>Nickname</p>
                    <input type="text" placeholder="홍길동"/>
                </InputWrapper>
            </Content>
            <Button>
                <SignUp onClick={()=>setIsSignUp(!isSignUp)}>회원가입</SignUp>
            </Button>
            <LoginButton onClick={()=>router.push('/auth/login')}>
                <span>이미 로그인 계정이 있으신가요?</span>
                <span>로그인하기</span>
            </LoginButton>
            </>
            }
        </Layout>
    )
}

export default SignUpPage;

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