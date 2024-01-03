import styled from "styled-components";
import { media } from "@/styles/mediaQuery";
import React, { useState } from "react";
import {SelectPart,SelectTech, AddLink, TextArea, SelectStatus, SelectWheretoMeet} from "@/components/post/findStudy/FindStudyPostObject";


const FindStudyPostPage = () => {
  return (
    <Layout>
      <Title>스터디 모집 글 제목</Title>
      <UserName>작성자 닉네임</UserName>
      <hr style={{ width: "100%" }} />
      <Content>
        <SelectStatus />
        <SelectPart />
        <SelectWheretoMeet />
        <p>스터디 지역</p>
        <p>상세 위치</p>
        <AddLink />
      </Content>
      <TextArea />
    </Layout>
  );
};
export default FindStudyPostPage;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  margin: auto;
  padding:20px;
  @media screen and (max-width: 800px){
    width: 100%;
  }
  // ${media.tablet}{
  //   width: 100%;
  //  background-color:pink;
  // };

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
  padding: 20px 60px;
  @media screen and (max-width: 800px){
    padding: 20px calc(60px + (100% - 760px)/3);
  }
`;
