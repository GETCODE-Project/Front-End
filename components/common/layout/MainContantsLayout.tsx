import styled from "styled-components";
import SearchInput from "@/components/common/search/SearchInput";
import { media } from "@/styles/mediaQuery";
import { useEffect, useRef, useState } from "react";
import React from "react";
import { useRouter } from "next/router";

interface MainContentsLayoutProps {
    routeroutePageName: string;
    title: string;
    subTitle?: string;
    sumTitle?: string;
    children?: any;
    currentSeletedData: string[];
    data?: any;
    id?:any;
}

/** 프로젝트, 프로젝트모집, 스터디모집의 메인 페이지 레이아웃 컴포넌트*/

const MainContantsLayout = ({routeroutePageName, title, subTitle, sumTitle, children, currentSeletedData, data, id}:MainContentsLayoutProps) => {
    const router = useRouter();
    const objectListRef = useRef<HTMLDivElement>(null);
    const [objectListWidth, setObjectListWidth] = useState(0);
    const sortArr:any [] = ["최신순","과거순","좋아요순"];

    const [dataName, setDataName] = useState<string>('ProjectData');
    const [ObjectData, setObjectData] = useState<any[]>([]);
    const [currentObjectData, setCurrentObjectData] = useState<any[]>([]);
    const [ObjectForm, setObjectForm] = useState(null);
    console.log(currentObjectData);

    /** 토탈(총 N..N개 프로젝트) 함수 작성 예정*/

    /** 정렬(최신순, 과거순, 좋아요순) */
    const handleSort = (i:string) => {
        let tempArray:any[] = [...ObjectData];
        if(i==='최신순'){
            tempArray.sort((a,b)=>(new Date(b.createdDate).getDate() - new Date(a.createdDate).getDate()));
            setCurrentObjectData(tempArray);
        }
        if(i==='과거순'){
            tempArray.sort((a,b)=>(new Date(a.createdDate).getDate() - new Date(b.createdDate).getDate()));
            setCurrentObjectData(tempArray);
        }
        if(i==='좋아요순'){
            tempArray.sort((a,b)=>(b.likes[0] - a.likes[0]));
            setCurrentObjectData(tempArray);
        }
    }

    /** 상세 검색 적용 */
    const handleDetailSearch = () => {
        let tempArray:any[] = [...ObjectData];
        
        // 기술 스택 검색
        if(currentSeletedData[0] !== '전체'){
            const technologyStackFilter = tempArray.filter(project => project.technologyStack === currentSeletedData[0]);
            setCurrentObjectData(technologyStackFilter);
        }else{
            
        }
    }

    /** 페이지 별 객체 폼 불러오기 */
    useEffect(() => {
        import(`@/components/${routeroutePageName}/ObjectForm`)
        .then(module => {routeroutePageName=='project'?
            setObjectForm(()=>module.ObjectForm)
        : setObjectForm(()=>module.default)})
        .catch(error => console.error(error))
    },[routeroutePageName, setObjectData]);

    /** 페이지 별 더미 데이터 불러오기 */
    useEffect(() => {
        if(routeroutePageName === 'project'){
            setDataName('ProjectData');
        }
        if(routeroutePageName === 'findProject'){
            setDataName('FindProjectData');
        }
        if(routeroutePageName === 'findStudy'){
            setDataName('FindStudyData');
        }
        if(routeroutePageName === 'community'){
            setDataName('CommunityData');
        }

        import(`@/components/dummy/${dataName}`)
        .then(module =>(
            setObjectData(()=>module.DummyData),
            setCurrentObjectData(ObjectData)
        ))
        .catch(error => console.error(error))
        console.log(currentSeletedData);
    },[dataName, ObjectData]);

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
                            <Total>{`총 ${currentObjectData?.length}개 ${sumTitle}`}</Total>
                        :   <Total>{`총 ${currentObjectData?.length}개 ${title}`}</Total>
                        }
                        <Sort>
                            {sortArr.map((i:any,idx:number)=>(
                                <span key={idx} onClick={()=>handleSort(i)}>{i}</span>
                            ))}
                        </Sort>
                        </div>
                    </TotalSortWrapper>
                    <ObjectList ref={objectListRef} routePageName={routeroutePageName}>
                        {currentObjectData?.map((i:any,idx:number)=>(
                            ObjectForm ? React.createElement(ObjectForm, {key:idx, data:i}) : null
                        ))}
                    </ObjectList>
                </Contents>
                <WritingButton onClick={()=>router.push(`/${routeroutePageName}/post`)}>글쓰기</WritingButton>
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

    & > span{
        cursor: pointer;
    }
`;

const ObjectList = styled.div<{routePageName:string}>`
    display: flex;
    flex-direction: ${({routePageName})=>(routePageName==='project'?'unset':'column')};
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    min-height: 100vh;

    ${media.tablet || media.mobile}{
        justify-content: ${({routePageName})=>(routePageName==='project'?'center':'unset')};
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