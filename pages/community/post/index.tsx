import FixedLayout from "@/components/common/layout/fixedLayout/FixedLayout";
import PostLayout from "@/components/common/layout/PostLayout";
const CommunityPost: React.FC = () => {
  return (
    <FixedLayout>
      <PostLayout routePageName="community" />
    </FixedLayout>
  );
};

export default CommunityPost;
