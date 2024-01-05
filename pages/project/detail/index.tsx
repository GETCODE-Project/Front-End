//이름이 [프로젝트 이름]으로 추후 수정
import Header from "@/components/common/layout/Header";
import MenuBar from "@/components/common/layout/MenuBar";
import Footer from "@/components/common/layout/Footer";
import ProjectDetailPage from "@/components/detail/project/ProjectDetailPage";

const ProjectDetail = () => {
  return (
    <div>
      <Header />
      <MenuBar/>    
      <ProjectDetailPage />
      <Footer />
    </div>
  );
};

export default ProjectDetail;