import MainContantsLayout from "@/components/common/layout/MainContantsLayout";
import { MultipleSelectToggle, SingleSelectToggle } from "@/components/common/search/DetailSearchForm";
import { useEffect, useState } from "react";

/** ------------------------------------------------------------- */
/** 프로젝트 모집 목록 페이지 컴포넌트 */ //검색단(메인컴포넌트의children)
/** ------------------------------------------------------------- */
// 기술스택(다중선택), 주제(단일선택), 모집파트(단일선택), 모집여부(단일선택)
/**[TODO]
 * [1] 
 */

const FindProjectPage = () => {

    /** 상세 검색 항목 리스트 (기술스택,주제,모집파트,모집여부) */
    const stackDataArray:string[] = ['전체','Spring','Django','Express.js','Flask','Rails','vue.js','Springboot','Next.js','Nest.js','MySQL','Oracle','PostgreSQL','MariaDB','Redis','MongoDB','JavaScript','TypeScript','React','ReactNative','Html','Css','Flutter','Dart','Git','Github','AWS'];
    const topicDataArray:string[] = ['전체','여행','이커머스','소셜네트워크','공유서비스','의료','금융','교육','모임','스포츠','게임','부동산','뷰티','패션'];
    const partDataArray:string[] = ['모집파트1','모집파트2','모집파트3','모집파트4','모집파트5'] 
    const recruitmentStatusDataArray:string[] = ['모집 중','모집 완료','전체'];

    /** 현재 선택된 상세 검색 항목(마지막으로 선택된 항목) */
    const [currentSelectedStack, setCurrentSelectedStack]=useState<string>('전체');
    const [currentSelectedTopic, setCurrentSelectedTopic]=useState<string>('전체');
    const [currentSelectedPart, setCurrentSelectedPart]=useState<string>('전체');
    const [currentSelectedRecruitment, setCurrentSelectedRecruitment]=useState<string>('전체');

    /** 현재 선택된 상세 검색 항목(총 선택된 항목) - 다중선택토글폼에만 해당 */
    const [selectedStackAllStack,setSelectedStackAllStack]=useState<string[]>([]);
    const [selectedStackAllPart,setSelectedStackAllPart]=useState<string[]>([]);

    /** 검색하기에 반영될 선택된 토글 항목들 */
    const [detailSearchSelectedData, setDetailSearchSelectedData]=useState<any>();
    
    useEffect(() =>{
        let tumpArray:any[] = [{
            stack:selectedStackAllStack,
            topic:currentSelectedTopic,
            part:selectedStackAllPart,
            recruitment:currentSelectedRecruitment
        }];
        setDetailSearchSelectedData(tumpArray);
    },[currentSelectedStack,currentSelectedTopic,currentSelectedPart,currentSelectedRecruitment]);

    
    return(
        <MainContantsLayout
            pageName="findProject"
            title="프로젝트 모집"
            detailSearchSelectedData={detailSearchSelectedData}
        >
            <MultipleSelectToggle title="기술 스택" data={stackDataArray}
                currentSelected={currentSelectedStack}
                setCurrentSelected={setCurrentSelectedStack}
                selectedAll={selectedStackAllStack}
                setSelectedAll={setSelectedStackAllStack}
            />
            <SingleSelectToggle title="주제" data={topicDataArray}
                currentSelected={currentSelectedTopic}
                setCurrentSelected={setCurrentSelectedTopic}
            />
            <MultipleSelectToggle title="모집 파트" data={partDataArray}
                currentSelected={currentSelectedPart}
                setCurrentSelected={setCurrentSelectedPart}
                selectedAll={selectedStackAllPart}
                setSelectedAll={setSelectedStackAllPart}
            />
            <SingleSelectToggle title="모집 여부" data={recruitmentStatusDataArray}
                currentSelected={currentSelectedRecruitment}
                setCurrentSelected={setCurrentSelectedRecruitment}
            />

        </MainContantsLayout>
    )
}
export default FindProjectPage;