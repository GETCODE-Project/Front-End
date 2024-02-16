import FixedLayout from "@/components/common/layout/fixedLayout/FixedLayout";
import Layout from "@/components/common/layout/Detail,Post/Layout";
import { useRouter } from "next/router";

const ProjectDetail = () => {
  
  const router = useRouter();
  const { id } = router.query;

  return (
    <FixedLayout>
      <Layout/>
    </FixedLayout>
  );
};

export default ProjectDetail;
