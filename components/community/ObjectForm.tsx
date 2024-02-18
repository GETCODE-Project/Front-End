import { POST } from "@/pages/api/axios";
import { WishOffSVG, WishOnSVG, HartOffSVG, HartOnSVG, ViewCountSVG } from "@/public/SVG/reactionCount";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

interface ObjectFormProps{
    data?: any;
    setIsLoginAlertOn?: any;
}
/** 불러온 Respons 데이터 형식 참고: 스터디모집 게시글 */
interface ResponseData{
    projectId: number;
    title: string;
    introduction: string;
    likeCnt: number;
    views: number;
    checkLike: boolean;
    checkWish: boolean;
    createDate: string;
    modifiedDate: string;
    memberNickName: string;
    subject: string;
    techStacks: [{id: string, techStack: string}]; //불필요데이터
}

const ObjectForm = ({data,setIsLoginAlertOn}:ObjectFormProps) => {

    // console.log(data,'커뮤니티데이터');

    const router = useRouter();

    const [isHartOn, setIsHartOn] = useState<boolean>(false);
    const [isWishOn, setIsWishOn] = useState<boolean>(false);

    /** 좋아요 버튼 클릭 이벤트 */
    const handleHeartClick = async(event:React.MouseEvent) => {
        event.stopPropagation();
        setIsHartOn(!isHartOn);
        await POST(`/api/projectrecruitment/${data.projectId}/like`)
        .then((res)=>{
        })
        .catch((err)=>{
            //사용자가존재하지않습니다 메세지일 경우 로그인할 것인지 묻는 alert창 띄우기
            if(err.response.data.message.includes('사용자')){
                setIsLoginAlertOn(true);
                setIsHartOn(!isHartOn);
            }
        });
    }

    /** 찜하기 버튼 클릭 이벤트 */
    const handleWishClick = async(event:React.MouseEvent) => {
        event.stopPropagation();
        setIsWishOn(!isWishOn);
        await POST(`/api/projectrecruitment/${data.projectRecruitmentId}/wish`)
        .then((res)=>{
        })
        .catch((err)=>{
            //사용자가존재하지않습니다 메세지일 경우 로그인할 것인지 묻는 alert창 띄우기
            if(err.response.data.message.includes('사용자')){
                setIsLoginAlertOn(true);
                setIsWishOn(!isWishOn);

            }
        });
    }

    /** 처음 불러올 때 좋아요,찜하기 선택 상태 */
    useEffect(()=>{
        if(data.checkLike===true){
            setIsHartOn(true);
        }
        if(data.checkLike===false||null){
            setIsHartOn(false);
        }
        if(data.checkWish===true){
            setIsWishOn(true);
        }
        if(data.checkWish===false||null){
            setIsWishOn(false);
        }
    },[]);
    
    return (
        <Layout onClick={()=>router.push(`/community/detail/${data.projectId}`)}>
            <Wish onClick={(event)=>handleWishClick(event)}>
                {isWishOn?<WishOnSVG/>:<WishOffSVG/>}
            </Wish>
            <Content>
                <Info>
                    <div id='title'>{data.title}</div>
                    <div id='intro'>{data.introduction}</div>
                    <Reaction>
                        <Wrapper>
                            <ViewCountSVG/>
                            <span>{data.views}</span>
                        </Wrapper>
                        <Wrapper id="hartClick" onClick={(event)=>handleHeartClick(event)}>
                            {isHartOn?<HartOnSVG size="24"/>:<HartOffSVG size="24"/>}
                            <span>{data.likeCnt}</span>
                        </Wrapper>
                    </Reaction>
                </Info>
                <Create>
                    <span>{data.memberNickName}</span>
                    <span>{data.createDate}</span>
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

    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.10));
`;

const Wish = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    min-width: 60px;
    
    background-color: #FF4B13;
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
    #hartClick {
        cursor: pointer;
    }
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