import Header from "@/components/common/Header";
import MenuBar from "@/components/common/MenuBar";
import Footer from "@/components/common/Footer";
import styled from "styled-components";
import ProjectPage from "@/components/project/ProjectPage";


export default function Project() {
  return (
    <div>
      <Header />
      <MenuBar />
        <ProjectPage/>
      <Footer />
    </div>
  );
}
