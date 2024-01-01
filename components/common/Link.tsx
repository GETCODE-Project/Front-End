import styled from "styled-components";

interface Type {
  text: string;
  size?: string;
}

const Link: React.FC<Type> = ({ text, size }) => {
  return (
    <RoundBoxDiv>
      <LinkCategory>
        <p style={{fontSize:size}}>{text}</p>
      </LinkCategory>
      <LinkInput />
    </RoundBoxDiv>
  );
};

export default Link;

const RoundBoxDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 380px;
  height: 28px;
  align-items: center;
  margin-right: 15px;

  background-color: white;
`;

const LinkCategory = styled.div`
    display: flex;
    margin: 0;
    height: 100%;
    width: 130px;
    align-items: center;
    justify-content: center;
    background-color: black;
    border:1px solid black;
    border-radius: 5px 0 0 5px;
    p{
        color: white;
        font-family: Inter;
        font-size: 16px;
        font-weight: 700;
    }
`
const LinkInput = styled.input`
    height:100%;
    width:100%;
    border:none;
    padding: 10px;
    border:1px solid black;
    border-radius: 0 5px 5px 0;
`