import MainContantsLayout from "@/components/common/layout/MainContantsLayout";
import FixedLayout from "@/components/common/layout/FixedLayout";
const ProjectPost: React.FC = () => {
  return (
  <FixedLayout fontWeight={1}>
    <MainContantsLayout
      pageName="project"
      title="프로젝트"
      />
  </FixedLayout>     
  );
};

export default ProjectPost;
