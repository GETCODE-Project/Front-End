import { WishOnSVG, WishOffSVG, HartOnSVG, HartOffSVG, ViewCountSVG } from "@/public/SVG/reactionCount";
import { useEffect, useState } from "react";
import styled from "styled-components";
interface ObjectFormProps{
    style?:any;
    data?: any;
}
/** 불러온 Respons 데이터 형식 참고 */
//[TODO] 분야(다중선택)=subject라고 생각하고 작업.
//[TODO] 좋아요클릭여부,찜하기클릭여부 필요
interface FindStudyObjectData{
    title: string, //제목
    content: string, //내용
    region: string, //지역
    recruitment: boolean, //모집여부
    online: boolean, //온오프라인여부
    views: number, //조회수
    count: number, //좋아요수
    contact: string, //연락처
    date: string, //작성/수정일
    member: {
      email: string, //작성자이메일
      nickname: string //작성자닉네임
    },
    comments: [
      {
        ontent: string, //?내용?
        modifiedDate: string, //모집일
        email: string, //
        nickname: string //
      }
    ],
    subjects: [ //주제?
      string
    ]
}
/** ------------------------------------------------------------- */
/** 스터디모집 게시물 객체 폼 */
/** ------------------------------------------------------------- */
const ObjectForm = ({data}:ObjectFormProps) => {
    const [isHartOn, setIsHartOn] = useState<boolean>(false);
    const [isWishOn, setIsWishOn] = useState<boolean>(false);
    const subject:any[] = [data.subjects];

    /** 처음 불러올 때 좋아요,찜하기 선택 상태 */
    useEffect(()=>{
        if(data.checkLike===true){
            setIsHartOn(data.Wishs);
        }
        if(data.checkLike===false||null){
            setIsHartOn(false);
        }
        if(data.checkWish===true){
            setIsWishOn(data.Wishs);
        }
        if(data.checkWish===false||null){
            setIsWishOn(false);
        }
    },[]);

    return(
        <Layout>
            <Wish onClick={()=>setIsWishOn(!isWishOn)}>
                {isWishOn?<WishOnSVG/>:<WishOffSVG/>}
            </Wish>
            <Content>
                <Info>
                    <div id='title'>{data?.title}</div>
                    <div id='intro'>{data?.content}</div>
                    <Reaction>
                <Wrapper>
                    <ViewCountSVG/>
                    <span>{data?.views}</span>
                </Wrapper>
                <Wrapper onClick={()=>setIsHartOn(!isHartOn)}>
                    {isHartOn?<HartOnSVG size="24"/>:<HartOffSVG size="24"/>}
                    <span>{data?.count}</span>
                </Wrapper>
                <RecruitmentStatus recruitment={data?.recruitStatus}>
                    {data?.recruitStatus===true ? '모집 중':'모집 완료'}
                </RecruitmentStatus>
            </Reaction>
                </Info>
                <Stack>
                    {subject.map((i:any,idx:number)=>(
                        <StackName key={idx}>{i}</StackName>
                    ))}
                </Stack>
                <Create>
                    <span>{`작성자 : ${data.member.nickname}`}</span>
                    <span>{`작성일 : ${data.date}`}</span>
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

const Wish = styled.div`
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
    gap: 10px;

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
const RecruitmentStatus = styled.div<{recruitment:boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 30px;
    padding-top: 2px;
    box-sizing: border-box;

    border-radius: 50px;
    background-color: #00ff1a;
    background-color: ${({recruitment})=>(recruitment?'#00ff1a':'#a2a2a2')};

    font-size: 0.75rem
`;