import Header from "@/components/common/Header";
import MenuBar from "@/components/common/MenuBar";
import Footer from "@/components/common/Footer";
import styled from "styled-components";
import FindProjectPage from "@/components/findProject/FindProjectPage";


export default function FindProject() {
  return (
    <div>
      <Header />
      <MenuBar />
      <FindProjectPage/>
      <Footer />
    </div>
  );
};