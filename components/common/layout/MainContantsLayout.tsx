import styled from "styled-components";
import SearchInput from "@/components/common/search/SearchInput";
import { media } from "@/styles/mediaQuery";
import { useEffect, useRef, useState } from "react";
import React from "react";
import { useRouter } from "next/router";
import Alert from '@/components/common/notification/Alert';

/** ------------------------------------------------------------- */
/** 게시물 목록 페이지 레이아웃 재사용 폼 */ //
/** ------------------------------------------------------------- */
// 페이지타이틀,소타이틀,검색단,총NN개,정렬(최신순/과거순/인기순),게시물목록,글쓰기버튼
/**[TODO]
 * [1] 
 */

// 게시물 목록 페이지 레이아웃에 필요한 Props
interface MainContentsLayoutProps {
    pageName: string;
    title: string;
    subTitle?: string;
    sumTitle?: string;
    children?: any;
    detailSearchSelectedData: any;
    id?:any;
}

/** 프로젝트, 프로젝트모집, 스터디모집의 메인 페이지 레이아웃 컴포넌트*/

const MainContantsLayout = ({pageName, title, subTitle, sumTitle, children, detailSearchSelectedData, id}:MainContentsLayoutProps) => {
    const router = useRouter();
    const objectListRef = useRef<HTMLDivElement>(null);

    /** 로그인Alert OnOff */
    const [isLoginAlertOn, setIsLoginAlertOn] = useState<boolean>(false);

    /** 게시물 데이터를 불러 올 모듈 이름 */
    const [moduleName, setModuleName] = useState<string>('');

    /** 정렬 구성(최신순,과거순,좋아요순) */
    const sortArr:any [] = ["최신순","과거순","좋아요순"];

    /** 페이지 별 게시물 폼, 데이터 */
    const [objectData, setObjectData] = useState<any[]>([]);
    const [objectForm, setObjectForm] = useState(null);

    /** 게시물 전체 목록 불러오기 GET 파라미터 데이터 리스트 */
    const [year, setYear] = useState<string>('');
    const [keyword, setKeyword] = useState<string>('');
    const [size, setSize] = useState<number>(10);
    const [page, setPage] = useState<number>(1);
    const [sort, setSort] = useState<string>('latestOrder');
    const [subject, setSubject] = useState<string>('');
    const [techStack, setTechStack] = useState<string[]>([]);
    const [memberId, setMemberId] = useState<number>();

    /** 페이지 별 게시물 전체 목록 불러오기 GET 파라미터 SET*/
    const [params, setParams] = useState<any>();
    const projectParams = {year, keyword, size, page, sort, subject, techStack, memberId};
    const findProjectParams = {year, keyword, size, page, sort, subject, techStack, memberId};
    const findStudyParams = [{}];
    const communityParams = [{}];

    /** 상세 검색 항목 SET */
    

    /** 토탈(총 N..N개 프로젝트) 함수 작성 예정*/

    /** 정렬(최신순, 과거순, 좋아요순) */
    const handleSort = (sortName:string) => {
        if(sortName === '최신순'){
            setSort('latestOrder');
        }
        if(sortName === '과거순'){
            setSort('pastOrder');
        }
        if(sortName === '좋아요순'){
            setSort('likeCnt');
        }
    } 

    /** 상세 검색 적용 */

    /** 페이지 별 객체 폼 불러오기 */
    useEffect(() => {
        import(`@/components/${pageName}/ObjectForm`)
        .then(module => {pageName=='project'?
            setObjectForm(()=>module.ObjectForm)
        : setObjectForm(()=>module.default)})
        .catch(error => console.error(error))
    },[pageName, setObjectData]);

    /** 페이지 별 ModuleName,ParamsSet 설정 */
    useEffect(() => {
        let moduleName = '';
        switch (pageName){
            case 'project':
                moduleName = 'ProjectData';
                setParams(projectParams);
                break;
            case 'findProject':
                moduleName = 'FindProjectData'
                setParams(findProjectParams);
                break;
            case 'findStudy':
                moduleName = 'FindStudyData'
                setParams(findStudyParams);
                break;
            case 'community':
                moduleName = 'CommunityData'
                setParams(communityParams);
                break;
            default:
                return;
        }
        setModuleName(moduleName);
    },[pageName, sort, year, keyword, size, page, subject, techStack, memberId]);

    /** 페이지 별 데이터 불러오기 */
    useEffect(()=>{
        if(!moduleName) return;

        const getData = async() => {
            try{
                const getModule = await import(`@/components/common/objectAllData/${moduleName}`);
                await getModule.getObjectData({
                    params,setObjectData
                });
            }
            catch (error){
                console.error(error);
            }
        };
        getData();
        
    },[params, moduleName])

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
                <SearchInput>
                    <Search>
                        <div>
                            {children}
                        </div>
                        <SearchButton>검색하기</SearchButton>
                    </Search>
                </SearchInput>
                
                <Contents>
                    <TotalSortWrapper>
                        {subTitle?
                            <Total>{`총 ${objectData?.length}개 ${sumTitle}`}</Total>
                        :   <Total>{`총 ${objectData?.length}개 ${title}`}</Total>
                        }
                        <Sort>
                            {sortArr.map((i:any,idx:number)=>(
                                <span key={idx} onClick={()=>handleSort(i)}>{i}</span>
                            ))}
                        </Sort>
                    </TotalSortWrapper>
                    <ObjectList ref={objectListRef} pageName={pageName}>
                        {Array.isArray(objectData)&&objectData?.map((i:any,idx:number)=>(
                            objectForm ? React.createElement(objectForm, {
                                key:idx, data:i, setIsLoginAlertOn:setIsLoginAlertOn
                            }) : null
                        ))}
                    </ObjectList>
                </Contents>
                <WritingButton onClick={()=>router.push(`/${pageName}/post`)}>글쓰기</WritingButton>
            </Layout>
            {isLoginAlertOn?<Alert setIsLoginAlertOn={setIsLoginAlertOn}/>:null}
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
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 20px;
    width: 100%;
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

const ObjectList = styled.div<{pageName:string}>`
    display: flex;
    flex-direction: ${({pageName})=>(pageName==='project'?'unset':'column')};
    flex-wrap: wrap;
    align-items: center;
    width: 100%;

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

const Search = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;
    width: 100%;
`;
const SearchButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 35px;

    background-color: #FF993A;
    border-radius: 30px;

    cursor: pointer;
`;