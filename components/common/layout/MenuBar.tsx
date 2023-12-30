import styled from 'styled-components';

export default function MenuBar() {
  return (
    <ContainerDiv>
      <ul>
        <li>
          <a 
            href={'/project'}
            style={{textDecoration: 'none',color: '#fff'}}>프로젝트
          </a>
        </li>
        <li>
          <a 
            href={'/findProject'}
            style={{textDecoration: 'none',color: '#fff'}}>프로젝트 모집
          </a>
        </li>
        <li>
          <a 
            href={'/findStudy'}
            style={{textDecoration: 'none',color: '#fff'}}>스터디 모집
          </a>
        </li>
        <li>
          <a 
            href={'/'}
            style={{textDecoration: 'none',color: '#fff'}}>커뮤니티
          </a>
        </li>
      </ul>
    </ContainerDiv>
  );
}

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
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 25px;
    width: 1000px;
    height: 50px;
    
    color: white;
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0em;
  }

  & > li{
    display: flex;
    align-items: center;
    justify-content: center;
    
    }
`;