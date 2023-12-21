import Header from "@/components/common/Header";
import MenuBar from "@/components/common/MenuBar";
import Footer from "@/components/common/Footer";
import styled from "styled-components";


export default function Main() {
  return (
    <div>
      <Header />
      <MenuBar />

      <Box />
      <Footer />
    </div>
  );
}

const Box = styled.div`
  height: 1000px;
`;
