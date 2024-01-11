import styled from "styled-components";
import SearchInput from "@/components/common/search/SearchInput";
import { media } from "@/styles/mediaQuery";
import { useEffect, useRef, useState } from "react";
import React from "react";
import { useRouter } from "next/router";

interface MainContentsLayoutProps {
    pageName: string;
    title: string;
    children?: any;
}

/** 프로젝트, 프로젝트모집, 스터디모집의 메인 페이지 레이아웃 컴포넌트*/

const MainContantsLayout = ({pageName, title, children}:MainContentsLayoutProps) => {
    const router = useRouter();
    const objectListRef = useRef<HTMLDivElement>(null);
    const [objectListWidth, setObjectListWidth] = useState(0);
    const sortArr:any [] = ["최신순","과거순","인기순"];
    const total = 1234;
    //더미데이터,프로젝트수 arr
    const arr:any [] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

    const [ObjectForm, setObjectForm] = useState(null);

    /** 토탈(총 N..N개 프로젝트) 함수 작성 예정*/
    /** 정렬(최신순, 과거순, 인기순) 함수 작성 예정*/

   

    useEffect(() => {
        import(`@/components/${pageName}/ObjectForm`)
        .then(module => setObjectForm(()=>module.default))
        .catch(error => console.error(error))
    },[pageName]);

    useEffect(() => {
        const updateWidth = () => {
            const width = objectListRef.current?.offsetWidth || 0;
            setObjectListWidth(width);
            console.log(width);
        }
        updateWidth();

        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    },[]);

    return(
        <BackLayout>
            <Layout>
                <Title>{`GETCODE ${title}`}</Title>
                <SearchInput>{children}</SearchInput>
                <Contents>
                    <TotalSortWrapper >
                        <div id="wrapper" style={{width:objectListWidth}}>
                        <Total>{`총 ${total}개 ${title}`}</Total>
                        <Sort>
                            {sortArr.map((i:any,idx:number)=>(
                                <span key={idx}>{i}</span>
                            ))}
                        </Sort>
                        </div>
                    </TotalSortWrapper>
                    <ObjectList ref={objectListRef}>
                    {arr.map((i:any,idx:number)=>(
                        ObjectForm ? React.createElement(ObjectForm, {key:idx}) : null
                    ))}
                    </ObjectList>
                </Contents>
            {/* <WritingButton onClick={()=>router.push(`/${pageName}/post`)}>글쓰기</WritingButton> */}
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
    position: relative;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    width: 1000px;
    overflow: hidden;

    ${media.tablet || media.mobile}{
        width: 100%;
        padding: 0 20px;
    }
`;

const Title = styled.div``;

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

const WritingButton = styled.div`
    display: flex;
    position: absolute;
    right: -140px;
    top: 200px;
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