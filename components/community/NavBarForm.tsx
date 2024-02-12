import { media } from "@/styles/mediaQuery";
import { useState } from "react";
import styled from "styled-components";


const NavBarForm = ({setSelectedPage}:any) => {

    const [activeMenu, setActiveMenu] = useState<string>('FreeBoard');

    const handlePageSelect = (pageName:string) => {
        setSelectedPage(pageName);
        setActiveMenu(pageName);
    };

    return(
        <Layout>
            <Wrapper>
                <CommunityMenu 
                    onClick={()=>handlePageSelect('FreeBoard')}
                    active={activeMenu==='FreeBoard'}
                >자유게시판</CommunityMenu>
                <CommunityMenu 
                    onClick={()=>handlePageSelect('QnA')}
                    active={activeMenu==='QnA'}
                >QnA</CommunityMenu>
                <CommunityMenu 
                    onClick={()=>handlePageSelect('Consult')}
                    active={activeMenu==='Consult'}
                >고민상담</CommunityMenu>
            </Wrapper>
        </Layout>
    )
}
export default NavBarForm;

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 260px;
    min-height: 100vh;
    padding: 35px 0;

    background-color: #ff993a;

    ${media.mobile || media.tablet}{
        display: none;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const CommunityMenu = styled.div<{active:boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;

    background-color: ${({active})=>(active? '#f98111':'unset')};

    color: #fff;
    font-size: 1rem;

    cursor: pointer;

    &:hover{
        background-color: #f98111;
    }
`;