import styled from "styled-components";
import { media } from "@/styles/mediaQuery";
import React, { useState, useEffect } from "react";
import { POST, GET } from "@/pages/api/axios";
import axios, { AxiosError } from "axios";
import {
  SelectSubject,
  AddLink,
  TextArea,
  SelectTech,
  WriteIntroduction,
} from "@/components/project/post/ObjectForm";

interface LinkProps {
  linkType: string;
  value: string;
}
const ProjectPostPage = () => {
  const [title, setTitle] = useState<string>("");
  const [introduction, setIntroduction] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [tech, setTech] = useState<string[]>([]);
  const [allLink, setAllLink] = useState<LinkProps[]>([]);

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target.value;
    setTitle(target);
  };

  const Post = () => {
    //   if (title && subject !== "주제를 입력하세요" && tech && allLink) {
    //     const handleLogin = async () => {
    //       await POST(localStorage.getItem("token"), "", {
    //         title: "Java 스터디",
    //         content: "Java 스터디 모집합니다.",
    //         region: "서울",
    //         online: true,
    //         contact: "kyun9151@naver.com",
    //         subjects: "코딩 테스트, 자격증",
    //       })
    //         .then((res) => {
    //           console.log(res);
    //           alert(res.data);
    //         })
    //         .catch((err) => {
    //           console.log(err);
    //           alert(err);
    //         });
    //     };
    //   handleLogin();
    //   // console.log(title);
    //   // console.log(subject);
    //   // console.log(tech);
    //   // console.log(allLink);
    // } else {
    //   alert("추가입력");
    // }
  };

  return (
    <Layout>
      <Title
        name="Title"
        type="text"
        placeholder="제목"
        value={title}
        onChange={handleTitle}
      />
      <UserName>작성자 닉네임</UserName>
      <hr style={{ width: "100%" }} />
      <Content>
        <WriteIntroduction setIntroduction={setIntroduction} />
        <SelectSubject setSubject={setSubject} />
        <SelectTech tech={tech} setTech={setTech} />
        <AddLink allLink={allLink} setAllLink={setAllLink} />
      </Content>
      <TextArea post={() => Post()} />
    </Layout>
  );
};

export default ProjectPostPage;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  margin: auto;
  padding: 20px;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const Title = styled.input`
  font-size: 1.8rem;
  margin: 60px 20px 20px;
  text-align: left;
  border: none;
  ${media.mobile} {
    margin: 10px 40px;
  }
`;
const UserName = styled.p`
  font-size: 1rem;
  padding: 20px;
  ${media.mobile} {
    padding: 10px 40px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 20px;
  padding: 20px 60px;
  @media screen and (max-width: 800px) {
    padding: 20px calc(60px + (100% - 760px) / 3);
  }
  ${media.mobile} {
    flex-wrap: wrap;
    display: flex;
    place-content: center;
  }
`;
