import FixedLayout from "@/components/common/layout/fixedLayout/FixedLayout";
import Layout from "@/components/common/layout/Detail,Post/Layout";

const CommunityDetail = ({id}:any) => {
  return (
    <FixedLayout>
      <Layout id={id}/>
    </FixedLayout>
  );
};

export default CommunityDetail;
