import { BookMarkOnSVG, BookMarkOffSVG, HartOnSVG, HartOffSVG, ViewCountSVG } from "@/public/SVG/reactionCount";
import { useState } from "react";
import styled from "styled-components";

const ObjectForm = () => {
    const [isHartOn, setIsHartOn] = useState<boolean>(false);
    const [isBookMarkOn, setIsBookMarkOn] = useState<boolean>(false);
    
    const arr:any []=['스터디','면접준비','백엔드','웹개발'];

    return(
        <Layout>
            <BookMark onClick={()=>setIsBookMarkOn(!isBookMarkOn)}>
                {isBookMarkOn?<BookMarkOnSVG/>:<BookMarkOffSVG/>}
            </BookMark>
            <Content>
                <Info>
                    <div id='title'>스터디 모집 글 제목</div>
                    <div id='intro'>스터디 모집 글 한 줄</div>
                    <Reaction>
                <Wrapper>
                    <ViewCountSVG/>
                    <span>1,345</span>
                </Wrapper>
                <Wrapper onClick={()=>setIsHartOn(!isHartOn)}>
                    {isHartOn?<HartOnSVG size="24"/>:<HartOffSVG size="24"/>}
                    <span>123</span>
                </Wrapper>
                <RecruitmentStatus>모집 중</RecruitmentStatus>
            </Reaction>
                </Info>
                <Stack>
                    {arr.map((i:any,idx:number)=>(
                        <StackName key={idx}>{i}</StackName>
                    ))}
                </Stack>
                <Create>
                    <span>작성자</span>
                    <span>2023.12.11.MON</span>
                </Create>
            </Content>
            
        </Layout>
    )
}

export default ObjectForm;

const Layout = styled.div`
    display: flex;
    width: 100%;
    height: 150px;
    margin-bottom: 30px;

    filter: drop-shadow(-4px 4px 40px rgba(0, 0, 0, 0.25));
`;

const BookMark = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    min-width: 60px;
    
    background-color: #FF993A;
`;

const Content = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    padding: 15px;
    width: 100%;

    background-color: #fff;

`;
const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    &> div:nth-child(1){
        font-size: 0.9375rem;
    }
    &> div:nth-child(2){
        font-size: 0.75rem;
    }
`;

const Stack = styled.div`
    display: flex;
    gap: 6px;
    width: 100%;
`;
const StackName = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px 15px;
    padding-top: 4px;
    box-sizing: border-box;

    border-radius: 6px;
    background-color: #4f4f4f;
    white-space: nowrap;
    
    color: #fff;
    font-size: 0.75rem;
`;
const Create = styled.div`
    display: flex;

    font-size: 0.625rem;
`;

const Reaction = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    align-items: start;
    gap: 15px;
    padding: 15px;
`;
const Wrapper = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    gap: 5px;

    &>span{
        font-size: 0.625rem;
    }
`;
const RecruitmentStatus = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 30px;
    padding-top: 2px;
    box-sizing: border-box;

    border-radius: 50px;
    background-color: #00ff1a;

    font-size: 0.75rem
`;