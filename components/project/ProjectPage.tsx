import MainContantsLayout from "@/components/common/layout/MainContantsLayout";
import { MultipleSelectToggle, SingleSelectToggle } from "@/components/common/search/DetailSearchForm";
import { useEffect, useState } from "react";

const ProjectPage = () => {

    /** 상세 검색 항목 리스트 */
    const stackDataArray:string[] = ['전체','Spring','Django','Express.js','Flask','Rails','vue.js','Springboot','Next.js','Nest.js','MySQL','Oracle','PostgreSQL','MariaDB','Redis','MongoDB','JavaScript','TypeScript','React','ReactNative','Html','Css','Flutter','Dart','Git','Github','AWS'];
    const topicDataArray:string[] = ['전체','여행','이커머스','소셜네트워크','공유서비스','의료','금융','교육','모임','스포츠','게임','부동산','뷰티','패션'];
    const yearDataArray:string[] = ['전체','2020','2021','2022','2023','2024'];
  
    /** 현재 선택된 상세 검색 항목 */
    const [currentSelectedStack, setCurrentSelectedStack]=useState<string>('전체');
    const [currentSelectedTopic, setCurrentSelectedTopic]=useState<string>('전체');
    const [currentSelectedYear, setCurrentSelectedYear]=useState<string>('전체');
    const [currentSeletedData, setCurrentSeletedData]=useState<any>();

    useEffect(() =>{
      setCurrentSeletedData({currentSelectedStack,currentSelectedTopic,currentSelectedYear});
      console.log(currentSeletedData);
    },[currentSelectedStack,currentSelectedTopic,currentSelectedYear]);

    return(
      <MainContantsLayout
            pageName="project"
            title="프로젝트"
            searchSelecedData={currentSeletedData}
      >
        <MultipleSelectToggle title="기술 스택" data={stackDataArray}
            currentSelected={currentSelectedStack}
            setCurrentSelected={setCurrentSelectedStack}
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