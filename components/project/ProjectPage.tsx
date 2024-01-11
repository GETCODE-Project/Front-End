import MainContantsLayout from "@/components/common/layout/MainContantsLayout";
import { MultipleSelectToggle, SingleSelectToggle } from "@/components/common/search/DetailSearchForm";

const ProjectPage = () => {

    const stackDataArray:string[] = ['기술스택1','기술스택2','기술스택3','기술스택4','기술스택5']
    const topicDataArray:string[] = ['주제1','주제2','주제3','주제4','주제5'] 
    const yearDataArray:string[] = ['2020','2021','2022','2023','2024'] 

    return(
      <MainContantsLayout
            pageName="project"
            title="프로젝트"
      >
        <MultipleSelectToggle title="기술 스택" data={stackDataArray}/>
        <SingleSelectToggle title="주제" data={topicDataArray}/>
        <SingleSelectToggle title="연도" data={yearDataArray}/>
      </MainContantsLayout>
    )
}
export default ProjectPage;