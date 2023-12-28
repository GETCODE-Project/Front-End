import styled from 'styled-components';

export default function MenuBar() {
  return (
    <ContainerDiv>
      <MenuBarUl>
        <MenuBarLi><MenuLiA href='/ProjectMainPage'>프로젝트</MenuLiA></MenuBarLi>
        <MenuBarLi>프로젝트 모집</MenuBarLi>
        <MenuBarLi>스터디 모집</MenuBarLi>
        <MenuBarLi>커뮤니티</MenuBarLi>
      </MenuBarUl>
    </ContainerDiv>
  );
}

const ContainerDiv = styled.div`
  display: block;
  height: 50px;
  width: 100%;
`
const MenuBarUl = styled.ul`
  position: fixed;
  height: 50px;
  display: flex;
  place-items: center;
  width: 100%;
  height: 50px;
  padding: 0;
  margin: 0;
  background-color: #ff4b13;
  color: white;
  list-style-type: none;
  z-index: 100;

  
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0em;
`
const MenuBarLi = styled.li`
  margin: 0 10px;
  font-size: 16px;
  font-weight: 500;
  &:first-child { padding-left: 30px;}
`
const MenuLiA = styled.a`
text-decoration: none;
color: white;
`