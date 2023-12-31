import styled from "styled-components";
import SearchInput from "@/components/common/search/SearchInput";
import ObjectForm from "@/components/findProject/ObjectForm";
import { media } from "@/styles/mediaQuery";

const FindProjectPage = () => {
    const arr:any [] =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27];

    return(
        <Layout>
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
                    {arr?.map((i:any, idx:number)=>(
                        <ObjectForm key={idx}/>
                    ))}
                </ObjectList>
                
            </Content>
        </Layout>
    )
}

export default FindProjectPage;

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 70px;
    box-sizing: border-box;
    width: 100%;

`;
const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items:center;
    width: 100%;   
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    font-size: 0.875rem;
`;
const Total = styled.div`
`;
const Sort = styled.div`
    display: flex;
    gap: 10px;
`;
const ObjectList = styled.div`
    display: flex;
    justify-content: center;
    align-items: start;
    flex-wrap: wrap;
    width: 100%;
`;