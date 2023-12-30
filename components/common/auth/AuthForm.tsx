import GoogleLoginButton from "@/components/common/auth/loginButton/GoogleLoginButton";
import { useRouter } from "next/router";
import styled from "styled-components";

interface AuthFormProps{
    title: string;
    children?: any;
    buttonName: string;
}

/** 로그인/회원가입 폼 */

const AuthForm = ({title, children, buttonName}:AuthFormProps) => {

    const router = useRouter();

    return (
        <Layout>
            <Title>{title}</Title>
            <Content>
                {children}
            </Content>
            <LoginButton>
                <Login>{buttonName}</Login>
                <GoogleLoginButton/>
            </LoginButton>
            <SignUpButton onClick={()=>router.push('/auth/signup')}>
                <span>로그인 계정이 없으신가요?</span>
                <span>회원가입하기</span>
            </SignUpButton>
        </Layout>
    )
}
export default AuthForm;

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
    height: 45px;

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