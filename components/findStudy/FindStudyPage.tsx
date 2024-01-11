import MainContantsLayout from "@/components/common/layout/MainContantsLayout";
import { MultipleSelectToggle, SingleSelectToggle } from "@/components/common/search/DetailSearchForm";

const FindStudyPage = () => {

    const fieldDataArray:string[] = ['분야1','분야2','분야3','분야4','분야5']
    const onlineStatusDataArray:string[] = ['온라인','오프라인','전체','온/오프라인'] 
    const areaDataArray:string[] = ['서울-홍대/합정','서울-마포/연남','부산','제주','인천']
    const recruitmentStatusDataArray:string[] = ['모집 중','모집 완료','전체'] 

    return(
        <MainContantsLayout
            pageName="findStudy"
            title="스터디 모집"
        >
            <MultipleSelectToggle title="분야" data={fieldDataArray}/>
            <SingleSelectToggle title="온/오프라인" data={onlineStatusDataArray}/>
            <SingleSelectToggle title="지역" data={areaDataArray}/>
            <SingleSelectToggle title="모집 여부" data={recruitmentStatusDataArray}/>
        </MainContantsLayout>
    )
}
export default FindStudyPage;