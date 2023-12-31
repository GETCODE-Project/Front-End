import Header from "@/components/common/layout/Header";
import MenuBar from "@/components/common/layout/MenuBar";
import Footer from "@/components/common/layout/Footer";
import styled from "styled-components";
import FindProject from "@/components/findProject/FindProject";

const FindProjectPage = ()=> {
  return (
    <div>
      <Header />
      <MenuBar bold={2}/>
      <FindProject/>
      <Footer />
    </div>
  );
};

export default FindProjectPage;