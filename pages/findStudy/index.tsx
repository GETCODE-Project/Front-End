import Header from "@/components/common/layout/Header";
import MenuBar from "@/components/common/layout/MenuBar";
import Footer from "@/components/common/layout/Footer";
import MainContantsLayout from "@/components/common/layout/MainContantsLayout";


export default function FindProject() {
  return (
    <div>
      <Header />
      <MenuBar />
      <MainContantsLayout
            pageName="findStudy"
            title="스터디 모집"
      />
      <Footer />
    </div>
  );

}