import Header from "@/components/common/layout/Header";
import MenuBar from "@/components/common/layout/MenuBar";
import Footer from "@/components/common/layout/Footer";
import MainContantsLayout from "@/components/common/layout/MainContantsLayout";

const FindProject = ()=> {
  return (
    <div>
      <Header />
      <MenuBar bold={2}/>
      <MenuBar />
      <MainContantsLayout
            pageName="findProject"
            title="프로젝트 모집"
      />
      <Footer />
    </div>
  );
};

export default FindProject;