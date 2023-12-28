import LoginPage from '@/components/auth/LoginPage';
import { Logo } from '@/public/SVG/search';

import styled from 'styled-components';

const Login = () => {
    

    return(
        <Layout>
            <LogoWrapper>
                <Logo/>
            </LogoWrapper>
            
            <LoginPage/>
        
        </Layout>
    )
}

export default Login;

const Layout = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    
    width: 100%;
    height: 100vh;
`;

const LogoWrapper = styled.div`
    display: flex;
    position: absolute;
    padding: 20px;
    box-sizing: border-box;
    left: 0;
    top: 0;
    justify-content: start;
`;