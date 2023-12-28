import styled from "styled-components";

const Header = () => {
  return (
    <ContainerDiv>
      <HeaderDiv>
        <LogoDiv>GETCODE</LogoDiv>
        <ScrapDiv>
          <img style={{ width: "30px" }} src="/Imgs/bookmark.svg" />
          <p>내 찜</p>
        </ScrapDiv>

        <MyProfileDiv>
          <img
            style={{ width: "30px", margin: "0 7px" }}
            src="/Imgs/profileImg.png"
          />
          <p>홍길동 님</p>
          <img style={{ width: "20px" }} src="/Imgs/bell.svg" />
        </MyProfileDiv>
      </HeaderDiv>
    </ContainerDiv>
  );
};

export default Header;

const ContainerDiv = styled.div`
  display: block;
  height: 50px;
  width: 100%;
`;
const HeaderDiv = styled.div`
  place-items: center;
  position: fixed;
  top: 0;
  display: flex;
  background-color: white;
  width: 100%;
  height: 50px;
  z-index: 100;
`;
const LogoDiv = styled.div`
  position: absolute;
  left: 70px;

  color: #ff4b13;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ScrapDiv = styled.div`
  position: absolute;
  right: 180px;
  align-items: center;
  display: flex;

  p {
    font-size: 15px;
    font-weight: 500;
    line-height: normal;
    color: rgb(60, 60, 60);
  }
`;
const MyProfileDiv = styled.div`
  position: absolute;
  right: 20px;
  align-items: center;
  width: 143px;
  height: 40px;
  border-radius: 100px;
  background: #ff993a;
  display: flex;
  p {
    font-size: 14px;
    font-weight: 500;
    line-height: normal;
    width: 65px;
  }
`;
