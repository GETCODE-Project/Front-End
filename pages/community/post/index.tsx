import Header from "@/components/common/layout/Header";
import MenuBar from "@/components/common/layout/MenuBar";
import Footer from "@/components/common/layout/Footer";
import CommunityPostPage from "@/components/post/community/CommunityPostPage";
const ProjectPost: React.FC = () => {
  return (
    <div>
      <Header />
      <MenuBar/>   
      <CommunityPostPage />
      <Footer />
    </div>
  );
};

export default ProjectPost;
