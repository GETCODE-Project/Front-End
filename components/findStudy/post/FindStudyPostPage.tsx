import styled from "styled-components";
import { media } from "@/styles/mediaQuery";
import React, { useState, useEffect } from "react";
import { POST, GET } from "@/pages/api/axios";
import axios, { AxiosError } from "axios";
import {
  SelectStatus,
  SelectPart,
  SelectOnOff,
  AddLink,
  TextArea,
} from "@/components/findStudy/post/ObjectForm";
import SelectLocation from "@/components/common/selectObject/SelectLocation";

interface LinkProps {
  linkType: string;
  value: string;
}
const FindStudyPostPage = () => {
  const [title, setTitle] = useState<string>("");
  const [status, setStatus] = useState<boolean>(true);
  const [part, setPart] = useState<string[]>([]);
  const [onoff, setOnoff] = useState<boolean>(true);
  const [location, setLocation] = useState<string>("");
  const [allLink, setAllLink] = useState<LinkProps[]>([]);

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target.value;
    setTitle(target);
  };

  const Post = () => {
    if (title && part && location !== "시/도 선택/" && allLink) {
      console.log(status);
      console.log(title);
      console.log(part);
      console.log(onoff);
      console.log(location);
      console.log(allLink);
    } else {
      alert("추가입력");
    }
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
        <SelectStatus status={status} setStatus={setStatus} />
        <SelectPart part={part} setPart={setPart} />
        <SelectOnOff onoff={onoff} setOnoff={setOnoff} />
        <SelectLocation setLocation={setLocation} text="스터디 지역" />
        <AddLink allLink={allLink} setAllLink={setAllLink} />
      </Content>
      <TextArea post={() => Post()} />
    </Layout>
  );
};

export default FindStudyPostPage;

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
