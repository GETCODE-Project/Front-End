import { useRouter } from "next/router";
import styled from "styled-components";

interface AlertProps{
    setIsLoginAlertOn?: any;
}

const Alert = ({setIsLoginAlertOn}:AlertProps) => {

    const router = useRouter();

    return(
        <BackLayout>
            <Layout>
                <Notice>로그인이 필요한 서비스입니다.<br/>로그인 하시겠습니까?</Notice>
                <ButtonWrapper>
                    <Button onClick={()=>router.push('/auth/login')}>확인</Button>
                    <Button onClick={()=>setIsLoginAlertOn(false)}>취소</Button>
                </ButtonWrapper>
            </Layout>
        </BackLayout>
    )
}

export default Alert;

const d = styled.div``;

const BackLayout = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    z-index: 1004;

    background-color: #00000070;
`;

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 300px;
    min-height: 100px;
    padding: 20px;

    background-color: #fff;
    border-radius: 16px;
    border: 1px solid #b7b7b7;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const Notice = styled.div`
    text-align: center;
    line-height: 25px;
`;

const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
`;

const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 25px;

    background-color: #FF993A;
    border-radius: 6px;

    cursor: pointer;
`;
