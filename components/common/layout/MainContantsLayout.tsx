import styled from "styled-components";
import SearchInput from "@/components/common/search/SearchInput";
import { media } from "@/styles/mediaQuery";
import { useEffect, useRef, useState } from "react";
import React from "react";
import { useRouter } from "next/router";

interface MainContentsLayoutProps {
    pageName: string;
    title: string;
    subTitle?: string;
    sumTitle?: string;
    children?: any;
    data?: any;
    id?:any;
}

/** 프로젝트, 프로젝트모집, 스터디모집의 메인 페이지 레이아웃 컴포넌트*/

const MainContantsLayout = ({pageName, title, subTitle, sumTitle, children, data, id}:MainContentsLayoutProps) => {
    const router = useRouter();
    const objectListRef = useRef<HTMLDivElement>(null);
    const [objectListWidth, setObjectListWidth] = useState(0);
    const sortArr:any [] = ["최신순","과거순","인기순"];

    const [dataName, setDataName] = useState<string>('ProjectData');
    const [ObjectData, setObjectData] = useState<[]>([]);
    const [ObjectForm, setObjectForm] = useState(null);

    /** 토탈(총 N..N개 프로젝트) 함수 작성 예정*/
    /** 정렬(최신순, 과거순, 인기순) 함수 작성 예정*/

    /** 페이지 별 객체 폼 불러오기 */
    useEffect(() => {
        import(`@/components/${pageName}/ObjectForm`)
        .then(module => {pageName=='project'?
            setObjectForm(()=>module.ObjectForm)
        : setObjectForm(()=>module.default)})
        .catch(error => console.error(error))
    },[pageName]);

    useEffect(()=>{
        if(pageName === 'project'){
            setDataName('ProjectData');
        }
        if(pageName === 'findProject'){
            setDataName('FindProjectData');
        }
        if(pageName === 'findStudy'){
            setDataName('FindStudyData');
        }
        if(pageName === 'community'){
            setDataName('CommunityData');
        }
    },[])

    /** 페이지 별 더미 데이터 불러오기 */
    useEffect(() => {
        import(`@/components/dummy/${dataName}`)
        .then(module =>setObjectData(()=>module.DummyData))
        .catch(error => console.error(error))
    },[dataName]);

    /** total,sort 너비 수정 작업 중 */
    useEffect(() => {
        const updateWidth = () => {
            const width = objectListRef.current?.offsetWidth || 0;
            setObjectListWidth(width);
        }
        updateWidth();

        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    },[]);

    return(
        <BackLayout>
            <Layout>
                <Title>
                    {`GETCODE ${title}`}
                    {subTitle?
                        <div id="subTitle">{subTitle}</div>
                    :   <></>
                    }
                </Title>
                <SearchInput>{children}</SearchInput>
                <Contents>
                    <TotalSortWrapper >
                        <div id="wrapper" style={{width:objectListWidth}}>
                        {subTitle?
                            <Total>{`총 ${ObjectData?.length}개 ${sumTitle}`}</Total>
                        :   <Total>{`총 ${ObjectData?.length}개 ${title}`}</Total>
                        }
                        <Sort>
                            {sortArr.map((i:any,idx:number)=>(
                                <span key={idx}>{i}</span>
                            ))}
                        </Sort>
                        </div>
                    </TotalSortWrapper>
                    <ObjectList ref={objectListRef} pageName={pageName}>
                        {ObjectData?.map((i:any,idx:number)=>(
                            ObjectForm ? React.createElement(ObjectForm, {key:idx, data:i}) : null
                        ))}
                    </ObjectList>
                </Contents>
                <WritingButton onClick={()=>router.push(`/${pageName}/post`)}>글쓰기</WritingButton>
            </Layout>
        </BackLayout>
    )
}
export default MainContantsLayout;

const BackLayout = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
    width: 100%;
    padding: 55px 0;
`;

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* gap: 10px; */
    width: 1000px;
    overflow: hidden;

    ${media.tablet || media.mobile}{
        width: 100%;
        padding: 0 20px;
        gap: 20px;
    }
`;

const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    color: #ff4b13;
    font-weight: 700;
    font-size: 1.125rem;

    & #subTitle{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px 15px;

        border-radius: 16px;
        background-color: #FF993A;

        color: #fff;
        font-size: 16px;
        font-weight: 500;
    }
`;

const Contents = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 20px;
    width: 100%;
`;

const TotalSortWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    & #wrapper {
        display: flex;
        justify-content: space-between;
    }

    
`;
const Total = styled.div`
    display: flex;
`;
const Sort = styled.div`
    display: flex;
    gap: 10px;
`;

const ObjectList = styled.div<{pageName:string}>`
    display: flex;
    flex-direction: ${({pageName})=>(pageName==='project'?'unset':'column')};
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    min-height: 100vh;

    ${media.tablet || media.mobile}{
        justify-content: ${({pageName})=>(pageName==='project'?'center':'unset')};
    }
`;

const WritingButton = styled.div`
    display: flex;
    position: fixed;
    right: 20px;
    bottom: 30px;
    justify-content: center;
    align-items: center;
    width: 70px;
    aspect-ratio: 1/1;

    background-color: #FF4b13;
    border-radius: 100px;

    color: #fff;
    font-weight: 700;

    cursor: pointer;
`;