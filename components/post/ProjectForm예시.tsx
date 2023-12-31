import styled from "styled-components";

const RoundBox = ({ text }: RoundBoxProps) => {
  return (
    <RoundBoxDiv>
      <p>{text}</p>
    </RoundBoxDiv>
  );
};

const SelectStatus = () => {
  return (
    <SelectStatusDiv>
      <RoundBox text="모집 여부" />
      <RoundBox text="모집 중" />
      <RoundBox text="모집 완료" />
    </SelectStatusDiv>
  );
};

type RoundBoxProps = {
  text: string;
};

const ProjectForm: React.FC = () => {
  return (
    <ProjectFormDiv>
      <SelectStatus />
      <RoundBox text="주제" />
      <RoundBox text="기술 스택" />
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

  padding: 0 22px;
`;

const RoundBoxDiv = styled.div`
  display: grid;
  width: 108px;
  height: 23px;
  border-radius: 30px;
  border: 1px;

  place-items: center;
  background-color: black;
  &::after {
    background-color: red;
    width: 10px;
  }
  p {
    display: block;
    margin: 0;
    text-align: center;

    font-family: Inter;
    font-size: 16px;
    font-weight: 700;
    color: white;
  }
`;
const SelectStatusDiv = styled.div`
  display: flex;
  flex-direction: row;

  margin: 15.5px 0;
`;
