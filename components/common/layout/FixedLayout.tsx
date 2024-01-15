import Header from "@/components/common/layout/Header";
import MenuBar from "@/components/common/layout/MenuBar";
import Footer from "@/components/common/layout/Footer";
import React from "react";
import styled from "styled-components";

/** ------------------------------------- */
/** 고정 레이아웃(헤더, 메뉴바, 푸터) 통합 컴포넌트 */
/** ------------------------------------- */

interface LayoutProps{
    children: React.ReactNode;
    fontWeight?: number;
    id?: any;
}

const FixedLayout:React.FC<LayoutProps> = ({children, fontWeight, id})=>{
    return(
    <Layout>
        <div style={{ display:"block", height:"100px", zIndex:1004}}>
            <Header/>
            <MenuBar fontWeight={fontWeight} id={id}/>     
        </div>
        {children}
        <Footer />
    </Layout>
    );
}
export default FixedLayout;

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 1003;
`;