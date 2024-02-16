import { Profile2SVG, ProfileSVG } from "@/public/SVG/profile";
import { HartOffSVG, WishOnSVG } from "@/public/SVG/reactionCount";
import { media } from "@/styles/mediaQuery";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { GET, POST, PUT } from "@/pages/api/axios";
import { useSubjectsList, useTechStacksList} from "@/components/common/data/ToggleListData";
import { MultiToggle, SingleToggle } from "@/components/common/layout/Detail,Post/ToggleLayout";

interface SidoGugun{
    key: number;
    siDo: string;
    guGun: string[];
}

const DetailLayout = () => {

    const router = useRouter();
    const {id} = router.query;

    /** 페이지 */
    const projectPage = router.pathname.includes('/project/');
    const findProjectPage = router.pathname.includes('/findProject/');
    const findStudyPage = router.pathname.includes('/findStudy/');
    const communityPage = router.pathname.includes('/community/');
    const detailPage = router.pathname.includes('/detail/');
    const editPage = router.pathname.includes('/edit/');
    const writePage = router.pathname.includes('/write/');
    
    /** 해당 게시글 데이터 */
    const [data, setData] = useState<any>();

    /** 게시글 데이터 항목 */
    const [pageName, setPageName] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [introduction, setIntroduction] = useState<string>('');
    const [githubUrl, setGithubUrl] = useState<string>('');

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

    /** 검색하기에 반영될 선택된 토글 항목들 */
    const [detailSearchSelectedData, setDetailSearchSelectedData]=useState<any[]>([]);

    /** 수정하기 페이지 이동 */
    const handleGoWritePage = () => {
        const editPath = router.pathname.replace('detail','edit');
        const editUrl = router.asPath.replace('detail','edit');
        return router.push(editPath, editUrl);
    }

    /** Status 변경 */
    // 제목 입력 status
    const handleInputTitle = (e:React.ChangeEvent<HTMLInputElement>) => {
        let target = e.target.value;
        setTitle(target);
    }
    // 본문 내용 입력 Status 변경
    const handleInputContent = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        let target = e.target.value;
        setContent(target);
    }
    // 깃헙 URL 입력 status
    const handleInputGitUrl = (e:React.ChangeEvent<HTMLInputElement>) => {
        let target = e.target.value;
        setGithubUrl(target);
    }

    /** 수정 사항 반영 POST */
    const postEdit = async() => {
        if(projectPage){
            await PUT(`/api/project/${id}/update`,{
                title: title,
                content: content,
                introduction: introduction,
                githubUrl: githubUrl,
                techStackList: selectedStackAll,
                subject: currentSelectedSubject
            })
            .then((res)=>{console.log(res.data);})
            .catch((err)=>console.error(err));
        }else if(findProjectPage){
            await PUT(`/api/projectrecruitment/${id}`)
            .then((res)=>{console.log(res.data);})
            .catch((err)=>console.error(err));
        }else if(findStudyPage){
            await PUT(`/api/study/${id}`)
            .then((res)=>{console.log(res.data);})
            .catch((err)=>console.error(err));
        }else if(communityPage){
            await PUT(`/api/community/${id}`)
            .then((res)=>{console.log(res.data);})
            .catch((err)=>console.error(err));
        }
    }

    /** 최종 선택 된 토글 항목들 */
    useEffect(() =>{
      let tumpArray:any[] = [{
        stack:selectedStackAll,
        subject:currentSelectedSubject,
        online: currentSelectedOnline==='온라인'?true:currentSelectedOnline==='오프라인'?false:'',
        siDo: currentSelectedSido,
        guGun: currentSelectedGugun,
        recruitment: currentSelectedRecruitment==='모집 중'?true:currentSelectedRecruitment==='모집 완료'?false:'',
        field: selectedStackAllField,
      }];
      setDetailSearchSelectedData(tumpArray);
    },[currentSelectedStack,currentSelectedSubject,currentSelectedField,currentSelectedOnline,currentSelectedRecruitment,currentSelectedSido,currentSelectedGugun]);

    /** 해당 데이터 불러오기 */
    useEffect(()=>{

        const getData = async(api:any) => {
            let tumpApi = api;
            await GET(`${tumpApi}`)
            .then((res)=>{
                setData(res.data);
            })
            .catch((err)=>console.error(err));
        }

        /**[TODO: router.isReady 처리 해주기 전에는 getData를 호출할 시점에 계속 id가 undefined, {object object}로 나오는 이슈가 있었다.] */
        if(router.isReady){
            // const {id} = router.query;
            if(router.pathname.includes('project/detail/')||router.pathname.includes('project/edit/')){
                getData(`/api/project/detail/${id}`);
                setPageName('프로젝트');
            } else if(router.pathname.includes('findProject/detail/')||router.pathname.includes('findProject/edit/')){
                getData(`/api/projectrecruitment/detail/${id}`);
                setPageName('프로젝트 모집');
            } else if(router.pathname.includes('findStudy/detail/')||router.pathname.includes('findStudy/edit/')){
                getData(`/api/study/${id}`);
                setPageName('스터디 모집');
            } else if(router.pathname.includes('community/detail/')||router.pathname.includes('community/edit/')){
                getData(`/api/community/${id}`);
                setPageName('커뮤니티');
            }
        }
    },[router.isReady,router.query,router.pathname]);

    useEffect(()=>{
        const statusData = () => {
            setCurrentSelectedSubject(data?.subject);
            let tumpTechStacks:any[] = [];
            tumpTechStacks = data?.techStacks.map((i:any)=>i.techStack);
            setSelectedStackAll(tumpTechStacks);
            setCurrentSelectedStack(tumpTechStacks?.length>0&&tumpTechStacks[tumpTechStacks.length - 1]);
        }
        data?statusData():null;
        
    },[data])

    return(
        <Layout>
            <PageName>
                <div>{pageName}</div>
                <div id="pageState">{editPage?'수정 페이지':writePage?'작성 페이지':''}</div>
            </PageName>
            <TitleWrapper>
                <div className="title">
                    {editPage?
                        <div id="editTitle">
                            <input type="text" defaultValue={data?.title} placeholder="제목을 입력하세요" onChange={handleInputTitle}/>
                        </div>
                    :   <div>{data?.title}</div>
                    }
                    
                </div>
                {editPage?null
                :
                <>
                    <div className="feedback">
                        {projectPage?null:<div id="recruit">모집 중</div>}
                        
                        <div style={{display:'flex',gap:'5px'}}>
                            <div><HartOffSVG size="28"/></div>
                            <div style={{paddingTop:'8px'}}>1,234</div>
                        </div>
                        <div style={{paddingTop:'3px'}}><WishOnSVG/></div>
                    </div>
                    <div className="writer">{`작성자: ${data?.member?.nickname || data?.memberNickName || data?.memberNickname ||''}`}</div>
                </>

                }
                
            </TitleWrapper>
            {communityPage?null
            :
                <IntroWrapper>
                    {projectPage?
                        <>
                            <IntroMenu>한 줄 소개</IntroMenu>
                            {detailPage&&!editPage?
                                <IntroText>{data?.introduction&&data?.introduction}</IntroText>:<Input type="text" defaultValue={data?.introduction} placeholder="프로젝트 한 줄 소개를 입력해주세요."/>
                            }
                            
                            {/* [TODO:현재는 깃헙만 반영, 추후 링크 추가 기능 작성 예정] */}
                            <IntroMenu>깃헙 링크</IntroMenu>
                            {detailPage&&!editPage?
                                <SourceLinks>
                                    <a id="link" style={{backgroundColor:'#5200FF'}} href={data?.githubUrl&&data?.githubUrl} target="_blank">GITHUB</a>
                                    {data?.velogUrl ? <a id="link" style={{backgroundColor:'#54E78F'}}>VELOG</a>:null}
                                    {data?.gitlabUrl ? <a id="link" style={{backgroundColor:'#FFA800'}}>GITLAB</a>:null}
                                </SourceLinks>
                            :   <Input type="text" defaultValue={data?.githubUrl&&data?.githubUrl} onChange={handleInputGitUrl}/>
                            }
                        </>
                        :null
                    }
                    
                    {projectPage||findProjectPage?
                        <>
                            <IntroMenu>주제</IntroMenu>
                            {detailPage&&!editPage?<IntroText>{data?.subject&&data?.subject}</IntroText>:
                            <SingleToggle data={subjects}
                                currentSelected={currentSelectedSubject}
                                setCurrentSelected={setCurrentSelectedSubject}
                            />}
                        </>
                        :null
                    }
                    
                    {projectPage||findProjectPage?
                        <>
                            <IntroMenu>기술 스택</IntroMenu>
                            {detailPage&&!editPage?
                                <TechStacks>
                                    {data?.techStacks?.map((i:any,idx:number)=>(
                                        <div id="stack" key={idx}>{i.techStack}</div>
                                    ))}
                                </TechStacks>
                            
                            :   <MultiToggle data={techStacks}
                                currentSelected={currentSelectedStack}
                                setCurrentSelected={setCurrentSelectedStack}
                                selectedAll={selectedStackAll}
                                setSelectedAll={setSelectedStackAll}
                            />  
                            }
                        </>
                        :null
                    }
                    
                    {findStudyPage?
                        <>
                            <IntroMenu>스터디 분야</IntroMenu>
                            {detailPage&&!editPage?<div>1</div>:<MultiToggle data={subjects}
                                currentSelected={currentSelectedField}
                                setCurrentSelected={setCurrentSelectedField}
                                selectedAll={selectedStackAllField}
                                setSelectedAll={setSelectedStackAllField}
                            />}
                            
                        </>
                        :null
                    }
                    
                    {findProjectPage||findStudyPage?
                        <>
                            <IntroMenu>온/오프라인</IntroMenu>
                            {detailPage&&!editPage?<IntroText>1</IntroText>:<SingleToggle data={onlineStatusDataArray}
                                currentSelected={currentSelectedOnline}
                                setCurrentSelected={setCurrentSelectedOnline}
                            />}
                            

                            <IntroMenu>지역</IntroMenu>
                            {detailPage&&!editPage?<IntroText>8</IntroText>:<></>}
                            

                            <IntroMenu>신청 방법</IntroMenu>
                            {detailPage&&!editPage?<IntroText>8</IntroText>:<></>}
        
                        </>
                        :null
                    }

                </IntroWrapper>
                
            }
            
            <ContentWrapper>
                {editPage?
                    <textarea id="content" placeholder="내용을 작성해주세요" defaultValue={data?.content} onChange={handleInputContent}/>
                :   <>{data?.content&&data?.content}</>
                }
            </ContentWrapper>

            {data?.writer&&data?.writer?
                <ModifyWrapper>
                    {detailPage?
                        <>
                            <div id="del">삭제</div>
                            <div id="post" onClick={()=>handleGoWritePage()}>수정</div>
                        </>
                    :editPage?
                        <>
                            <div id="del">취소</div>
                            <div id="post" onClick={()=>postEdit()}>수정 완료</div>
                        </>
                    :writePage?
                        <>
                            <div id="del">취소</div>
                            <div id="post">등록</div>
                        </>
                    :null
                    }
                    
                    
                </ModifyWrapper>
                :null
            }
            
            {detailPage&&!editPage?
                <CommentWrapper>
                    <div>댓글 N개</div>
                    <div className="writeComment">
                        <div id="profile"><Profile2SVG size="40"/></div>
                        <input id="input"/>
                        <div id="button">등록</div>
                    </div>
                    <div className="viewComment">
                        <div id="oneComment">
                            <div><ProfileSVG size="40"/></div>
                            <div id="commentLog">
                                <div>닉네임</div>
                                <div>2023.12.28.19:00</div>
                            </div>
                            <div></div>
                            {/* [TODO: 그리드에서 빈칸으로 두고싶으면 빈 div를 두는 방법 말고는 없을까?] */}
                            <div id="commentText">
                                <div>댓글내용 텍스트</div>
                                <div id="hart">
                                    <div><HartOffSVG size="20"/></div>
                                    <div>1,246</div>
                                </div>
                            </div>
                        </div>
                        <div id="oneComment">
                            <div><ProfileSVG size="40"/></div>
                            <div id="commentLog">
                                <div>닉네임</div>
                                <div>2023.12.28.19:00</div>
                            </div>
                            <div></div>
                            {/* [TODO: 그리드에서 빈칸으로 두고싶으면 빈 div를 두는 방법 말고는 없을까?] */}
                            <div id="commentText">
                                <div>댓글내용 텍스트</div>
                                <div id="hart">
                                    <div><HartOffSVG size="20"/></div>
                                    <div>1,246</div>
                                </div>
                            </div>
                        </div>
                        <div id="oneComment">
                            <div><ProfileSVG size="40"/></div>
                            <div id="commentLog">
                                <div>닉네임</div>
                                <div>2023.12.28.19:00</div>
                            </div>
                            <div></div>
                            {/* [TODO: 그리드에서 빈칸으로 두고싶으면 빈 div를 두는 방법 말고는 없을까?] */}
                            <div id="commentText">
                                <div>댓글내용 텍스트</div>
                                <div id="hart">
                                    <div><HartOffSVG size="20"/></div>
                                    <div>1,246</div>
                                </div>
                            </div>
                        </div>
                        <div id="moreView">더보기</div>
                    </div>
                </CommentWrapper>
                :null
            }
        </Layout>
    )
}
export default DetailLayout;

const d = styled.div`

`;

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

        & #editTitle{
            display: grid;
            grid-template-columns: auto 1fr;
            align-items: center;
            gap: 10px;
            width: 100%;

            & > input{
                border: none;

                font-size: 2.1875rem;
                font-weight: 600;

                &:focus{
                    outline: none;
                }
            }
        }
    }
    & .feedback{
        display: flex;
        justify-content: right;
        gap: 10px;
        & #recruit{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 120px;
            height: 25px;

            background-color: #00FF1A;
            border-radius: 30px;

            font-size: 1rem;
            font-weight: 600;
        }
        ${media.mobile}{
        justify-content: start;
        }
    }
    & .writer{
        display: flex;
        align-items: center;
    }

    ${media.mobile}{
        grid-template-columns: auto;
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
`;

const TechStacks = styled.div`
    display: flex;
    
    & #stack{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 20px;

        border-radius: 30px;
        background-color: #D9D9D9;
    }
`;

const SourceLinks = styled.div`
    display: flex;
    gap: 10px;

    & #link{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        padding-top: 2px;

        border-radius: 3px;
        background-color: #5200FF;

        color: #fff;
        text-decoration: none;

        cursor: pointer;
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