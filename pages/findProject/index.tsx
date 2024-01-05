import Header from "@/components/common/layout/Header";
import MenuBar from "@/components/common/layout/MenuBar";
import Footer from "@/components/common/layout/Footer";
import MainContantsLayout from "@/components/common/layout/MainContantsLayout";

const FindProjectPage = ()=> {
  return (
    <div>
      <Header />
      <MenuBar />
      <MainContantsLayout
            pageName="findProject"
            title="GETCODE 프로젝트"
      />
      <Footer />
    </div>
  );
};

export default FindProjectPage;