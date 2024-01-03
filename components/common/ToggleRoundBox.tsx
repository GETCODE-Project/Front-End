import { relative } from "path";
import styled from "styled-components";
import {DeleteSVG} from "@/public/SVG/delete"
import { MouseEventHandler } from "react";
interface Type {
  text?: string;
  deleteTopic?: MouseEventHandler<HTMLSpanElement> | undefined;
}

const ToggleRoundBox: React.FC<Type> = ({text, deleteTopic }) => {
    console.log(deleteTopic)
  return (
    <RoundBoxDiv>
    <p>{text}</p>
    <span onClick={deleteTopic}>
        <DeleteSVG />
    </span>
    </RoundBoxDiv>
  );
};

export default ToggleRoundBox;

const RoundBoxDiv = styled.div<Type>`
  display: flex; 
  justify-content: space-between;
  flex: 0 0 130px;
  height: 28px;
  border-radius: 30px;
  margin-right: 15px;
  place-items: center;
  background-color:#D9D9D9;
  p {
    display: flex;
    margin-left: 10px;
    width: calc(100% - 15px);
    justify-content: center;
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    color: black;
  }
  span{
    margin-right:10px;
    cursor:pointer;
  }
`;