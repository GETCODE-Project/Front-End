import FixedLayout from "@/components/common/layout/fixedLayout/FixedLayout";
import DetailLayout from "@/components/common/layout/DetailLayout";

const ProjectDetail = () => {
  return (
    <FixedLayout>
      <DetailLayout 
        routePageName="project"
        pageTitle="프로젝트 제목" 
        writerName="작성자 닉네임" 
        content="내용"/>
    </FixedLayout>     
  );
};

export default ProjectDetail;