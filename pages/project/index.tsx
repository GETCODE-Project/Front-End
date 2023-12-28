import Header from "@/components/common/Header";
import MenuBar from "@/components/common/MenuBar";
import Footer from "@/components/common/Footer";
import { useEffect, useState } from "react";
import styled from "styled-components";
import RoundBox from "@/components/common/RoundBox";
import Toggle from "@/components/common/Toggle";
import MainContent from "@/components/project/MainContent";

const SearchEngine = () => {
  return (
    <SearchEngineDiv>
      <img src="/Imgs/SearchLogo.png" />
      <InputDiv>
        <input type="text" />
        <img src="/Imgs/search.png" />
      </InputDiv>
    </SearchEngineDiv>
  );
};

const SearchEngineDiv = styled.div`
  display: flex;
  grid-column: 2;
  grid-row: 4;
  justify-content: center;
  img {
    width: 147px;
    height: 32px;
    margin: 10px;
  }
`;

const ProjectPost: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const inputTitle = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
  };

  return (
    <div>
      <Header />
      <MenuBar />
      <ContainerDiv>
        <ProjectTitleDiv>
          <p>GETCODE 프로젝트</p>
        </ProjectTitleDiv>
        <SearchEngine />
        {/* <MainContent /> */}
      </ContainerDiv>
      <Footer />
    </div>
  );
};

export default ProjectPost;

const ContainerDiv = styled.div`
  display: grid;

  grid-template-columns: 70px calc(100% - 140px) 70px;
  grid-template-rows: 50px 23px 45px 49px 23px 600px;
  // grid-template-rows: 50px 23px 45px 49px 23px 20px 600px 200px;
`;

const ProjectTitleDiv = styled.div`
  display: grid;
  place-items: center;
  height: 23px;

  grid-column: 2;
  grid-row: 2;

  p {
    display: inline;
    font-family: Inter;
    margin: 0;
    font-size: 16px;
    font-weight: 500;
  }
`;

const InputDiv = styled.div`
  display: flex;
  height: 44px;
  width: 490px;
  border-radius: 6px;
  border: 3px solid #ff4b13;
  background: #fff1e4;
  box-shadow: 0px 4px 40px #d3d3d3;

  input {
    border: none;
    background: none;
    width: 100%;
  }
  input:focus {
    outline: none;
  }

  img {
    width: 36px;
    height: 36px;
    margin: 4px;
  }
`;
