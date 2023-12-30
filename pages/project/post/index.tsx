import Header from "@/components/common/layout/Header";
import MenuBar from "@/components/common/layout/MenuBar";
import Footer from "@/components/common/layout/Footer";
import { useState } from "react";
import styled from "styled-components";
import ProjectForm from "@/components/projectDetail/ProjectForm";

const ProjectPost: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const inputTitle = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
  };

  return (
    <div>
      <Header />
      <MenuBar />
      <ContainerDiv>
        <ProjectTitleDiv>
          <p>프로젝트 제목</p>
        </ProjectTitleDiv>

        <WriterNameDiv>작성자 닉네임</WriterNameDiv>

        <ProjectForm />
      </ContainerDiv>
      <Footer />
    </div>
  );
};

export default ProjectPost;

const ContainerDiv = styled.div`
  display: grid;
  grid-template-columns: 170px auto 170px;
  @media (max-width: 1140px) {
    grid-template-columns: minmax(20px, 1fr) auto minmax(20px, 1fr); /* 1140px 이하에서 170px 부분이 동일하게 줄어듭니다. */
  }
  grid-template-rows: 49.5px 32px 18px 29px 24px 600px 100px;
`;

const ProjectTitleDiv = styled.div`
  display: flex;
  height: 23px;
  vertical-align: middle;
  align-items: center;

  grid-column: 2;
  grid-row: 2;

  p {
    display: inline;
    font-family: Inter;
    margin: 0;
    font-size: 24px;
    font-weight: 500;
    text-align: left;
  }
`;
const ProjectTitleP = styled.p`
  display: inline;
  font-family: Inter;
  margin: 0;
  font-size: 24px;
  font-weight: 500;
  text-align: left;

  border-bottom: 1px solid #000;
  width: 100%;
`;

const WriterNameDiv = styled.div`
  font-family: Inter;
  font-size: 10px;
  font-weight: 500;
  line-height: 12px;
  letter-spacing: 0em;
  text-align: left;
  border-bottom: 1px solid black;
  grid-column: 2;
  grid-row: 4;
`;