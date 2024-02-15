import FixedLayout from "@/components/common/layout/fixedLayout/FixedLayout";
import DetailLayout from "@/components/common/layout/_DetailLayout";

const FindProjectDetail = () => {
  return (
    <FixedLayout>
      <DetailLayout pageName="findProject" pageApi="projectrecruitment/detail"/>
    </FixedLayout>
  );
};

export default FindProjectDetail;
