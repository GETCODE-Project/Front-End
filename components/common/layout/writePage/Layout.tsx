import { HartOffSVG, WishOnSVG } from "@/public/SVG/reactionCount";
import { media } from "@/styles/mediaQuery";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { MultiToggle, SingleToggle } from "../detail,editPage/ToggleLayout";
import { useSubjectsList, useTechStacksList } from "../../data/ToggleListData";

interface SidoGugun{
    key: number;
    siDo: string;
    guGun: string[];
}

const PostLayout = () => {

    const router = useRouter();

    /** 게시글 이용, 작성 항목 */
    const [pageName, setPageName] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [introduction, setIntroduction] = useState<string>('');
    const [content, setContent] = useState<string>('');

    /** 페이지 */
    const projectPage = router.pathname.includes('/project/');
    const findProjectPage = router.pathname.includes('/findProject/');
    const findStudyPage = router.pathname.includes('/findStudy/');
    const communityPage = router.pathname.includes('/community/');

    /** 기술스택, 주제, 스터디분야 토글 리스트 데이터 */
    const {data: subjects, isLoading: isSubjectsLoading, isError: isSubjectsError} = useSubjectsList();
    const {data: techStacks, isLoading: isTechStacksLoading, isError: isTechStacksError} = useTechStacksList();

    /** 상세 검색 항목 리스트 */
    const [stackDataArray, setStackDataArray] = useState<any[]>([]);
    const [subjectDataArray, setSubjectDataArray] = useState<any>();
    const onlineStatusDataArray:string[] = ['전체','온라인','오프라인'];
    const [fieldDataArray, setFieldDataArray] = useState<string[]>([]);
    const [sidoGugunDataArray, setSidoGugunDataArray] = useState<SidoGugun[]>([]);
    const recruitmentStatusDataArray:string[] = ['모집 중','모집 완료','전체'];

    /** 현재 선택된 상세 검색 항목(마지막으로 선택된 항목) */
    const [currentSelectedStack, setCurrentSelectedStack]=useState<string>('전체');
    const [currentSelectedSubject, setCurrentSelectedSubject]=useState<string>('전체');
    const [currentSelectedField, setCurrentSelectedField]=useState<string>('전체');
    const [currentSelectedOnline, setCurrentSelectedOnline]=useState<boolean|string>('전체');
    const [currentSelectedSido, setCurrentSelectedSido]=useState<string>('시/도 선택');
    const [currentSelectedGugun, setCurrentSelectedGugun]=useState<string>('구/군 선택');
    const [currentSelectedRecruitment, setCurrentSelectedRecruitment]=useState<boolean|string>('전체');

    /** 현재 선택된 상세 검색 항목(총 선택된 항목) - 다중선택토글폼에만 해당 */
    const [selectedStackAll,setSelectedStackAll]=useState<string[]>([]);
    const [selectedStackAllField,setSelectedStackAllField]=useState<string[]>([]);

    /** 입력폼 status 함수 */
    // 제목 입력
    const handleTitle = (e:React.ChangeEvent<HTMLInputElement>) => {
        let target = e.target.value;
        setTitle(target);
    }
    // 한줄 소개
    const handleIntroduction = (e:React.ChangeEvent<HTMLInputElement>) => {
        let target = e.target.value;
        setIntroduction(target);
    }
    // 내용 입력
    const handleContent = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        let target = e.target.value;
        setContent(target);
    }

    /** 페이지 네임 */
    useEffect(() => {
        let pageName = '';
        if(router.pathname.includes('/project/')){
            pageName = '프로젝트'
        }else if(router.pathname.includes('/findProject/')){
            pageName = '프로젝트 모집'
        }else if(router.pathname.includes('/findStudy/')){
            pageName = '스터디 모집'
        }else if(router.pathname.includes('/community/')){
            pageName = '커뮤니티'
        }
        setPageName(pageName);
    },[]);

    return (
        <Layout>
            <PageName>
                <div>{pageName}</div>
                <div id="pageState">글쓰기</div>
            </PageName>
            <TitleWrapper>
                <div className="title">
                    <input type="text" placeholder="제목을 입력하세요" onChange={handleTitle}/>
                </div>
            </TitleWrapper>
            {communityPage?null
            :
                <IntroWrapper>
                    {projectPage?
                        <>
                            <IntroMenu>한 줄 소개</IntroMenu>
                            <Input type="text" placeholder="프로젝트 한 줄 소개를 입력해주세요." onChange={handleIntroduction}/>
                            
                            {/* [TODO:현재는 깃헙만 반영, 추후 링크 추가 기능 작성 예정] */}
                            <IntroMenu>깃헙 링크</IntroMenu>
                            <SourceLinks>
                                <div id="linkMenu">GitHub</div>
                                <input type="text" />
                            </SourceLinks>
                        </>
                        :null
                    }
                    
                    {projectPage||findProjectPage?
                        <>
                            <IntroMenu>주제</IntroMenu>
                            <SingleToggle data={subjects}
                                currentSelected={currentSelectedSubject}
                                setCurrentSelected={setCurrentSelectedSubject}
                            />
                        </>
                        :null
                    }
                    
                    {projectPage||findProjectPage?
                        <>
                            <IntroMenu>기술 스택</IntroMenu>
                                <MultiToggle data={techStacks}
                                    currentSelected={currentSelectedStack}
                                    setCurrentSelected={setCurrentSelectedStack}
                                    selectedAll={selectedStackAll}
                                    setSelectedAll={setSelectedStackAll}
                                />
                        </>
                        :null
                    }
                    
                    {findStudyPage?
                        <>
                            <IntroMenu>스터디 분야</IntroMenu>
                                <MultiToggle data={subjects}
                                    currentSelected={currentSelectedField}
                                    setCurrentSelected={setCurrentSelectedField}
                                    selectedAll={selectedStackAllField}
                                    setSelectedAll={setSelectedStackAllField}
                                />
                            
                        </>
                        :null
                    }
                    
                    {findProjectPage||findStudyPage?
                        <>
                            <IntroMenu>온/오프라인</IntroMenu>
                            <SingleToggle data={onlineStatusDataArray}
                                currentSelected={currentSelectedOnline}
                                setCurrentSelected={setCurrentSelectedOnline}
                            />
                            

                            <IntroMenu>지역</IntroMenu>
                            <div></div>
                            

                            <IntroMenu>신청 방법</IntroMenu>
                            <div></div>
        
                        </>
                        :null
                    }

                </IntroWrapper>
                
            }
            
            <ContentWrapper>
                <textarea id="content" placeholder="내용을 작성해주세요" onChange={handleContent}/>
            </ContentWrapper>

            
            <ModifyWrapper>
                    <>
                        <div id="del" onClick={()=>router.back()}>취소</div>
                        <div id="post">등록</div>
                    </>
            </ModifyWrapper>
        </Layout>
    )
}

