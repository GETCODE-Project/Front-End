import Header from "@/components/common/layout/Header";
import MenuBar from "@/components/common/layout/MenuBar";
import Footer from "@/components/common/layout/Footer";
import styled from "styled-components";
import ObjectForm from "@/components/project/ObjectForm";

const Main = ()=> {
  return (
    <div>
      <Header />
      <MenuBar />
      <Box />
      <Footer />
    </div>
  );
}

export default Main;

const Box = styled.div`
  height: 1000px;
`;
