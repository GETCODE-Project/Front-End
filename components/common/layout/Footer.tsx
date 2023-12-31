import styled from "styled-components";

export default function Footer() {
  return (
    <FooterDiv>
      <a href="">공지사항</a>
      <a href="">개인정보 이용 처리 방침</a>
      <a href="">이용 약관</a>
    </FooterDiv>
  );
}

const FooterDiv = styled.div`
  display: flex;
  width: 100%;
  height: 150px;
  padding: 40px;
  background-color: #ff4b13;
  a {
    margin: 0 10px;
    text-decoration: none;
    color: black;
    font-family: Inter;
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0em;
    text-align: left;
  }
`;
