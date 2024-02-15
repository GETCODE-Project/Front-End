import FixedLayout from "@/components/common/layout/fixedLayout/FixedLayout";
import Layout from "@/components/common/layout/Detail,Post/Layout";
import { useRouter } from "next/router";

const ProjectDetail = ({id}:any) => {
  
  const router = useRouter();

  return (
    <FixedLayout>
      <Layout id={id}/>
    </FixedLayout>
  );
};

export default ProjectDetail;
