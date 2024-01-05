import styled from "styled-components";
import SearchInput from "@/components/common/search/SearchInput";
import { media } from "@/styles/mediaQuery";
import { useEffect, useState } from "react";
import React from "react";

interface MainContentsLayoutProps {
    pageName: string;
    title: string;
}

/** 프로젝트, 프로젝트모집, 스터디모집의 메인 페이지 레이아웃 컴포넌트*/

const MainContantsLayout = ({pageName, title}:MainContentsLayoutProps) => {
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

    return(
        <BackLayout>
            <Layout>
                <Title>{`GETCODE ${title}`}</Title>
                <SearchInput/>
                <Contents>
                    <TotalSortWrapper>
                        <Total>{`총 ${total}개 ${title}`}</Total>
                        <Sort>
                            {sortArr.map((i:any,idx:number)=>(
                                <span key={idx}>{i}</span>
                            ))}
                        </Sort>
                    </TotalSortWrapper>
                    <ObjectList>
                    {arr.map((i:any,idx:number)=>(
                        ObjectForm ? React.createElement(ObjectForm, {key:idx}) : null
                    ))}
                    </ObjectList>
                </Contents>
            </Layout>
        </BackLayout>
    )
}
export default MainContantsLayout;
const DIV = styled.div``;

const BackLayout = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
    width: 100%;
    height: 100vh;
    padding: 55px 70px;
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
    justify-content: space-between;
    width: 100%;
`;
const Total = styled.div``;
const Sort = styled.div`
    display: flex;
    gap: 10px;
`;

const ObjectList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;

    ${media.tablet || media.mobile}{
        justify-content: center;
        gap: 25px;
    }
`;
