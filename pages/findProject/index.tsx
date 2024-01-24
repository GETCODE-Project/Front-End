import FixedLayout from "@/components/common/layout/fixedLayout/FixedLayout";
import FindProjectPage from "@/components/findProject/FindProjectPage";

const FindProject = ()=> {
  return (
    <div>
      <FixedLayout fontWeight={2}>
        <FindProjectPage/>
      </FixedLayout>
    </div>
  );
};

export default FindProject;