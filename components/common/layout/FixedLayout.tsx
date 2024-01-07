import Header from "@/components/common/layout/Header";
import MenuBar from "@/components/common/layout/MenuBar";
import Footer from "@/components/common/layout/Footer";
import React from "react";

interface LayoutProps{
    children: React.ReactNode;
    fontWeight?: number;
}

const FixedLayout:React.FC<LayoutProps> = ({children, fontWeight})=>{
    return(
    <div>
        <div style={{ display:"block", height:"100px"}}>
        <Header/>
        <MenuBar fontWeight={fontWeight}/>     
        </div>
        {children}
        <Footer />
    </div>
    );
}
export default FixedLayout;