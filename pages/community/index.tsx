import FixedLayout from "@/components/common/layout/fixedLayout/FixedLayout";
import CommunityPage from "@/components/community/CommunityPage";

const CommunityMain = () => {
  
  return (
    <FixedLayout menuClicked={4}>
      <CommunityPage/>
    </FixedLayout>
  );
};
export default CommunityMain;
