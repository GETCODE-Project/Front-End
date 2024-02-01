import styled from 'styled-components';
import ProfileButtonForm from '../ProfileButtonForm';
import { WishSVG } from '@/public/SVG/header';
import { useEffect, useState } from 'react';
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { GET, PATCH } from '@/pages/api/axios';

const Header = () => {
  const router = useRouter();

  // const { data: session, status} = useSession();
  const [isToggle, setIsToggle] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [userInfo, setUserinfo] = useState<any>();

  const isLoginStatus = () => {
      if(localStorage.getItem('accessToken')!==null){
          setIsLogin(true);
          getUserInfo();
      }
      else{
          setIsLogin(false);
      }
  }

  const handleLogout = async() => {
    // signOut({callbackUrl:`/`});
    await PATCH(`/api/logout`)
    .then((res)=>{
      console.log(res);
    })
    .catch((err) => console.error(err));
  }

  const getUserInfo = async() => {
      await GET(`/api/userInfo`)
      .then((res)=>{
          setUserinfo(res.data);      
      })
      .catch((err)=>console.error(err));
  }

  useEffect(()=>{
      isLoginStatus();
      getUserInfo();
  },[]);
  


  return(  
    <ContainerDiv>
      <HeaderDiv>
        <LogoDiv href='/'>
          GETCODE  
        </LogoDiv>
        <MenuDiv>
          <Wish>
                <WishSVG/>
                <span style={{color:'#3C3C3C'}}>내 찜</span>
          </Wish>
          <ProfileButtonForm isLogin={isLogin} userInfo={userInfo} isToggle={isToggle} setIsToggle={setIsToggle}/>
          
        </MenuDiv>
        {isToggle?
          <MenuCategory>
            <Link onClick={handleLogout}>로그아웃</Link>
            <Link onClick={()=>router.push('/my')}>마이페이지</Link>
          </MenuCategory>
        :<></>
        }
      </HeaderDiv>
    </ContainerDiv>
  );
};

export default Header;


const ContainerDiv = styled.div`
  justify-content: center;
  position: fixed;
  top: 0;
  display: flex;
  background-color: white;
  width: 100%;
  height: 50px;
  z-index: 100;
  background-color: #fff;
`;

const HeaderDiv = styled.div`
  display: flex;
  margin: 0 70px;
  justify-content: space-between;
  align-items: center;
  width: 1000px;
`;

const LogoDiv = styled.a`
  color: #ff4b13;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration: none;
  cursor: pointer;
`;

const MenuDiv = styled.div`
  display: flex;
  gap: 30px;
`;

const Wish = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  font-size: 1rem;
  text-align: center;
  font-style: normal;
  font-weight: 500;
  line-height: 1rem;

  cursor: pointer;
`;

const MenuCategory = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    position: absolute;
    right: 0;
    bottom: -500px;
    width: 280px;
    min-height: 31.25rem;
    z-index: 1004;

    background: linear-gradient(180deg, #fff0e3 43.23%, rgba(255, 240, 227, 0) 100%);
`;
const Link = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;

  color: #E5A964;
  font-size: 1rem;
  font-weight: 700;

  cursor: pointer;

  &:hover{
    background-color: #ffebd4;
    font-weight: 900;
  }
`;