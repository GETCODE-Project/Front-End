import Header from "@/components/common/layout/Header";
import MenuBar from "@/components/common/layout/MenuBar";
import Footer from "@/components/common/layout/Footer";
import styled from "styled-components";
import FindProjectPage from "@/components/findProject/FindProjectPage";

const FindProject = ()=> {
  return (
    <div>
      <Header />
      <MenuBar />
      <FindProjectPage/>
      <Footer />
    </div>
  );
};

export default FindProject;