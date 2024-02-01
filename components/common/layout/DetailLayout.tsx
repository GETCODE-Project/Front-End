import styled from "styled-components";
import { media } from "@/styles/mediaQuery";
import React, { useState, useEffect } from "react";
import DetailTextArea from "@/components/common/layout/DetailTextArea";
import DetailCommentForm from "@/components/common/selectObject/DetailCommentform";
import SelectRoundBox from "@/components/common/selectObject/SelectRoundBox";
import DetailMarks from "@/components/common/selectObject/DetailMarks";
import { GET } from "@/pages/api/axios";
interface DetailLayoutProps {
  pageName: string;
  pageApi?: string;
}
interface commnetProps {
  content: string;
  modifiedDate: string;
  email: string;
  nickname: string;
}
interface dataProps {
  title: string;
  content: string;
  region: string;
  recruitment: boolean;
  online: boolean;
  views: number;
  count: number;
  contact: string;
  date: string;
  member: {
    email: string;
    nickname: string;
  };
  comments: commnetProps[];
  subjects: string[];
}

const DetailLayout = ({ pageName }: DetailLayoutProps) => {
  const [ObjectForm, setObjectForm] = useState(null);
  const [getData, setData] = useState<dataProps>();

  const studyId = 11;
  useEffect(() => {
    import(`@/components/${pageName}/detail/ObjectForm`)
      .then((module) => setObjectForm(() => module.default))
      .catch((error) => console.error(error));
    const apiUrl = `/api/studies`;
    // const apiUrl = `/api/${pageApi}/${studyId}`;

    const getFindStudyBulletinData = async () => {
      await GET(apiUrl)
        .then((res) => {
          setData(res);
          console.log(res);
        })
        .catch((err) => console.log(err));
    };
    getFindStudyBulletinData();
  }, [pageName]);
  console.log(getData?.content);
  return (
    getData && (
      <Layout>
        <Title>
          <div style={{ display: "flex", width: "100%" }}>
            <p style={{ marginRight: "20px" }}>{getData.title}</p>
            {getData.recruitment && (
              <SelectRoundBox
                text="모집 중"
                backgroundcolor="#00FF1A"
                color="black"
                border="none"
                fontWeight={500}
              />
            )}
          </div>
          <DetailMarks />
        </Title>
        <UserName>{getData.member.nickname}</UserName>
        <hr style={{ width: "100%" }} />
        <Content>
          {ObjectForm && React.createElement(ObjectForm, getData)}
        </Content>
        <DetailTextArea content={getData.content} />
        {/* <DetailCommentForm comments={getData.comments} /> */}
      </Layout>
    )
  );
};
export default DetailLayout;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  margin: auto;
  padding: 20px;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
  ${media.mobile} {
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
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
  @media screen and (max-width: 800px) {
    padding: 20px calc(60px + (100% - 760px) / 3);
  }
`;
