import FixedLayout from "@/components/common/layout/FixedLayout";
import FindProjectPage from "@/components/findProject/FindProjectPage";

const FindProject = ()=> {
  return (
    <div>
      <FixedLayout fontWeight={1}>
        <FindProjectPage/>
      </FixedLayout>
    </div>
  );
};

export default FindProject;