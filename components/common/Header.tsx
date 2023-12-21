import styled from 'styled-components';


const Header = () => {
  return(  
    <ContainerDiv>
      <HeaderDiv>
      <LogoDiv>
        GETCODE  
      </LogoDiv>
      <ScrapDiv src = "/Imgs/scrap.png" />
      <MyProfileDiv src = "/Imgs/scrap.png" />
      </HeaderDiv>
    </ContainerDiv>
  );
};

export default Header;


const ContainerDiv = styled.div`
  display: block;
  height: 50px;
  width: 100%; 
`
const HeaderDiv = styled.div`
  place-items: center;
  position: fixed;
  top: 0;
  display: flex;
  background-color: white;
  width: 100%;
  height: 50px;
  z-index: 100;
`
const LogoDiv = styled.div`
  position: absolute;
  left: 70px;

  color: #ff4b13;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

const ScrapDiv = styled.img`
  position: absolute;
  right: 40px;
  align-items: center;
`
const MyProfileDiv = styled.img`
  position: absolute;
  right: 130px;
  align-items: center;
`
