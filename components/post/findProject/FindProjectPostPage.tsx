import styled from "styled-components";
import { media } from "@/styles/mediaQuery";
import React, { useState } from "react";
import {SelectSubject,SelectTech, AddLink, TextArea, SelectStatus, WishPart} from "@/components/post/findProject/FindProjectPostObject";


const FindProjectPostPage = () => {
  
  return (
    <Layout>
      <Title>프로젝트 모집 글 제목</Title>
      <UserName>작성자 닉네임</UserName>
      <hr style={{ width: "100%" }} />
      <Content>
        <SelectStatus />
        <SelectSubject />
        <SelectTech />
        <WishPart />
        <p>스터디 지역</p>
        <p>상세 위치</p>
        <AddLink />
      </Content>
      <TextArea />
    </Layout>
  );
};
export default FindProjectPostPage;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  margin: auto;
  padding:20px;
  @media screen and (max-width: 800px){
    width: 100%;
  }
  ${media.mobile}{
    background-color:pink;
  };
`;

const Title = styled.p`
  font-size: 1.8rem;
  padding: 80px 0 20px 0;
  text-align: left;
`;
const UserName = styled.p`
  font-size: 1.1rem;
  padding: 20px 0 20px 0;
`;



const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 20px;
  padding: 20px 70px;
  @media screen and (max-width: 800px){
    padding: 20px calc(70px + (100% - 760px)/3);
  }
`;