export default PostLayout;


const Layout = styled.div`
    display: flex;
    flex-direction: column;
    width: 800px;

    ${media.mobile || media.tablet}{
        width: 100%;
        padding: 0 20px;
    }
`;

const PageName = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;
  gap: 10px;
  width: 100%;

  font-size: 1.25rem;
  color: #ff4b13;

  & > div{
    padding-top: 2px;
  }
  & #pageState{
    padding: 3px 10px;
    padding-top: 4px;
    height: 100%;

    /* background-color: #FF993A; */
    border-left: 1px solid #FF993A;
    border-radius: 3px;

    color: #FF993A;
    font-size: 14px;
  }
`;

const TitleWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 16px;
    padding: 16px 0;

    border-bottom: 2px solid #BDBDBD;

    & .title{
        display: flex;
        gap: 25px;
        font-size: 2.1875rem;
        font-weight: 600;

        & > input{
            border: none;

            font-size: 2.1875rem;
            font-weight: 600;

            &:focus{
                outline: none;
            }
        }
    }
`;

const ContentWrapper = styled.div`
    display: flex;
    min-height: 300px;
    padding: 25px;

    line-height: 1.375rem;

    & > textarea{
        width: 100%;
        padding: 20px;
        resize: none;

        font-size: 1rem;
        &:focus{
            outline: none;
        }
    }
`;

