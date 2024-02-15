import styled from "styled-components";
import NavBarForm from "@/components/community/NavBarForm";
import ContentsForm from "@/components/community/ContentsForm";
import { useEffect, useState } from "react";

const CommunityPage = () => {

    const [selectedPage, setSelectedPage] = useState<string>('FreeBoard');
    
    useEffect(() =>{
        // console.log(selectedPage,'선택된카테고리');
    },[selectedPage]);
    
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