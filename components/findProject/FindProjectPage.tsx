import MainContantsLayout from "@/components/common/layout/MainContantsLayout";
import { MultipleSelectToggle, SingleSelectToggle } from "@/components/common/search/DetailSearchForm";

const FindProjectPage = () => {

    const stackDataArray:string[] = ['기술스택1','기술스택2','기술스택3','기술스택4','기술스택5']
    const topicDataArray:string[] = ['주제1','주제2','주제3','주제4','주제5'] 
    const partDataArray:string[] = ['모집파트1','모집파트2','모집파트3','모집파트4','모집파트5'] 
    const recruitmentStatusDataArray:string[] = ['모집 중','모집 완료','전체'] 

    return(
        <MainContantsLayout
            pageName="findProject"
            title="프로젝트 모집"
        >
            <MultipleSelectToggle title="기술 스택" data={stackDataArray}/>
            <SingleSelectToggle title="주제" data={topicDataArray}/>
            <SingleSelectToggle title="모집 파트" data={partDataArray}/>
            <SingleSelectToggle title="모집 여부" data={recruitmentStatusDataArray}/>

        </MainContantsLayout>
    )
}
export default FindProjectPage;