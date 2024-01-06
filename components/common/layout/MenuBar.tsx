import styled from 'styled-components';
import { media } from '@/styles/mediaQuery';
interface MenuBarProps {
  fontWeight?: number;
}


const MenuBar:React.FC<MenuBarProps>=({fontWeight}) =>{
  const handle = (num: number) => {
    return (num===fontWeight)?{fontWeight:1000, textShadow:"0.5px 0.5px 0.5px black"}:{fontWeight:500};
  }

  return (
    <ContainerDiv>
      <ul>
        <li>
        <a 
            href={'/project'}
            style={{textDecoration: 'none',color: '#fff', ...handle(1) }}>프로젝트
          </a>
        </li>
        <li>
          <a 
            href={'/findProject'}
            style={{textDecoration: 'none',color: '#fff',...handle(2) }}>프로젝트 모집
          </a>
        </li>
        <li>
          <a 
            href={'/findStudy'}
            style={{textDecoration: 'none',color: '#fff',...handle(3)}}>스터디 모집
          </a>
        </li>
        <li>
          <a 
            href={'/community'}
            style={{textDecoration: 'none',color: '#fff',...handle(4)}}>커뮤니티
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
  font-weight: 500;
  & > ul{
    margin: 0 70px;
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
    ${media.mobile}{
      align-items: center;
      justify-content: center;
      font-size: 14px;
      margin:0 10px;
      gap: 15px;
  };
  }

  & > li{
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
