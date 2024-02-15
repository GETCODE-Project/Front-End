import FixedLayout from "@/components/common/layout/fixedLayout/FixedLayout";
import { useRouter } from "next/router";
import Layout from "@/components/common/layout/Detail,Post/Layout";

const FindProjectDetail = ({id}:any) => {
  const router = useRouter();

  return (
    <FixedLayout>
      <Layout id={id}/>
    </FixedLayout>
  );
};

export default FindProjectDetail;
