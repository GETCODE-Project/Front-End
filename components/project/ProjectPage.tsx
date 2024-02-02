import MainContantsLayout from "@/components/common/layout/MainContantsLayout";
import { MultipleSelectToggle, SingleSelectToggle } from "@/components/common/search/DetailSearchForm";
import { useEffect, useState } from "react";

/** ------------------------------------------------------------- */
/** 프로젝트 목록 페이지 컴포넌트 */ //검색단(메인컴포넌트의children)
/** ------------------------------------------------------------- */
// 기술스택(다중선택), 주제(단일선택), 년도(단일선택)
/**[TODO]
 * [1] 
 */

const ProjectPage = () => {

    /** 상세 검색 항목 리스트 */
    const stackDataArray:string[] = ['전체','Spring','Django','Express.js','Flask','Rails','vue.js','Springboot','Next.js','Nest.js','MySQL','Oracle','PostgreSQL','MariaDB','Redis','MongoDB','JavaScript','TypeScript','React','ReactNative','Html','Css','Flutter','Dart','Git','Github','AWS'];
    const topicDataArray:string[] = ['전체','여행','이커머스','소셜네트워크','공유서비스','의료','금융','교육','모임','스포츠','게임','부동산','뷰티','패션'];
    const yearDataArray:string[] = ['전체','2020','2021','2022','2023','2024'];
  
    /** 현재 선택된 상세 검색 항목(마지막으로 선택된 항목) */
    const [currentSelectedStack, setCurrentSelectedStack]=useState<string>('전체');
    const [currentSelectedTopic, setCurrentSelectedTopic]=useState<string>('전체');
    const [currentSelectedYear, setCurrentSelectedYear]=useState<string>('전체');
    /** 현재 선택된 상세 검색 항목(총 선택된 항목) - 다중선택토글폼에만 해당 */
    const [selectedStackAll,setSelectedStackAll]=useState<string[]>([]);

    /** 검색하기에 반영될 선택된 토글 항목들 */
    const [detailSearchSelectedData, setDetailSearchSelectedData]=useState<any>();

    useEffect(() =>{
      // console.log(selectedStackAll,'기술스택');
      // console.log(currentSelectedTopic,'주제');
      // console.log(currentSelectedYear,'년도');
    },[currentSelectedStack,currentSelectedTopic,currentSelectedYear]);

    return(
      <MainContantsLayout
            pageName="project"
            title="프로젝트"
            detailSearchSelectedData={detailSearchSelectedData}
      >
        <MultipleSelectToggle title="기술 스택" data={stackDataArray}
            currentSelected={currentSelectedStack}
            setCurrentSelected={setCurrentSelectedStack}
            selectedAll={selectedStackAll}
            setSelectedAll={setSelectedStackAll}
        />
        <SingleSelectToggle title="주제" data={topicDataArray}
            currentSelected={currentSelectedTopic}
            setCurrentSelected={setCurrentSelectedTopic}
        />
        <SingleSelectToggle title="연도" data={yearDataArray}
            currentSelected={currentSelectedYear}
            setCurrentSelected={setCurrentSelectedYear}
        />
      </MainContantsLayout>
    )
}
export default ProjectPage;