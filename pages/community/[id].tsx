import Footer from "@/components/common/layout/Footer";
import Header from "@/components/common/layout/Header";
import MenuBar from "@/components/common/layout/MenuBar";
import CommunityPage from "@/components/community/CommunityPage";
import { useRouter } from "next/router";

const CommunityMain = () => {
    const router = useRouter();
    const { id } = router.query;
    return(
        <>
            <Header />
            <MenuBar/>
            <CommunityPage id={id}/> 
            <Footer />
        </>
    )
}
export default CommunityMain;