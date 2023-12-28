import Header from "@/components/common/Header";
import MenuBar from "@/components/common/MenuBar";
import Footer from "@/components/common/Footer";
import { useState } from "react";
import styled from "styled-components";
import ProjectForm from "@/components/common/ProjectForm";

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
          <ProjectTitleP>프로젝트 모집 제목</ProjectTitleP>
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

  grid-template-columns: 170px calc(100% - 340px) 170px;
  grid-template-rows: 49.5px 32px 18px 11px 18px 600px 100px;
`;

const ProjectTitleDiv = styled.div`
  display: flex;
  height: 23px;
  vertical-align: middle;
  align-items: center;

  grid-column: 2;
  grid-row: 2;
`;
const ProjectTitleP = styled.p`
  display: inline;
  font-family: Inter;
  margin: 0;
  font-size: 24px;
  font-weight: 500;
  text-align: left;
`;

const WriterNameDiv = styled.div`
  font-family: Inter;
  font-size: 10px;
  font-weight: 500;
  line-height: 12px;
  letter-spacing: 0em;
  text-align: left;

  grid-column: 2;
  grid-row: 4;
`;
