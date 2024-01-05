import Header from "@/components/common/layout/Header";
import MenuBar from "@/components/common/layout/MenuBar";
import Footer from "@/components/common/layout/Footer";
import FindProjectDetailPage from "@/components/detail/findProject/FindProjectDetailPage";
const ProjectPost: React.FC = () => {
  return (
    <div>
      <Header />
      <MenuBar/>   
      <FindProjectDetailPage />
      <Footer />
    </div>
  );
};

export default ProjectPost;
