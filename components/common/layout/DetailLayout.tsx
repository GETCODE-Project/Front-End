import styled from "styled-components";
import { media } from "@/styles/mediaQuery";
import React, { useState,useEffect } from "react";
import DetailTextArea from "@/components/common/layout/DetailTextArea";
import Comment from "@/components/common/selectObject/DetailCommentform"
import SelectRoundBox from "@/components/common/selectObject/SelectRoundBox";
import DetailMarks from "@/components/common/selectObject/DetailMarks"

interface DetailLayoutProps{
    pageName: string;
    pageTitle: string;
    writerName: string;
    content: string;
}

const DetailLayout = ({pageName, pageTitle, writerName, content}:DetailLayoutProps) => {
    const [ObjectForm, setObjectForm] = useState(null);

    useEffect(() => {
        import(`@/components/${pageName}/detail/ObjectForm`)
        .then(module => setObjectForm(()=>module.default))
        .catch(error => console.error(error))
    },[pageName]);  

    return (
    <Layout>
      <Title>
        <div style={{display:"flex", width:"100%"}}>
          <p style={{marginRight:"20px"}}>{pageTitle}</p>
          <SelectRoundBox text="모집 중" backgroundcolor="#00FF1A" color="black" border="none" fontWeight={500}/>
        </div>
      <DetailMarks /></Title>
      <UserName>{writerName}</UserName>
      <hr style={{width:"100%"}} />
      <Content>
      {ObjectForm&&React.createElement(ObjectForm)}
      </Content>
      <DetailTextArea content={content} />
      <Comment />
    </Layout>
  );
};
export default DetailLayout;



const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  margin: auto;
  padding:20px;
  @media screen and (max-width: 800px){
    width: 100%;
  }
  ${media.mobile}{

  };
`;

const Title = styled.div`
  display: flex;
  justify-content:space-between;
  font-size: 1.8rem;
  padding: 80px 0 20px 0;
  text-align: left;
`;
const UserName = styled.p`
  font-size: 1.1rem;
  padding: 20px 0 20px 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 20px;
  padding: 20px 60px;
  @media screen and (max-width: 800px){
    padding: 20px calc(60px + (100% - 760px)/3);
  }
`;

