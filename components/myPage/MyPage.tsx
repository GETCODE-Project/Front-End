import { NickNameEditSVG, ProfileEditSVG } from "@/public/SVG/profile";
import { useRouter } from "next/router";
import styled from "styled-components";

const MyPage = () => {

    const router = useRouter();

    return (
        <BackLayout>
            <Layout>
                <Wrapper className="Profile">
                    <Profile>
                        <ProfilEditButton>
                            <ProfileEditSVG/>
                        </ProfilEditButton>
                    </Profile>
                    <NickName>홍길동 님</NickName>
                    <LogOut>로그아웃</LogOut>
                </Wrapper>
                <Wrapper className="UserInfo">
                    <InfoMenu>
                        <span id="menu">닉네임</span>
                        <span id="info">
                            <span>닉네임_G</span>
                            <div style={{cursor:'pointer'}}><NickNameEditSVG/></div>
                        </span>
                    </InfoMenu>
                    <InfoMenu>
                        <span id="menu">이메일</span>
                        <span id="info">email@email.com</span>
                    </InfoMenu>
                </Wrapper>
                <Wrapper className="PageMenu">
                    <PageMenu onClick={()=>router.push('/my/myPosts')}>
                        <span id="icon"></span>
                        <span id="menu">작성한 게시글</span>
                    </PageMenu>
                    <PageMenu>
                        <span id="icon"></span>
                        <span id="menu">찜한 게시글</span>
                    </PageMenu>
                </Wrapper>
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
    flex-direction: column;
    align-items: center;
    width: 360px;
    min-height: 460px;
    padding: 20px;
    box-sizing: border-box;

    border-radius: 16px;
    border: 1px solid #ff4b13;

    & .Profile{
        padding-bottom: 20px;
    }
    & .UserInfo{
        align-items: start;

        border-top: 1px solid #e9e9e9;
        border-bottom: 1px solid #e9e9e9;
    }
    & .PageMenu{
        align-items: start;
        padding-top: 20px;
        gap: 20px;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding: 10px 0;
`;

const Profile = styled.div`
    display: flex;
    position: relative;
    width: 114px;
    aspect-ratio: 1/1;

    border: 3px solid #ff4b13;
    border-radius: 100%;
`;

const NickName = styled.div`
    font-size: 1.25rem;
    font-weight: 400;
`;

const LogOut = styled.div`
    font-size: 0.9375rem;
    font-weight: 400;

    cursor: pointer;
`;

const ProfilEditButton = styled.div`
    position: absolute;
    right: 0;
    top: 10px;

    cursor: pointer;
`;

const InfoMenu = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;

    & #menu{
        width: 80px;
    }
    & #info{        
        display: flex;
        align-items: center;
        gap: 5px;
        width: 100%;
    }
`;

const PageMenu = styled.div`
    display: flex;
    gap: 15px;

    & #icon{
        display: flex;
        align-items: center;
        width: 30px;
        height: 30px;

        background-color: #d9d9d9;
    }
    & #menu{
        display: flex;
        align-items: center;
    }

    cursor: pointer;
`;