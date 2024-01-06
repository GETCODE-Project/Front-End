import FixedLayout from "@/components/common/layout/FixedLayout";
import MainContantsLayout from "@/components/common/layout/MainContantsLayout";

const FindProject = ()=> {
  return (
    <FixedLayout fontWeight={2}>
      <MainContantsLayout
            pageName="findProject"
            title="프로젝트 모집"
      />
    </FixedLayout>
  );
};

export default FindProject;