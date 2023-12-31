import styled from "styled-components";
import Toggle from "@/components/common/Toggle";
import React, { useState } from "react";
import RoundBox from "@/components/common/RoundBox";

const SelectStatus = () => {
  return (
    <SelectStatusDiv>
      <RoundBox text="모집 여부" />
      <RoundBox text="모집 중" />
      <RoundBox text="모집 완료" />
    </SelectStatusDiv>
  );
};

const SelectSubject = () => {
  const optionSubject = [
    { key: 1, value: "주제1" },
    { key: 2, value: "주제3" }
  ];
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <RoundBox text="주제" />
      <Toggle options={optionSubject} />
    </div>
  );
};

const SelectTech = () => {
  const [option, selectOption] = useState("선택 해제");
  const optionSubject = [
    { key: 1, value: "기술1" },
    { key: 2, value: "기술2" }
  ];
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <RoundBox text="기술 스택" />
      <Toggle onCreate={selectOption} options={optionSubject} />
      <p>{option}</p>
    </div>
  );
};

const ProjectForm: React.FC = () => {
  console.log(RoundBox);
  return (
    <ProjectFormDiv>
      <SelectStatus />
      <SelectSubject />
      <SelectTech />

      <RoundBox text="스터디 지역" />
      <RoundBox text="상세 위치" />
      <RoundBox text="신청 방법" />
    </ProjectFormDiv>
  );
};

export default ProjectForm;

const ProjectFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 2;
  grid-row: 6;
  gap: 31px;
  padding: 0 22px;
`;

const SelectStatusDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const Option = styled.option`
  text-align: center;
`;

const Select = styled.select`
  width: 364px;
  height: 23px;
  border-radius: 30px;
  border: 1px solid #3c3c3c;
  background: #fff;
`;
