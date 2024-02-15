import FixedLayout from "@/components/common/layout/fixedLayout/FixedLayout";
import DetailLayout from "@/components/common/layout/_DetailLayout";
import { useRouter } from "next/router";

const ProjectDetail = ({id}:any) => {
  
  const router = useRouter();

  return (
    <FixedLayout>
      <DetailLayout pageName="project" pageApi="project/detail" id={id}/>
    </FixedLayout>
  );
};

export default ProjectDetail;
