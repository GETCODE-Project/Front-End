import FixedLayout from "@/components/common/layout/FixedLayout";
import DetailLayout from "@/components/common/layout/DetailLayout";

const CommunityDetail = () => {
  return (
    <FixedLayout>
      <DetailLayout 
        routePageName="Community"
        pageTitle="게시글 제목" 
        writerName="작성자 닉네임" 
        content="내용"/>
    </FixedLayout>     
  );
};

export default CommunityDetail;