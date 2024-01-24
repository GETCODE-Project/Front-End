import { HartOnSVG, HartOffSVG, BookMarkOnSVG, BookMarkOffSVG, ViewCountSVG } from '@/public/SVG/reactionCount';
import { media } from '@/styles/mediaQuery';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface ObjectFormProps{
    style?:any;
    data?: any;
}
/** 불러온 Respons 데이터 형식 참고 */
// 좋아요클릭여부,찜하기클릭여부,주제 추가 예정
interface ProjectObjectData{
    projectId: number;
    title: string;
    introduction: string;
    views: number;
    likeCnt: number;
    dateTime: string;
    techStackList: [{
        id: number;
        techStack: string;
    }];
    imageUrl: {
        id: number;
        imageUrl: string;
    };
    memberNickName: string;
}

/** ------------------------------------------------------------- */
/** 프로젝트 게시물 객체 폼 */
/** ------------------------------------------------------------- */
export const ObjectForm = ({style, data}:ObjectFormProps) => {
    const [isHartOn, setIsHartOn] = useState<boolean>(false);
    const [isBookMarkOn, setIsBookMarkOn] = useState<boolean>(false);

    useEffect(()=>{
        setIsBookMarkOn(data.bookmarks);
    },[]);

    return(
        <Layout style={style}>
            <Thumbnail>
                <Img src={data.imageUrl?.imageUrl}></Img>
                <ReactionCount>
                    <Wrapper onClick={()=>setIsHartOn(!isHartOn)}>
                        {isHartOn?<HartOnSVG size="30"/>:<HartOffSVG size="30"/>}
                        <span>{data.likeCnt}</span>
                    </Wrapper>
                    <Wrapper>
                        <ViewCountSVG/>
                        <span>{data.views}</span>
                    </Wrapper>
                    <Wrapper id='bookMark' onClick={()=>setIsBookMarkOn(!isBookMarkOn)}>
                        {isBookMarkOn?<BookMarkOnSVG/>:<BookMarkOffSVG/>}
                    </Wrapper>
                </ReactionCount>
            </Thumbnail>
            <Content>
                <Title>
                    <span>{data.title}</span>
                </Title>
                <Info>
                    <Intro>
                        {data.introduction}
                    </Intro>
                    <Topic>{`주제 : ${data.topic}`}</Topic>
                    <Stack>
                        {data.techStackList?.map((i:any,idx:number)=>(
                            <StackName key={idx}>{i.techStack}</StackName>
                        ))}
                    </Stack>
                    <Create><div>{`작성자 : ${data.memberNickName}`}</div><div>{`작성일 : ${data.dateTime}`}</div></Create>
                </Info>
            </Content>
              
        </Layout>
    )
}

/** ------------------------------------------------------------- */
/** 인기 게시물 객체 폼 */
/** ------------------------------------------------------------- */
export const PopularityObjectForm = ({style, data}:ObjectFormProps) => {
    const [isHartOn, setIsHartOn] = useState<boolean>(false);
    const [isBookMarkOn, setIsBookMarkOn] = useState<boolean>(false);
    const arr:string [] = data?.technologyStack;

    useEffect(()=>{
        setIsBookMarkOn(data.bookmarks);
    },[]);

    return(
        <Layout style={style}>
            <Thumbnail>
                <Img></Img>
            </Thumbnail>
            <ReactionCount>
                    <Wrapper onClick={()=>setIsHartOn(!isHartOn)}>
                        {isHartOn?<HartOnSVG size="30"/>:<HartOffSVG size="30"/>}
                        <span>{data.likes}</span>
                    </Wrapper>
                    <Wrapper>
                        <ViewCountSVG/>
                        <span>{data.views}</span>
                    </Wrapper>
                    <Wrapper id='bookMark' onClick={()=>setIsBookMarkOn(!isBookMarkOn)}>
                        {isBookMarkOn?<BookMarkOnSVG/>:<BookMarkOffSVG/>}
                    </Wrapper>
            </ReactionCount>
            <Content>
                <Title>
                    <span>{data.title}</span>
                </Title>
                <Info>
                    <Intro>
                        {data.subTitle}
                    </Intro>
                    <Topic>{`주제 : ${data.topic}`}</Topic>
                    <Stack>
                        {data.techStackList?.map((i:any,idx:number)=>(
                            <StackName key={idx}>{i}</StackName>
                        ))}
                    </Stack>
                    <Create>
                        <div>{`작성자 : ${data.writer}`}</div>
                        <div>{`작성일 : ${data.createdDate}`}</div>
                    </Create>
                </Info>
            </Content>
        </Layout>
    )
}

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 320px;
    padding: 0 10px;
    padding-bottom: 30px;

    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25));

    ${media.mobile || media.tablet}{
        /* width: 160px; */
        width: 50%;
        height: 250px;
    filter: drop-shadow(0px 4px 40px rgba(0, 0, 0, 0.25));

    }
`;

const Thumbnail = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    flex: 1;
    overflow: hidden;

    background-color: #777777;
`;
const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
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

    /* background: rgba(0, 0, 0, 0.34); */
    background: #FF993A;

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
    width: 100%;
    flex:0.85;

    border-bottom: 1px solid #e0e0e0;
    background-color: #fff;
`;
const Title = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 5px 0;
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
    width: 100%;
    height: 100%;
    padding: 10px 0;
`;
const Intro = styled.div`
    font-size: 0.75rem;
    font-weight: 700;
`;
const Topic = styled.div`
    display: flex;
    flex-wrap: wrap;

    font-size: 0.625rem;    
`;
const Stack = styled.div`
    display: flex;
    gap: 4px;
    width: 100%;
    flex-wrap: wrap;

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