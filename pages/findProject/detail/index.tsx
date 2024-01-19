import FixedLayout from "@/components/common/layout/FixedLayout";
import DetailLayout from "@/components/common/layout/DetailLayout";

const FindProjectDetail = () => {
  return (
    <FixedLayout>
      <DetailLayout 
        routePageName="findProject"
        pageTitle="프로젝트 모집 제목" 
        writerName="작성자 닉네임" 
        content="내용"/>
    </FixedLayout>     
  );
};

export default FindProjectDetail;