import Header from "@/components/common/layout/Header";
import MenuBar from "@/components/common/layout/MenuBar";
import Footer from "@/components/common/layout/Footer";
import { useState } from "react";
import styled from "styled-components";
import ProjectForm from "@/components/projectDetail/ProjectForm";
import ProjectPostPage from "@/components/project/ProjectPostPage";
const ProjectPost: React.FC = () => {
  return (
    <div>
      <Header />

      <MenuBar/>
     
      <ProjectPostPage />
      <Footer />
    </div>
  );
};

export default ProjectPost;

const ContainerDiv = styled.div`
  display: grid;
  grid-template-columns: minmax(20px, 1fr) 1000px minmax(20px, 1fr);
  // @media (max-width: 1140px) {
  //   background-color: gray;
  //   grid-template-columns: 20px auto 20px;
  // }
  // @media (max-width: 600px) {
  //   background-color: white;
  //   grid-template-columns: 10px auto 10px;
  // }
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