const ModifyWrapper = styled.div`
    display: flex;
    justify-content: right;
    gap: 25px;
    padding: 25px 0;
    margin: 0 25px;

    border-top: 1px solid #BDBDBD;

    font-size: 1rem;
    font-weight: 600;

    & > div{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 25px;

        border-radius: 6px;
        background-color: #fff;

        cursor: pointer;
    }
    & #del{
        border: 1px solid #FF4B13;
        background-color: #fff;
        color: #FF4B13;
    }
    & #post{
        background-color: #FF4B13;
        color: #fff;
    }
`;

const IntroWrapper = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 25px;
    padding: 25px 0;
    margin: 0 25px;

    border-bottom: 1px solid #BDBDBD;

    & > div{
        display: flex;
        /* align-items: center; */
        font-size: 1rem;
        /* padding-top: 2px; */
    }
`;

const IntroMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 120px;
    height: 25px;
    padding: 0 10px;
    white-space: nowrap;

    background-color: #FFF1E4;
    border-radius: 30px;
    border: 1px solid #FF4B13;

    color: #FF4B13;
    font-size: 1rem;
    font-weight: 600;
`;

const Input = styled.input`
    padding: 0 10px;
    &:focus{
        outline: none;
    }
`;

const IntroText = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

const TechStacks = styled.div`
    display: flex;
    gap: 8px;
    
    & #stack{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 20px;

        border-radius: 30px;
        background-color: #D9D9D9;
    }
`;

const StudyField = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    height: 100%;

    border-radius: 30px;
    background-color: #D9D9D9;
`;

const SourceLinks = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;

    border-radius: 3px;
    border: 1px solid #5200ff;

    & #linkMenu{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 100%;

        background-color: #5200FF;

        color: #fff;
    }
    & > input{
        width: 100%;
        height: 100%;
        padding: 0 10px;
        border: none;
        font-size: 1rem;

        &:focus{
            outline: none;
        }
    }
`;


const CommentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin: 0 25px;
    padding: 25px 0;
    border-top: 1px solid #BDBDBD;

    & .writeComment{
        display: grid;
        grid-template-columns: auto 1fr auto;
        align-items: center;
        gap: 15px;
        padding: 0 25px;
        /* position: relative; */

        & #profile{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            overflow: hidden;
            filter: drop-shadow(0px 0px 8px rgba(125, 125, 125, 0.25));
        }
        & #input{
            height: 40px;
            border-radius: 8px;
            border: 3px solid #FF993A;
            padding: 0 10px;

            font-size: 1rem;
            filter: drop-shadow(0px 0px 5px rgba(125, 125, 125, 0.25));

            &:focus{
                outline: none;
            }
        }
        & #button{
            display: flex;
            justify-content: center;
            align-items: center;
            /* position: absolute; */
            /* right: 10px; */
            /* top: 10px; */
            height: 30px;
            padding: 0 20px;

            background-color: #FF993A;
            border-radius: 6px;

            color: #fff;
            font-size: 14px;

            cursor: pointer;
        }
    }
    & .viewComment{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px;

        background-color: #FFF1E4;

        & #oneComment{
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        justify-content: center;
        gap: 10px;
        width: 100%;
        padding: 20px 0;

        background-color: #FFF1E4;
        border-bottom: 1px solid #FFE2C6;

            & #commentLog{
                display: flex;
                gap: 10px;
            }
        }

        & #commentText{
            display: grid;
            grid-template-columns: 1fr auto;

            & #hart{
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 70px;
            }
        }

        & #moreView{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 185px;
            height: 30px;
            margin: 30px 0;

            border-radius: 30px;
            background-color: #fff;
            filter: drop-shadow(0px 2px 5px rgba(125, 125, 125, 0.25));

            color: #FF993A;
            font-size: 1rem;
            font-weight: 600;

            cursor: pointer;
        }
    }
`;