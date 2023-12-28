import Header from "@/components/common/Header";
import MenuBar from "@/components/common/MenuBar";
import Footer from "@/components/common/Footer";
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
