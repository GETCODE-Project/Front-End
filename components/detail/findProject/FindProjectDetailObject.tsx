import styled from "styled-components";
import RoundBox from "@/components/common/RoundBox";
import { media } from "@/styles/mediaQuery";
import Toggle from "@/components/common/Toggle";
import React, { useState } from "react";
  

export const SelectStatus = () => {
  const isSelected:boolean = false;
  const backgroundColor = ["white", "#D9D9D9"]
  return (
    <div style={{ display: "flex", flexDirection: "row"}}>
      <RoundBox text="모집 여부" />
      <RoundBox text="모집 중" backgoundcolor={backgroundColor[Number(!isSelected)]} border="black" color="black" fontWeight={500} />
      <RoundBox text="모집 완료" backgoundcolor={backgroundColor[Number(isSelected)]} border="black" color="black" fontWeight={500}/>
    </div>
  );
};


export const SelectSubject = () => {
    return (
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
      <RoundBox text="주제" backgoundcolor="#FFF1E4" border="#FF4B13" color="#FF4B13"/>
      <p style={{marginLeft:"10px", fontSize:"17px"}}>주제 내용</p>
    </div>
    );
  };

  
export  const SelectTech = () => {
    return (
      <div style={{ display: "flex"}}>
      <RoundBox text="기술 스택" backgoundcolor="#FFF1E4" border="#FF4B13" color="#FF4B13"/>
      <div style={{ display: "flex", width: "100%", flexWrap: "wrap", gap:"10px 0"}}>
        <SelectedSources>데이터베이스</SelectedSources>
        <SelectedSources>Spring Boot</SelectedSources>
        <SelectedSources>Spring Boot</SelectedSources>
        <SelectedSources>Spring Boot</SelectedSources>
        <SelectedSources>Spring Boot</SelectedSources>
        {/* <RoundBox text="Spring Boot" backgoundcolor="#D9D9D9" border="white" color="black" fontWeight={500}/>
        <RoundBox text="Spring Boot" backgoundcolor="#D9D9D9" border="white" color="black" fontWeight={500}/>
        <RoundBox text="Spring Boot" backgoundcolor="#D9D9D9" border="white" color="black" fontWeight={500}/> */}
        </div>
    </div>
    );
  };
const SelectedSources = styled.div`
  display: flex;
  flex: 0 0 100px;
  height: 25px;
  margin-right: 10px;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  background-color: #D9D9D9;
  border-radius: 30px;
`

export const WishPart = () =>{
  return (
    <div style={{ display: "flex"}}>
    <RoundBox text="기술 스택" backgoundcolor="#FFF1E4" border="#FF4B13" color="#FF4B13"/>
    <div style={{ display: "flex", width: "100%", flexWrap: "wrap", gap:"10px 0"}}>
      <RoundBox text="Spring Boot" backgoundcolor="#D9D9D9" border="white" color="black" fontWeight={500}/>
      <RoundBox text="Spring Boot" backgoundcolor="#D9D9D9" border="white" color="black" fontWeight={500}/>
      <RoundBox text="Spring Boot" backgoundcolor="#D9D9D9" border="white" color="black" fontWeight={500}/>
      <RoundBox text="Spring Boot" backgoundcolor="#D9D9D9" border="white" color="black" fontWeight={500}/>
      </div>
  </div>
  );
}

export  const AddLink = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <RoundBox text="소스 링크" backgoundcolor="#FFF1E4" border="#FF4B13" color="#FF4B13"/>
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



  
interface TextAreaProps {
  content: string;
}
  
  export const TextArea: React.FC<TextAreaProps> = ({ content }) =>{
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