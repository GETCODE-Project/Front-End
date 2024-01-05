import styled from "styled-components";
import { media } from "@/styles/mediaQuery";
import React, { useState } from "react";
import {SelectSubject,SelectTech, AddLink, TextArea} from "@/components/detail/project/ProjectDetailObject";
import Comment from "@/components/detail/Comment"
import RoundBox from "@/components/common/RoundBox";
import {Marks} from "@/components/detail/Marks"



const ProjectDetailPage = () => {
  const content= "내용"
  return (
    <Layout>
      <Title>프로젝트 제목<Marks /></Title>
      <UserName>작성자 닉네임</UserName>
      <hr style={{width:"100%"}} />
      <Content>
        <SelectSubject />
        <SelectTech />
        <AddLink />
      </Content>
      <TextArea content={content} />
      <Comment />
    </Layout>
  );
};
export default ProjectDetailPage;

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

const Title = styled.div`
  display: flex;
  justify-content:space-between;
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
