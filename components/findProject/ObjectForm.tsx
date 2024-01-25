import { WishOffSVG, WishOnSVG, HartOffSVG, HartOnSVG, ViewCountSVG } from "@/public/SVG/reactionCount";
import { useEffect, useState } from "react";
import styled from "styled-components";

interface ObjectFormProps{
    style?:any;
    data?: any;
}
/** 불러온 Respons 데이터 형식 참고 */
//[TODO] 모집파트 추가해야함,?
interface ProjectObjectData{
    projectRecruitmentId: number;
    title: string;
    content: string;
    siDo: string;
    guGun: string;
    online: boolean;
    recruitment: boolean;
    views: number;
    likeCnt: number;
    createDate: string;
    modifiedDate: string;
    subjects: [{
        id: number;
        subject: string;
    }]
    techStacks: [{
        id: number;
        teckStack: string;
    },]
    memberNickName: string;
    checkLike: boolean|null;
    checkWish: boolean|null;
}
/** ------------------------------------------------------------- */
/** 프로젝트모집 게시물 객체 폼 */
/** ------------------------------------------------------------- */
const ObjectForm = ({style,data}:ObjectFormProps) => {
    const [isHartOn, setIsHartOn] = useState<boolean>(false);
    const [isWishOn, setIsWishOn] = useState<boolean>(false);
    const subjects:any[] = data.subjects;
    const techStacks:any[] = [...data.techStacks];
    const [recruitMentBoolean, setRecruitMentBoolean] = useState<boolean>(false);

    useEffect(()=>{
        console.log(data.techStacks);
    },[])
    useEffect(() => {
        if(data.recruitment === true){
            setRecruitMentBoolean(true);
        }if(data.recruitment === false){
            setRecruitMentBoolean(false);
        }if(data.recruitment !== true||false){
            setRecruitMentBoolean(false);
        }
    },[]);

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
    
    return (
        <Layout>
            <Wish onClick={()=>setIsWishOn(!isWishOn)}>
                {isWishOn?<WishOnSVG/>:<WishOffSVG/>}
            </Wish>
            <Content>
                <Info>
                    <div id='title'>{data?.title}</div>
                    <div id='intro'>{data.content}</div>
                    <Reaction>
                        <Wrapper>
                            <ViewCountSVG/>
                            <span>{data.views}</span>
                        </Wrapper>
                        <Wrapper onClick={()=>setIsHartOn(!isHartOn)}>
                            {isHartOn?<HartOnSVG size="24"/>:<HartOffSVG size="24"/>}
                            <span>{data.likeCnt}</span>
                        </Wrapper>
                        <RecruitmentStatus recruitment={recruitMentBoolean}>
                            {recruitMentBoolean===true ? '모집 중':'모집 완료'}
                        </RecruitmentStatus>
                    </Reaction>
                </Info>
                <Stack>
                    <div>
                        {data.techStacks.map((i:any,idx:number)=>(
                            <StackName key={idx}>{i.teckStack}</StackName>
                        ))}
                    </div>
                    <div>
                        {subjects.map((i:any,idx:number)=>(
                            <StackName id='part' key={idx}>{i.subject}</StackName>
                        ))}
                    </div>
                </Stack>
                <Create>
                    <span>{`작성자 : ${data.memberNickName}`}</span>
                    <span>{`작성일 : ${data.createDate}`}</span>
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
    
    background-color: #FFF1E4;
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
    flex-direction: column;
    gap: 6px;
    width: 100%;

    #part{
        background-color: #c6c6c6;
        color: #000;
    }

    &>div{
        display: flex;
        gap: 10px;
    }
`;
const StackName = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 22px;
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