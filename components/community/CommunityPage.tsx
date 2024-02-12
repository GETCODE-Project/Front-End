import styled from "styled-components";
import NavBarForm from "@/components/community/NavBarForm";
import ContentsForm from "@/components/community/ContentsForm";
import { useState } from "react";

const CommunityPage = () => {

    const [selectedPage, setSelectedPage] = useState<string>('FreeBoard');

    return (
        <Layout>
            <NavBarForm setSelectedPage={setSelectedPage}/>
            <ContentsForm pageName={selectedPage}/>
        </Layout>
    )
}
export default CommunityPage;

const Layout = styled.div`
    display: flex;
    width: 100%;
    min-height: 100vh;
`;