import styled from 'styled-components';

export default function Footer() {
  return (
    <FooterDiv>
      <FooterA href=''>공지사항</FooterA>
      <FooterA href=''>개인정보 이용 처리 방침</FooterA>
      <FooterA href=''>이용 약관</FooterA>
    </FooterDiv>
  );
}

const FooterDiv = styled.div`
  display: flex;
  bottom: 0;
  width: calc(100% - 80px);
  height: 364px;
  padding: 40px;
  background-color: #ff4b13;
`
const FooterA = styled.a`
  margin: 0 10px;
  text-decoration: none;
  color: black;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
`