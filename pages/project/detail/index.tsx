import FixedLayout from "@/components/common/layout/FixedLayout";
import DetailLayout from "@/components/common/layout/DetailLayout";

const ProjectDetail = () => {
  return (
    <FixedLayout>
      <DetailLayout pageName="project" pageApi="project" />
    </FixedLayout>
  );
};

export default ProjectDetail;
