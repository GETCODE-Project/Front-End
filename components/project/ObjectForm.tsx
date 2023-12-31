import { HartOnSVG, HartOffSVG, BookMarkOnSVG, BookMarkOffSVG, ViewCountSVG } from '@/public/SVG/reactionCount';
import { useState } from 'react';
import styled from 'styled-components';

const ObjectForm = () => {
    const [isHartOn, setIsHartOn] = useState<boolean>(false);
    const [isBookMarkOn, setIsBookMarkOn] = useState<boolean>(false);
    const arr:string [] = ['React', 'Node.js', 'TypeScript','Spring Boot','Java'];//더미데이터(임시)

    return(
        <Layout>
            <Thumbnail>
                <Img></Img>
                <ReactionCount>
                    <Wrapper onClick={()=>setIsHartOn(!isHartOn)}>
                        {isHartOn?<HartOnSVG size="30"/>:<HartOffSVG size="30"/>}
                        <span>1,234</span>
                    </Wrapper>
                    <Wrapper>
                        <ViewCountSVG/>
                        <span>890</span>
                    </Wrapper>
                    <Wrapper id='bookMark' onClick={()=>setIsBookMarkOn(!isBookMarkOn)}>
                        {isBookMarkOn?<BookMarkOnSVG/>:<BookMarkOffSVG/>}
                    </Wrapper>
                </ReactionCount>
            </Thumbnail>
            <Content>
                <Title>
                    <span>GETCODE프로젝트제목</span>
                </Title>
                <Info>
                <Intro>
                    GETCODE인기프로젝트내용한줄프로젝트소개
                </Intro>
                <Topic>주제 : 웹 포트폴리오</Topic>
                <Stack>
                    {arr.map((i:any,idx:number)=>(
                        <StackName key={idx}>{i}</StackName>
                    ))}
                </Stack>
                <Create><div>작성자 닉네임</div><div>2023.10.11.TUE</div></Create>
                </Info>
            </Content>
              
        </Layout>
    )
}

export default ObjectForm;

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    width: 315px;
    height: 340px;
    padding-bottom: 30px;

    filter: drop-shadow(0px 4px 40px rgba(0, 0, 0, 0.25));
`;

const Thumbnail = styled.div`
    position: relative;
    width: 100%;
    height: 170px;

    background-color: #777777;
`;
const Img = styled.div`
`;
const ReactionCount = styled.div`
    display: flex;
    position: absolute;
    gap: 15px;
    align-items: center;
    padding: 0 10px;
    box-sizing: border-box;
    bottom: 0px;
    width: 100%;
    height: 35px;

    background: rgba(0, 0, 0, 0.34);

    #bookMark{
        position: absolute;
        right: 15px;
    }
`;
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    &> span{
        font-size: 0.625rem;
        font-weight: 700;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 15px;
    box-sizing: border-box;
    gap: 16px;
    width: 100%;
    height: 170px;

    border-bottom: 1px solid #e0e0e0;
    background-color: #fff;
`;
const Title = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 35px;

    border-bottom: 1px solid #e0e0e0;

    & > span{
        padding-top: 3px;
        box-sizing: border-box;

        font-size: 1rem;
        font-weight: 900;
    }
`;
const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    width: 100%;
    `;
const Intro = styled.div`
    font-size: 0.75rem;
    font-weight: 700;
`;
const Topic = styled.div`
    font-size: 0.625rem;    
`;
const Stack = styled.div`
    display: flex;
    gap: 4px;
    width: 100%;

    font-size: 0.625rem;
`;
const StackName = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3px 5px;
    box-sizing: border-box;

    background-color: #d9d9d9;
    border-radius: 30px;
    white-space: nowrap;

`;
const Create = styled.div`
    display: flex;
    gap: 8px;
    font-size: 0.5rem;
    &>div:nth-child(2){
        color: #7c7c7c;
    }
`;