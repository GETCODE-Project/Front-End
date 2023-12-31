import Header from "@/components/common/layout/Header";
import MenuBar from "@/components/common/layout/MenuBar";
import Footer from "@/components/common/layout/Footer";
import FindStudyPostPage from "@/components/post/findStudy/FindStudyPostPage";
const FindStudyPost: React.FC = () => {
  return (
    <div>
      <Header />
      <MenuBar/>   
      <FindStudyPostPage />
      <Footer />
    </div>
  );
};

export default FindStudyPost;
