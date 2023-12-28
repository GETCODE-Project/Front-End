import { SearchButton, SearchLogo } from "@/public/SVG/search";
import { useState } from "react";
import styled from "styled-components";
import ObjectForm from "@/components/project/ObjectForm";
import SearchInput from "../common/search/SearchInput";

const ProjectPage = () => {
    const arr:any [] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];//더미데이터,프로젝트수

    return (
        <Layout>
            <Title>GETCODE 프로젝트</Title>
            <SearchInput/>
            <Content>
                <Wrapper>
                    <Total>총 1,234개 프로젝트</Total>
                    <Sort>
                        <span>최신순</span>
                        <span>과거순</span>
                        <span>인기순</span>
                    </Sort>
                </Wrapper>
                <ObjectList>
                    {arr.map((i:any,idx:number)=>(
                        <ObjectForm key={idx}/>
                    ))}
                </ObjectList>
            </Content>
            
        </Layout>
    )
}

export default ProjectPage;

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    padding: 55px 70px;
    width: 100%;
`;

const Title = styled.div``;





const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 30px;
    width: 1000px;
`;
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;
const Total = styled.div`
`;
const Sort = styled.div`
    display: flex;
    gap: 10px;
`;

const ObjectList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;