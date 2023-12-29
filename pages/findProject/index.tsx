import Header from "@/components/common/Header";
import MenuBar from "@/components/common/MenuBar";
import Footer from "@/components/common/Footer";
import styled from "styled-components";
import FindProject from "@/components/findProject/FindProject";

const FindProjectPage = ()=> {
  return (
    <div>
      <Header />
      <MenuBar />
      <FindProject/>
      <Footer />
    </div>
  );
};

export default FindProjectPage;