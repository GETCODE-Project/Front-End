import styled from "styled-components";
import RoundBox from "@/components/common/selectObject/SelectRoundBox";
import { media } from "@/styles/mediaQuery";
import Toggle from "@/components/common/selectObject/SelectToggle";
import React, { useState } from "react";

const SelectSubject = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
      <RoundBox text="주제" backgroundcolor="#FFF1E4" border="#FF4B13" color="#FF4B13"/>
      <p style={{marginLeft:"10px", fontSize:"17px"}}>주제 내용</p>
    </div>
  );
};


const SelectTech = () => {
  return (
    <div style={{ display: "flex"}}>
    <RoundBox text="기술 스택" backgroundcolor="#FFF1E4" border="#FF4B13" color="#FF4B13"/>
    <div style={{ display: "flex", width: "100%", flexWrap: "wrap", gap:"10px 0"}}>
      <RoundBox text="Spring Boot" backgroundcolor="#D9D9D9" border="white" color="black" fontWeight={500}/>
      <RoundBox text="Spring Boot" backgroundcolor="#D9D9D9" border="white" color="black" fontWeight={500}/>
      <RoundBox text="Spring Boot" backgroundcolor="#D9D9D9" border="white" color="black" fontWeight={500}/>
      <RoundBox text="Spring Boot" backgroundcolor="#D9D9D9" border="white" color="black" fontWeight={500}/>
      </div>
  </div>
  );
};

const AddLink = () => {

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <RoundBox text="소스 링크" backgroundcolor="#FFF1E4" border="#FF4B13" color="#FF4B13"/>
      <div style={{ display: "flex", flexDirection: "row", gap:"10px" , whiteSpace: "preLine"}}>
        <Link href="#" color="#5200FF">GITHUB</Link>
        <Link href="#" color="#54E78F">VELOG</Link>
        <Link href="#" color="#FFA800">GITLAB</Link>
      </div>
    </div>
  );
}

interface Props{
  color?: string;
} 
const Link = styled.a<Props>`
  display: flex;
  background-color:${props =>props.color || "black"};
  color: white;
  width: 130px;
  height: 28px;
  place-items: center;
  text-align: top;
  justify-content: center;
  text-decoration:none;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  font-weight: 700;
`

const ObjectForm = () => {
  return(
  <>
      <SelectSubject />
      <SelectTech />
      <AddLink />
  </>
  )
}
export default ObjectForm;
