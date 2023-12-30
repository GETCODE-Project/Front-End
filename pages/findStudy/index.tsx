import Header from "@/components/common/layout/Header";
import MenuBar from "@/components/common/layout/MenuBar";
import Footer from "@/components/common/layout/Footer";
import FindProjectPage from "@/components/findStudy/FindStudyPage";


export default function FindProject() {
  return (
    <div>
      <Header />
      <MenuBar />
      <FindProjectPage/>
      <Footer />
    </div>
  );
}