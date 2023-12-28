import styled from "styled-components";
import GoogleLoginButton from "@/components/auth/GoogleLoginButton";
import { EmailDeleteSVG } from "@/public/SVG/auth";

const LoginPage = () => {
    return(
        <Layout>
            <Title>로그인</Title>
            <Content>
                <InputWrapper className='Email'>
                    <p>Email</p>
                    <input type="email" placeholder="email@email.com"/>
                    <div id='icon'>
                        <EmailDeleteSVG/>
                    </div>
                </InputWrapper>
                <InputWrapper className='PassWord'>
                    <p>Password</p>
                    <input type="password" placeholder="••••••••••"/>
                    <div id='icon'>
                        <EmailDeleteSVG/>
                    </div>
                </InputWrapper>
            </Content>
            <LoginButton>
                <Login>로그인</Login>
                <GoogleLoginButton/>
            </LoginButton>
            <SignUpButton>
                <span>로그인 계정이 없으신가요?</span>
                <span>회원가입하기</span>
            </SignUpButton>
        </Layout>
    )
}

export default LoginPage;

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
        height: 35px;
        padding: 10px;
        box-sizing: border-box;

        border-radius: 8px;
        border: 1px solid #B7B7B7;
        
        color: #3c3c3c;
    }
    #icon{
        position: absolute;
        right: 10px;
        top: 31.5px;

        cursor: pointer;
    }
`;

const LoginButton = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 16px;
`;
const Login = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 35px;

    background-color: #FF4B13;
    border-radius: 8px;

    color: #FFF1E4;

    cursor: pointer;
`;

const SignUpButton = styled.div`
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