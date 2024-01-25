import MainContantsLayout from "@/components/common/layout/MainContantsLayout";
import { MultipleSelectToggle, SingleSelectToggle } from "@/components/common/search/DetailSearchForm";
import { useEffect, useState } from "react";

interface FindStudyBulletinData{
    title: string;
    content: string;
    region: string;
    recruitment: boolean;
    online: boolean;
    views: number;
}

const FindStudyPage = () => {

    /** 상세 검색 항목 리스트 (분야,온/오프라인,지역,모집여부) */
    const subjectDataArray:string[] = ['분야1','분야2','분야3','분야4','분야5'];
    const onlineStatusDataArray:string[] = ['온라인','오프라인','전체','온/오프라인'];
    const regionDataArray:string[] = ['서울-홍대/합정','서울-마포/연남','부산','제주','인천'];
    const recruitmentStatusDataArray:string[] = ['모집 중','모집 완료','전체'];
    /** 현재 선택된 상세 검색 항목(마지막으로 선택된 항목) */
    const [currentSelectedSubject, setCurrentSelectedSubject]=useState<string>('전체');
    const [currentSelectedOnline, setCurrentSelectedOnline]=useState<string>('전체');
    const [currentSelectedRegion, setCurrentSelectedRegion]=useState<string>('전체');
    const [currentSelectedRecruitment, setCurrentSelectedRecruitment]=useState<string>('전체');
    /** 현재 선택된 상세 검색 항목(총 선택된 항목) - 다중선택토글폼에만 해당 */
    const [selectedStackAllSubject,setSelectedStackAllSubject]=useState<string[]>([]);
    /** 검색하기에 반영될 선택된 토글 항목들 */
    const [detailSearchSelectedData, setDetailSearchSelectedData]=useState<any>();
    
    useEffect(() =>{
      console.log(selectedStackAllSubject,'분야');
      console.log(currentSelectedOnline,'온/오프라인');
      console.log(currentSelectedRegion,'지역');
      console.log(currentSelectedRecruitment,'모집 여부');
    },[currentSelectedSubject,currentSelectedOnline,currentSelectedRegion,currentSelectedRecruitment]);


    return(
        <MainContantsLayout
            pageName="findStudy"
            title="스터디 모집"
            detailSearchSelectedData={detailSearchSelectedData}
        >
            <MultipleSelectToggle title="분야" data={subjectDataArray}
                currentSelected={currentSelectedSubject}
                setCurrentSelected={setCurrentSelectedSubject}
                selectedAll={selectedStackAllSubject}
                setSelectedAll={setSelectedStackAllSubject}
            />
            <SingleSelectToggle title="온/오프라인" data={onlineStatusDataArray}
                currentSelected={currentSelectedOnline}
                setCurrentSelected={setCurrentSelectedOnline}
            />
            <SingleSelectToggle title="지역" data={regionDataArray}
                currentSelected={currentSelectedRegion}
                setCurrentSelected={setCurrentSelectedRegion}
            />
            <SingleSelectToggle title="모집 여부" data={recruitmentStatusDataArray}
                currentSelected={currentSelectedRecruitment}
                setCurrentSelected={setCurrentSelectedRecruitment}
            />
        </MainContantsLayout>
    )
}
export default FindStudyPage;