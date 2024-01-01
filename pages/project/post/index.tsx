import Header from "@/components/common/layout/Header";
import MenuBar from "@/components/common/layout/MenuBar";
import Footer from "@/components/common/layout/Footer";
import ProjectPostPage from "@/components/post/project/ProjectPostPage";

const ProjectPost: React.FC = () => {
  return (
    <div>
      <Header />
      <MenuBar/>    
      <ProjectPostPage />
      <Footer />
    </div>
  );
};

export default ProjectPost;
