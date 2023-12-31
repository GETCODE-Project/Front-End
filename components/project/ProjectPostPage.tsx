import styled from "styled-components";
import RoundBox from "@/components/common/RoundBox";
import { media } from "@/styles/mediaQuery";
import Toggle from "@/components/common/Toggle";
import React, { useState } from "react";

const SelectStatus = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <RoundBox text="모집 여부" />
      <RoundBox text="모집 중" />
      <RoundBox text="모집 완료" />
    </div>
  );
};

const SelectSubject = () => {
  const optionSubject = [
    { key: 1, value: "주제1" },
    { key: 2, value: "주제3" },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <RoundBox text="주제" />
      <Toggle options={optionSubject} />
    </div>
  );
};

const SelectTech = () => {
  const [option, selectOption] = useState("선택 해제");
  const optionSubject = [
    { key: 1, value: "기술1" },
    { key: 2, value: "기술2" },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <RoundBox text="기술 스택" />
      <Toggle onCreate={selectOption} options={optionSubject} />
      {/* <p>{option}</p> */}
    </div>
  );
};
const ProjectPostPage = () => {
  return (
    <Layout>
      <Title>프로젝트 제목</Title>
      <UserName>작성자 닉네임</UserName>
      <hr style={{ width: "100%" }} />
      <Content>
        <SelectStatus />
        <SelectSubject />
        <SelectTech />
      </Content>
      <div style={{ height: "500px" }} />
    </Layout>
  );
};
export default ProjectPostPage;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  margin: auto;

`;

const Title = styled.p`
  font-size: 2rem;
  padding: 80px 0 20px 0;
  text-align: left;
`;
const UserName = styled.p`
  font-size: 20px;
  padding: 20px 0 20px 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 20px;
  padding: 10px;
`;
