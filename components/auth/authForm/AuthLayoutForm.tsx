import { Logo } from "@/public/SVG/logo";
import { media } from "@/styles/mediaQuery";
import styled from "styled-components";

interface AuthLayoutFormProps {
    children: any;
}

/** Auth Layout 틀 */

const AuthLayoutForm = ({children}:AuthLayoutFormProps) => {
    return(
        <Layout>
            <LogoWrapper>
                <Logo width='130' height='30'/>
            </LogoWrapper>
            {children}
        </Layout>
    )
}
export default AuthLayoutForm;

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    width: 100%;
    height: 100vh;
`;

const LogoWrapper = styled.div`
    display: flex;
    position: absolute;
    padding: 20px;
    box-sizing: border-box;
    width: 100%;
    left: 0;
    top: 0;
    justify-content: start;

    ${media.mobile}{
        display: flex;
        position: unset;
        justify-content: center;
        padding: 50px;
    }
`;