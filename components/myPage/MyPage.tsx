import styled from "styled-components";

const MyPage = () => {
    return (
        <BackLayout>
            <Layout>
                <ProfileWrapper>

                </ProfileWrapper>
            </Layout>
        </BackLayout>
    )
}
export default MyPage;

const BackLayout = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
    height: 100vh;
    padding-top: 50px;
`;

const Layout = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 360px;
    min-height: 534px;
    padding: 30px 20px;
    box-sizing: border-box;

    border-radius: 16px;
    border: 1px solid #ff4b13;
`;

const ProfileWrapper = styled.div``;