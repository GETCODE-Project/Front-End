import FixedLayout from "@/components/common/layout/FixedLayout";
import DetailLayout from "@/components/common/layout/DetailLayout";

const FindStudyDetail = () => {
  return (
    <FixedLayout>
      <DetailLayout 
        pageName="findStudy"
        pageTitle="스터디 제목" 
        writerName="작성자 닉네임" 
        content="내용"/>
    </FixedLayout>     
  );
};

export default FindStudyDetail;