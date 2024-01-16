import MainContantsLayout from "@/components/common/layout/MainContantsLayout";
import { MultipleSelectToggle, SingleSelectToggle } from "@/components/common/search/DetailSearchForm";
import { useEffect, useState } from "react";

const ProjectPage = () => {

    const stackDataArray:string[] = ['전체','React','Node.js','TypeScript','SpringBoot','Java']
    const topicDataArray:string[] = ['전체','여행','이커머스','소셜네트워크','금융','교육','모임','스포츠','게임','부동산','패션'] 
    const yearDataArray:string[] = ['전체','2020','2021','2022','2023','2024']

    const [currentSeletedData, setCurrentSeletedData]=useState<string[]>([]);
    
    const [currentSelectedStack, setCurrentSelectedStack]=useState<string>('전체');
    const [currentSelectedTopic, setCurrentSelectedTopic]=useState<string>('전체');
    const [currentSelectedYear, setCurrentSelectedYear]=useState<string>('전체');

    useEffect(() =>{
      setCurrentSeletedData(['currentSeletedStack', 'currentSeletedTopic', 'currentSelectedYear']);
    },[currentSelectedStack,currentSelectedTopic,currentSelectedYear]);

    return(
      <MainContantsLayout
            pageName="project"
            title="프로젝트"
            currentSeletedData={currentSeletedData}
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