import React, { useState } from "react";
import styled from "styled-components";

interface TextAreaProps {
  content: string;
}
  
const DetailTextArea: React.FC<TextAreaProps> = ({ content }) =>{
    const [isMypost, setIsMyPost] = useState<boolean>(true);
    return(
      <div>
        <Hr />
        <div style={{margin:"80px"}}>{content}</div>
        {isMypost&&(
          <>
        <Hr/>
        <div style={{ display:"flex", flexDirection:"row-reverse", gap:"20px"}}>
          <Button color="white" backgroundcolor="#FF4B13">수정</Button>
          <Button color="#FF4B13" backgroundcolor="white">삭제</Button>
        </div>
        </>)}
          <Hr />
      </div>
    );
  }

  export default DetailTextArea;

  interface ButtonProps{
    color:string;
    backgroundcolor: string;
  }
  const Button = styled.button<ButtonProps>`
    width:100px;
    height:23px;
    background-color:${(props)=>props.backgroundcolor};
    border:none;
    color: ${(props)=>props.color};
    border-radius: 8px;
    font-weight: 700;
    border: 1px solid ${(props)=>props.color};
  `
  
  const Hr = styled.hr`
    width: 100%;
    margin: 30px 0;
  `