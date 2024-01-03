import styled from "styled-components";

interface Type {
  text?: string;
  size?: string;
  color?: string;
  backgroundColor?: string;
  border?: string;
  fontWeight?: number;
  deleteBox?: any;
}

const RoundBox: React.FC<Type> = ({ text, size, color, backgroundColor, border, fontWeight, deleteBox }) => {
  return (
    <RoundBoxDiv size={size} color={color} backgroundColor={backgroundColor} border={border} fontWeight={fontWeight}>
      <p>{text}</p>
    </RoundBoxDiv>
  );
};

export default RoundBox;

const RoundBoxDiv = styled.div<Type>`
  display: grid;
  flex: 0 0 130px;
  height: 28px;
  border-radius: 30px;
  border: 1px solid ${props =>props.border || "none"};
  margin-right: 15px;
  place-items: center;
  background-color:${props =>props.backgroundColor || "black"};
  p {
    display: flex;
    margin: 0;
    text-align: top;
    font-family: Inter;
    font-size: 16px;
    font-weight: ${props =>props.fontWeight || 700};
    color: ${props =>props.color || "white"};
  }
`;
