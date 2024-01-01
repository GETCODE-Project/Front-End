import styled from "styled-components";

interface Type {
  text: string;
}

const RoundBox: React.FC<Type> = ({ text }) => {
  return (
    <RoundBoxDiv>
      <p>{text}</p>
    </RoundBoxDiv>
  );
};

export default RoundBox;

const RoundBoxDiv = styled.div`
  display: grid;
  flex: 0 0 130px;
  height: 28px;
  border-radius: 30px;
  border: 1px;
  margin-right: 15px;
  place-items: center;
  background-color: black;
  p {
    display: block;
    margin: 0;
    text-align: top;
    font-family: Inter;
    font-size: 16px;
    font-weight: 700;
    color: white;
  }
`;


// const RoundBoxDiv = styled.div`
//   display: grid;
//   width: 130px;
//   height: 28px;
//   border-radius: 30px;
//   border: 1px;
//   margin-right: 15px;
//   place-items: center;
//   background-color: black;
//   p {
//     display: block;
//     margin: 0;
//     text-align: center;
//     font-family: Inter;
//     font-size: 16px;
//     font-weight: 700;
//     color: white;
//   }
// `;
