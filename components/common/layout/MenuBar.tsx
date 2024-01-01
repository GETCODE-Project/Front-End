import styled from 'styled-components';
import {useState, useEffect} from 'react';
import { useRouter } from 'next/router';

interface MenuBarProps {
  bold?: number;
}


const MenuBar:React.FC<MenuBarProps>=({bold}) =>{
  const handle = (num: number) => {
    return (num===bold)?1000:500;
  }

  return (
    <ContainerDiv>
      <ul>
        <li>
        <a 
            href={'/project'}
            style={{textDecoration: 'none',color: '#fff',fontWeight:handle(1)}}>프로젝트
          </a>
        </li>
        <li>
          <a 
            href={'/findProject'}
            style={{textDecoration: 'none',color: '#fff',fontWeight:handle(2) }}>프로젝트 모집
          </a>
        </li>
        <li>
          <a 
            href={'/findStudy'}
            style={{textDecoration: 'none',color: '#fff',fontWeight:handle(3)}}>스터디 모집
          </a>
        </li>
        <li>
          <a 
            href={'/'}
            style={{textDecoration: 'none',color: '#fff',fontWeight:handle(4)}}>커뮤니티
          </a>
        </li>
      </ul>
    </ContainerDiv>
  );
}
export default MenuBar;

const ContainerDiv = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 100%;
  
  background-color: #ff4b13;
  
  font-size: 1rem;
  font-weight: 500;
  
  & > ul{
    margin-left: 20px;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 25px;
    width: 1000px;
    height: 50px;
    
    color: white;
    font-family: Inter;
    font-size: 16px;
    letter-spacing: 0em;
  }

  & > li{
    display: flex;
    align-items: center;
    justify-content: center;
    
    }
  }

`;
