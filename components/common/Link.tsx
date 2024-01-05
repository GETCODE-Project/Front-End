import styled from "styled-components";

interface Type {
  text?: string;
  size?: string;
  color?: string;
  type?: string;
}

const Link: React.FC<Type> = ({ text, size, color="black",type="text" }) => {
  return (
    <RoundBoxDiv>
      <LinkCategory color={color}>
        <p style={{fontSize:size}}>{text}</p>
      </LinkCategory>
      <LinkInput color={color} type={type}/>
    </RoundBoxDiv>
  );
};

export default Link;

const RoundBoxDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 400px;
  height: 28px;
  align-items: center;
  margin-right: 15px;

  background-color:white;
`;

const LinkCategory = styled.div<Type>`
    display: flex;
    margin: 0;
    height: 100%;
    width: 140px;
    align-items: center;
    justify-content: center;
    background-color:${props =>props.color};
    border-radius: 5px 0 0 5px;
    p{
        color: white;
        font-family: Inter;
        font-size: 16px;
        font-weight: 700;
    }
`
const LinkInput = styled.input<Type>`
    height:100%;
    width:100%;
    border:none;
    padding: 10px;
    border:1px solid ${props =>props.color};
    border-radius: 0 5px 5px 0;
`