import styled from "styled-components";
import RoundBox from "@/components/common/RoundBox";
import { media } from "@/styles/mediaQuery";
import Toggle from "@/components/common/Toggle";
import React, { useState } from "react";
import Link from "@/components/common/Link"


export const SelectStatus = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row"}}>
      <RoundBox text="모집 여부" />
      <RoundBox text="모집 중" />
      <RoundBox text="모집 완료" />
    </div>
  );
};


export const SelectPart = () => {
    const optionSubject = [
      { key: 1, value: "주제1" },
      { key: 2, value: "주제3" },
    ];
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <RoundBox text="분야" />
        <Toggle options={optionSubject} />
      </div>
    );
  };

  export const SelectWheretoMeet = () => {
    return (
      <div style={{ display: "flex", flexDirection: "row"}}>
        <RoundBox text="온라인" />
        <RoundBox text="오프라인" />
      </div>
    );
  };
  
export  const SelectTech = () => {
    const [option, selectOption] = useState("선택 해제");
    const optionSubject = [
      { key: 1, value: "기술1" },
      { key: 2, value: "기술2" },
    ];
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <RoundBox text="기술 스택" />
        <Toggle onCreate={selectOption} options={optionSubject} />
        {/* <p>{option}</p> */}
      </div>
    );
  };

  export  const WishPart = () => {
    const [option, selectOption] = useState("선택 해제");
    const optionSubject = [
      { key: 1, value: "기술1" },
      { key: 2, value: "기술2" },
    ];
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <RoundBox text="모집 파트" />
        <Toggle onCreate={selectOption} options={optionSubject} />
        {/* <p>{option}</p> */}
      </div>
    );
  };

export  const AddLink = () => {

    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <RoundBox text="신청 방법" />
        <div style={{ display: "flex", flexDirection: "column", gap:"10px" }}>
          <Link text="E-mail"/>
          <Link text="Phone"/>
          <Link text="Open-Kakao"/>
          <Link text="Form"/>
        </div>
      </div>
    );
  }

  export const TextArea = () =>{
    return(
      <div style={{ margin: "50px"}}>
        <textarea style={{ height: "500px", width:"100%" }} />
        <hr style={{ width: "100%", margin: "30px 0" }} />
        <div style={{ display:"flex", flexDirection:"row-reverse", gap:"20px"}}>
          <button style={{width:"100px"}}>등록</button>
          <button style={{width:"100px"}}>취소</button>
        </div>
        <hr style={{ width: "100%",margin: "30px 0" }} />
      </div>
    );
  }