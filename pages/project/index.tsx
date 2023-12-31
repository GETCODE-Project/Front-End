import Header from "@/components/common/layout/Header";
import MenuBar from "@/components/common/layout/MenuBar";
import Footer from "@/components/common/layout/Footer";
import styled from "styled-components";
import ProjectPage from "@/components/project/ProjectPage";

const ProjectPost: React.FC = () => {
  return (
    <div>
      <Header />
      <MenuBar bold={1} />
      <ProjectPage />
      <Footer />
    </div>
  );
};

export default ProjectPost;
