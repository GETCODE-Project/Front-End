import styled from 'styled-components';
import ProfileButtonForm from './ProfileButtonForm';
import { BookMarkSVG } from '@/public/SVG/header';
import { useState } from 'react';
import { signOut } from 'next-auth/react';


const Header = () => {
  const [isToggle, setIsToggle] = useState<boolean>();

  return(  
    <ContainerDiv>
      <HeaderDiv>
        <LogoDiv>
          GETCODE  
        </LogoDiv>
        <MenuDiv>
          <BookMark>
                <BookMarkSVG/>
                <span style={{color:'#3C3C3C'}}>내 찜</span>
          </BookMark>
          <ProfileButtonForm isToggle={isToggle} setIsToggle={setIsToggle}/>
        </MenuDiv>
        {isToggle?
          <MenuCategory>
            <Link onClick={()=>signOut}>로그아웃</Link>
            <Link>마이페이지</Link>
          </MenuCategory>
        :<></>
        }
      </HeaderDiv>
    </ContainerDiv>
  );
};

export default Header;


const ContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%; 
`;

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background-color: #fff;
  width: 1000px;
`;

const LogoDiv = styled.div`
  color: #ff4b13;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const MenuDiv = styled.div`
  display: flex;
  gap: 30px;
`;

const BookMark = styled.div`
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
    bottom: -31.5625rem;
    width: 280px;
    min-height: 31.25rem;
    z-index: 1000;

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