import { GET } from "@/pages/api/axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useSubjectsList} from "@/components/common/data/ToggleListData";
import { MultiToggle, SingleToggle } from "@/components/common/layout/Detail,Post/ToggleLayout";

interface SidoGugun{
    key: number;
    siDo: string;
    guGun: string[];
}

const DetailIntroList = () => {

    const router = useRouter();
    const projectPage = router.pathname.includes('/project/');
    const findProjectPage = router.pathname.includes('/findProject/');
    const findStudyPage = router.pathname.includes('/findStudy/');
    const detailPage = router.pathname.includes('/detail');

    const {data: subjects, isLoading: isSubjectsLoading, isError: isSubjectsError} = useSubjectsList();

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
    
    // if(!isSubjectsLoading || !isSubjectsError){
    //     console.log(subjects);
    // }

    return (
        <IntroWrapper>

            {projectPage?
                <>
                    <IntroMenu>한 줄 소개</IntroMenu>
                    {detailPage?
                        <div>2</div>:<Input type="text"/>
                    }
                    
                    <IntroMenu>소스 링크</IntroMenu>
                    {detailPage?<div>8</div>:<Input type="text"/>}
                    
                </>
                :null
            }
            
            {projectPage||findProjectPage?
                <>
                    <IntroMenu>주제</IntroMenu>
                    {detailPage?<div>4</div>:
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
                    {detailPage?<div>1</div>:
                        <MultiToggle data={subjects}
                        currentSelected={currentSelectedField}
                        setCurrentSelected={setCurrentSelectedField}
                        selectedAll={selectedStackAllField}
                        setSelectedAll={setSelectedStackAllField}
                    />  
                    }
                    
                </>
                :null
            }
            
            {findStudyPage?
                <>
                    <IntroMenu>스터디 분야</IntroMenu>
                    {detailPage?<div>1</div>:<MultiToggle data={subjects}
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
                    {detailPage?<div>1</div>:<SingleToggle data={onlineStatusDataArray}
                        currentSelected={currentSelectedOnline}
                        setCurrentSelected={setCurrentSelectedOnline}
                    />}
                    

                    <IntroMenu>지역</IntroMenu>
                    {detailPage?<div>8</div>:<></>}
                    

                    <IntroMenu>신청 방법</IntroMenu>
                    {detailPage?<div>8</div>:<></>}
  
                </>
                :null
            }

        </IntroWrapper>
    )
}

export default DetailIntroList;

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

const Toggle = styled.div`
    
`;
const ToggleList = styled.div`
    
`;