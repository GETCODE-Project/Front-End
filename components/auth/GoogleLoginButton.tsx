import { GoogleLogoSVG } from '@/public/SVG/auth';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const GoogleLoginButton = () => {
    const { data: session } = useSession();
    const router = useRouter();

    return(
        <Layout onClick={()=>signIn("google",{callbackUrl:"/"})}>
            <GoogleLogoSVG/><span>Google Login</span>
        </Layout>
    )
}

export default GoogleLoginButton;

const Layout = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    width: 100%;
    height: 45px;

    background-color: #fff;
    border-radius: 8px;
    border: 1px solid #B7B7B7;

    cursor: pointer;
`;