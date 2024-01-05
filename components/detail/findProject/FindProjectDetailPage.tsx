import styled from "styled-components";
import { media } from "@/styles/mediaQuery";
import React, { useState } from "react";
import {SelectStatus,SelectSubject,SelectTech,WishPart, AddLink, TextArea} from "@/components/detail/findProject/FindProjectDetailObject";
import Comment from "@/components/detail/Comment"
import RoundBox from "@/components/common/RoundBox";
import {Marks} from "@/components/detail/Marks"



const FindProjectDetailPage = () => {
  const content= "내용"
  return (
    <Layout>
      <Title>
        <div style={{display:"flex", width:"100%"}}>
          <p style={{marginRight:"20px"}}>프로젝트 제목</p>
          <RoundBox text="모집 중" backgoundcolor="#00FF1A" color="black" border="none" fontWeight={500}/>
        </div>
      <Marks /></Title>
      <UserName>작성자 닉네임</UserName>
      <hr style={{width:"100%"}} />
      <Content>
      <SelectStatus />
        <SelectSubject />
        <SelectTech />
        <WishPart />
        {/* <SelectLocation text="오프라인 지역" /> */}
        <AddLink />
      </Content>
      <TextArea content={content} />
      <Comment />
    </Layout>
  );
};
export default FindProjectDetailPage;

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

