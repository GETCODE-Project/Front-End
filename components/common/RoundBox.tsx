import styled from "styled-components";

interface Type {
  text?: string;
  size?: string;
  color?: string;
  backgoundcolor?: string;
  border?: string;
  fontWeight?: number;
  onClick?:any;
  cursor?: string;
}
// onClick={()=>{onClick}} backgroundColor #FFF1E4

const RoundBox: React.FC<Type> = ({ text, size, color="#FF4B13", backgoundcolor="#FFF1E4", border="#FF4B13", fontWeight=700, onClick, cursor="default"}) => {
  return (
    <RoundBoxDiv color={color} size={size} backgoundcolor={backgoundcolor} border={border} fontWeight={fontWeight} onClick={onClick} cursor={cursor}>
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
  border: 1px solid ${props =>props.border};
  margin-right: 15px;
  place-items: center;
  background-color:${props =>props.backgoundcolor};
  cursor:${props =>props.cursor};
  p {
    display: flex;
    margin: 0;
    text-align: top;
    font-family: Inter;
    font-size: 16px;
    font-weight: ${props =>props.fontWeight};
    color: ${props =>props.color};
  }
`;
