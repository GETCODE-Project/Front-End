import styled from "styled-components";
import { media } from "@/styles/mediaQuery";
import React, { useState, useEffect } from "react";
import DetailTextArea from "@/components/common/layout/DetailTextArea";
import DetailCommentForm from "@/components/common/selectObject/DetailCommentform";
import SelectRoundBox from "@/components/common/selectObject/SelectRoundBox";
import DetailMarks from "@/components/common/selectObject/DetailMarks";
import { GET, PUT } from "@/pages/api/axios";
import { useRouter } from "next/router";

interface DetailLayoutProps {
  pageName: string;
  pageApi: string;
  id: any;
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

const DetailLayout = ({ pageName, pageApi, id }: DetailLayoutProps) => {
  const [ObjectForm, setObjectForm] = useState(null);
  const [getData, setData] = useState<dataProps>();
  const router = useRouter();
  const studyId = 15;

  useEffect(() => {
    import(`@/components/${pageName}/detail/ObjectForm`)
      .then((module) => setObjectForm(() => module.default))
      .catch((error) => console.error(error));
    const getFindStudyBulletinData = async () => {
      await GET(`/api/${pageApi}/${studyId}`)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => console.log(err));
    };
    getFindStudyBulletinData();
  }, [pageName]);

  return (
    // getData && (
      <Layout>
        <PageTitle>프로젝트</PageTitle>
        <Title>
          <div style={{ display: "flex", width: "100%" }}>
            <p style={{ marginRight: "20px" }}>{'getData.title'}</p>
            <RecruitState></RecruitState>
              <SelectRoundBox
                text="모집 중"
                backgroundcolor="#00FF1A"
                color="black"
                border="none"
                fontWeight={500}
              />
          </div>
          <DetailMarks/>
        </Title>
        <UserName>{'adsfafd'}</UserName>
        <hr style={{ width: "100%" }} />
        <Content>
          {ObjectForm && React.createElement(ObjectForm, getData)}
        </Content>
        <DetailTextArea
          // content={getData.content}
          content={'adfasdf'}
          isWriter={true}
          Update={'ㄴㅇㄹ'}
        />
        {/* <DetailCommentForm comments={getData.comments} /> */}
      </Layout>
    )
  // );
};

export default DetailLayout;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  margin: auto;
  padding: 20px;

  ${media.mobile || media.tablet} {
    width: 100%;
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
  padding: 20px 24px;

  border-bottom: 1.5px solid #BDBDBD;

  @media screen and (max-width: 800px) {
    padding: 20px calc(60px + (100% - 760px) / 3);
  }
`;

const PageTitle = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;
  width: 100%;

  font-size: 1.25rem;
  color: #ff4b13;
  
`;

const RecruitState = styled.div`
  
`;