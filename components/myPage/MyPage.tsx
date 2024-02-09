import { GET, PATCH } from "@/pages/api/axios";
import { NickNameEditSVG, ProfileEditSVG } from "@/public/SVG/profile";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Alert from "@/components/common/notification/Alert";

const MyPage = () => {

    const router = useRouter();

    const [isLogoutAlertOn, setIsLogoutAlertOn] = useState<boolean>(false);

    const [userEmail, setUserEmail] = useState<string>('');
    const [userNickname, setUserNickname] = useState<string>('');
    const [userProfileImage, setUserProfileImage] = useState<string>('');

    /** 회원 정보 조회 GET */
    const getUserInfo = async() => {
        await GET(`/api/userInfo`)
        .then((res)=>{
            setUserEmail(res.data.email);
            setUserNickname(res.data.nickname);
            //[TODO: 프로필이미지도 불러와야 함]
        })
    }
    /** 로그아웃 PATCH */
    const handleLogout = async() => {
        await PATCH(`/api/logout`)
        .then((res)=>{
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            router.push('/');
        })
        .catch((err)=>console.error(err));
    }

    useEffect(() => {
        getUserInfo();
    },[]);

    return (
        <BackLayout>
            <Layout>
                <Wrapper className="Profile">
                    <Profile>
                        <ProfilEditButton>
                            <ProfileEditSVG/>
                        </ProfilEditButton>
                    </Profile>
                    <NickName>{`${userNickname} 님`}</NickName>
                    <LogOut onClick={()=>setIsLogoutAlertOn(true)}>로그아웃</LogOut>
                </Wrapper>
                <Wrapper className="UserInfo">
                    <InfoMenu>
                        <span id="menu">닉네임</span>
                        <span id="info">
                            <span>{userNickname}</span>
                            <div style={{cursor:'pointer'}}><NickNameEditSVG/></div>
                        </span>
                    </InfoMenu>
                    <InfoMenu>
                        <span id="menu">이메일</span>
                        <span id="info">{userEmail}</span>
                    </InfoMenu>
                </Wrapper>
                <Wrapper className="PageMenu">
                    <PageMenu onClick={()=>router.push('/my/myPosts')}>
                        <span id="icon"></span>
                        <span id="menu">작성한 게시글</span>
                    </PageMenu>
                    <PageMenu onClick={()=>router.push('/my/myWishs')}>
                        <span id="icon"></span>
                        <span id="menu">찜한 게시글</span>
                    </PageMenu>
                </Wrapper>
            </Layout>
            {isLogoutAlertOn?
                <Alert
                    setIsAlertOn={setIsLogoutAlertOn}
                    notice='정말로 로그아웃 하시겠습니까?'
                    yesButtonFC={handleLogout}
                    noButtonFC={()=>setIsLogoutAlertOn(false)}
                />
            :   <></>
            }
        </BackLayout>
    )
}
export default MyPage;

const BackLayout = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
    width: 100%;
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