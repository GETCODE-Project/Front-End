import Header from "@/components/common/layout/Header";
import MenuBar from "@/components/common/layout/MenuBar";
import Footer from "@/components/common/layout/Footer";
import FindProjectPostPage from "@/components/post/findProject/FindProjectPostPage";
const ProjectPost: React.FC = () => {
  return (
    <div>
      <Header />
      <MenuBar/>   
      <FindProjectPostPage />
      <Footer />
    </div>
  );
};

export default ProjectPost;
