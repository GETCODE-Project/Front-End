import { media } from "@/styles/mediaQuery";
import styled from "styled-components";
import {PopularityObjectForm} from "@/components/project/ObjectForm";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import {PopularityDummyData} from '@/components/dummy/ProjectData';

const MainPage = () => {

    const router = useRouter();
    const objectListRef = useRef<HTMLDivElement>(null);
    
    const [ObjectForm, setObjectForm] = useState(null);
    const [ObjectData, setObjectData] = useState<[]>([]);
    const [pageName, setPageName] = useState<string>('project');
    const [dataName, setDataName] = useState<string>('ProjectData');

    const dotArr: any[] = [1,2,3,4,5];

    const [popularityProjectData, setPopularityProjectData] = useState<any[]>([]);

    const handlePageName = (pageName:string, dataName:string) => {
        setPageName(pageName);
        setDataName(dataName);
    }

    useEffect(() => {
        import(`@/components/${pageName}/ObjectForm`)
        .then(module => {pageName=='project'?
            setObjectForm(()=>module.ObjectForm)
        : setObjectForm(()=>module.default)})
        .catch(error => console.error(error))
    },[pageName]);

    useEffect(() => {
        import(`@/components/dummy/${dataName}`)
        .then(module =>setObjectData(()=>module.DummyData))
        .catch(error => console.error(error))
    },[dataName]);

    useEffect(()=>{
        let tumpArray:any[] = [...PopularityDummyData];
        tumpArray.sort((a,b)=>b.likes - a.likes);
        tumpArray.slice(0,9);
        setPopularityProjectData(tumpArray);
    },[dataName])

    return (
        <BackLayout>
            <Layout>
                <TopContents>
                    <Contents>
                        <Title>GETCODE 인기 프로젝트</Title>
                        <MoreViewButton onClick={()=>router.push('/project')}>더보기</MoreViewButton>
                        <ObjectWrapper id="topObject">
                            {popularityProjectData?.map((i:any, idx:number)=>(
                                <PopularityObjectForm key={idx} style={{width:'250px', height:'300px'}} data={i}/>
                            ))}
                        </ObjectWrapper>
                        <PageDots>
                            {dotArr.map((i:any, idx:number)=>(
                                <Dot key={idx}/>
                            ))}
                        </PageDots>
                    </Contents>
                </TopContents>
                <BottomContents>
                    <Title>
                        <span onClick={()=>handlePageName('project','ProjectData')}>프로젝트 |</span>
                        <span onClick={()=>handlePageName('findProject','FindProjectData')}>프로젝트 모집 |</span>
                        <span onClick={()=>handlePageName('findStudy','FindStudyData')}>스터디 모집</span>
                    </Title>
                    <MoreViewButton onClick={()=>router.push(`/${pageName}`)}>더보기</MoreViewButton>
                    <ObjectList ref={objectListRef}>
                        {ObjectData?.map((i:any,idx:number)=>(
                            ObjectForm ? React.createElement(ObjectForm, {key:idx, data:i}) : null
                        ))}
                    </ObjectList>
                </BottomContents>
            </Layout>
        </BackLayout>
    )
}
export default MainPage;

const BackLayout = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
    width: 100%;
    /* padding: 0 55px 70px; */
    overflow: hidden;
`;

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1000px;

    ${media.tablet || media.mobile}{
        width: 100%;
    }
`;

const TopContents = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 600px;
    padding: 20px;
    box-sizing: border-box;
    overflow: hidden;

    background-color: #ff4b13;
`;

const Contents = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 25px;

    & #topObject{
        flex-wrap: nowrap;
    }
`;
const Title = styled.div`
    & > span{
        padding: 0 5px;
        box-sizing: border-box;

        cursor: pointer;
        &:hover{
            font-weight: 700;
        }
    }
`;
const MoreViewButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 32px;
    box-sizing: border-box;

    background-color: #000;

    color: #fff;

    cursor: pointer;
`;
const ObjectWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;
const PageDots = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 20px;
`;
const Dot = styled.div`
    width: 17px;
    aspect-ratio: 1/1;

    border-radius: 100px;
    background-color: #fff;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    cursor: pointer;
    &:hover{
        background-color: #ff3d00;
    }
`;

const BottomContents = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    width: 100%;
    padding: 45px 0;
`;

const ObjectList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    width: 100%;
    min-height: 100vh;

    ${media.tablet || media.mobile}{
        justify-content: center;
    }
`;