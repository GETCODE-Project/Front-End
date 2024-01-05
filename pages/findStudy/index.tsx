import Header from "@/components/common/layout/Header";
import MenuBar from "@/components/common/layout/MenuBar";
import Footer from "@/components/common/layout/Footer";
import MainContantsLayout from "@/components/common/layout/MainContantsLayout";


export default function FindStudy() {
  return (
    <div>
      <Header />
      <MenuBar bold={3}/>
      <MainContantsLayout
            pageName="findStudy"
            title="스터디 모집"
      />
      <Footer />
    </div>
  );

}