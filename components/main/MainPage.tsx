import { media } from "@/styles/mediaQuery";
import styled from "styled-components";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { GET } from "@/pages/api/axios";
import Alert from "@/components/common/notification/Alert";

/** ------------------------------------------------------------- */
/** 메인 페이지 컴포넌트 */
/** ------------------------------------------------------------- */
/**[TODO]
 * [1] 
 */

const MainPage = () => {

    const router = useRouter();
    const objectListRef = useRef<HTMLDivElement>(null);

    /** 로그인Alert OnOff */
    const [isLoginAlertOn, setIsLoginAlertOn] = useState<boolean>(false);

    const [populateProjectObjectData, setPopulateProjectObjectData] = useState<any[]>([]);
    const [populateProjectObjectForm, setPopulateProjectObjectForm] = useState<any>();
    
    const [objectForm, setObjectForm] = useState<any>();
    const [objectData, setObjectData] = useState<[]>([]);
    
    const [pageName, setpageName] = useState<string>('project');
    const [dataName, setDataName] = useState<string>('ProjectData');

    const dotArr: any[] = [1,2,3,4,5];


    /** 프로젝트 게시물 전체 목록 불러오기 GET 파라미터 데이터 */
    //year,keyword,size,page,sort,subject,techStack
    const [size, setSize] = useState<number>(999);
    const [pageNumber, setPageNumber] = useState<number>(1);

    const [params, setParams] = useState<any>({pageNumber,size});

    const handlepageName = (pageName:string, dataName:string) => {
        setObjectData([]);
        setpageName(pageName);
        setDataName(dataName);
    }

    // useEffect(() => {
    //   console.log(pageName,'페이지네임',dataName,'데이터이름');
    // },[pageName]);

    /** 인기 프로젝트 데이터,폼 불러오기 */
    useEffect(()=>{

      // 인기 프로젝트 데이터 불러오기
      const populateProjectData = async() => {
        await GET(`/api/project/all?pageNumber=${1}&size=${3}&sort=${'likeCnt'}`)
        .then((res)=>{
          setPopulateProjectObjectData(res.data);
        })
        .catch((err)=>{console.error(err);});
      }
      // 인기 프로젝트 객체 폼 불러오기
      const populateProjectForm = () => {
        import(`@/components/project/ObjectForm`)
        .then(module => 
            setPopulateProjectObjectForm(()=>module.ObjectForm)
        )
        .catch(error => console.error(error))
      }

      populateProjectData();
      populateProjectForm();
      
    },[]);


    /** 페이지 별 데이터 불러오기 함수 */
    useEffect(()=>{
      const getData = async() => {
          try{
              const getModule = await import(`@/components/common/objectAllData/${dataName}`);
              await getModule.getObjectData({
                  params,setObjectData
              });
              console.log(objectData,'데엍');
          }
          catch (error){
              console.error(error);
          }
      };
      getData();
    },[dataName]);

    /** 페이지 별 객체 폼 불러오기 */
    useEffect(() => {
      const getForm = () => {
        import(`@/components/${pageName}/ObjectForm`)
        .then(module => {pageName=='project'?
            setObjectForm(()=>module.ObjectForm)
        : setObjectForm(()=>module.default)
        }
        )
        .catch(error => console.error(error))
      }
      getForm();
    },[pageName]);



/** [TODO] 데이터연결 ---------------------------------------------------------------- */
    
    return (
        <BackLayout>
            <Layout>
              {/* I. 인기 프로젝트 게시글 */}
                <TopContents>
                    <Contents>
                        <Title>GETCODE 인기 프로젝트</Title>
                        <MoreViewButton onClick={()=>router.push('/project')}>더보기</MoreViewButton>
                        {/** 인기 프로젝트 게시글 */}
                        <PapulateObjectList id="topObject" ref={objectListRef}>
                            {Array.isArray(populateProjectObjectData)&&populateProjectObjectData.map((i:any,idx:number)=>(
                                populateProjectObjectForm ? React.createElement(populateProjectObjectForm, {
                                    key:idx, data:i, setIsLoginAlertOn:setIsLoginAlertOn
                                }) : null
                            ))}
                        </PapulateObjectList>
                        {/* 인기 프로젝트 슬라이드 버튼 */}
                        <PageDots>
                            {dotArr.map((i:any, idx:number)=>(
                                <Dot key={idx}/>
                            ))}
                        </PageDots>
                    </Contents>
                </TopContents>
                {/* II. 각 목록 별 게시글 */}
                <BottomContents>
                    <Title>
                        <span onClick={()=>handlepageName('project','ProjectData')}>프로젝트 |</span>
                        <span onClick={()=>handlepageName('findProject','FindProjectData')}>프로젝트 모집 |</span>
                        <span onClick={()=>handlepageName('findStudy','FindStudyData')}>스터디 모집</span>
                    </Title>
                    <MoreViewButton onClick={()=>router.push(`/${pageName}`)}>더보기</MoreViewButton>
                    {/* 목록 별 게시글 객체 불러오기 */}
                    <ObjectList id="listObject" ref={objectListRef} pageName={pageName}>
                        {/* {objectData?.map((i:any,idx:number)=>(
                            objectForm ? React.createElement(objectForm, {key:idx, data:i}) : null
                        ))} */}
                        {Array.isArray(objectData)&&objectData?.map((i:any,idx:number)=>(
                            objectForm ? React.createElement(objectForm, {
                                key:idx, data:i, setIsLoginAlertOn:setIsLoginAlertOn
                            }) : null
                        ))}
                    </ObjectList>
                </BottomContents>
            </Layout>
            {isLoginAlertOn?
                <Alert 
                    setIsAlertOn={setIsLoginAlertOn}
                    notice={<>{'로그인이 필요한 서비스입니다.'}<br/>{'로그인 하시겠습니까?'}</>}
                    yesButtonFC={()=>router.push('/auth/login')}
                    noButtonFC={()=>setIsLoginAlertOn(false)}
                />
            :null}
        </BackLayout>
    )
}
export default MainPage;

const BackLayout = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    
    /* padding: 0 55px 70px; */
    overflow: hidden;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1000px;

  ${media.tablet || media.mobile} {
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

  & #topObject {
    flex-wrap: nowrap;
  }
`;
const Title = styled.div`
  & > span {
    padding: 0 5px;
    box-sizing: border-box;

    cursor: pointer;
    &:hover {
      font-weight: 700;
    }
  }
`;
const MoreViewButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 32px;
  box-sizing: border-box;
  text-decoration: none;
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
  &:hover {
    background-color: #ff3d00;
  }
`;

const BottomContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  width: 100%;
  min-height: 800px;
  padding: 45px 0;
`;

const PapulateObjectList = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;

    ${media.tablet || media.mobile}{
        justify-content: center;
    }
`;

const ObjectList = styled.div<{pageName:string}>`
    display: flex;
    flex-direction: ${({pageName})=>(pageName==='project'?'unset':'column')};
    flex-wrap: wrap;
    align-items: center;
    width: 100%;

    ${media.tablet || media.mobile}{
        justify-content: center;
    }
`;