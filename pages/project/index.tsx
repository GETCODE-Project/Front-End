import MainContantsLayout from "@/components/common/layout/MainContantsLayout";
import FixedLayout from "@/components/common/layout/FixedLayout";
import ProjectPage from "@/components/project/ProjectPage";

const ProjectPost: React.FC = () => {
  return (
    <FixedLayout fontWeight={1}>
        <ProjectPage/>
    </FixedLayout> 
  );
};

export default ProjectPost;
