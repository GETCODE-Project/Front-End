import Header from "@/components/common/layout/Header";
import MenuBar from "@/components/common/layout/MenuBar";
import Footer from "@/components/common/layout/Footer";
import FindStudyPage from "@/components/findStudy/FindStudyPage";


export default function FindStudy() {
  return (
    <div>
      <Header />
      <MenuBar bold={3}/>
        <FindStudyPage/>
      <Footer />
    </div>
  );

}