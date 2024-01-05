import styled from "styled-components";
import RoundBox from "@/components/common/RoundBox";
import { media } from "@/styles/mediaQuery";
import Toggle from "@/components/common/Toggle";
import React, { useState } from "react";
import Link from "@/components/common/Link"

export const SelectSubject = () => {
    const optionSubject = [
      { key: 1, value: "주제1" },
      { key: 2, value: "주제3" },
    ];
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <RoundBox text="주제" />
        <Toggle options={optionSubject} />
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
        {/* <Toggle onCreate={selectOption} options={optionSubject} /> */}
        {/* <p>{option}</p> */}
      </div>
    );
  };

export  const AddLink = () => {

    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <RoundBox text="소스 링크" />
        <div style={{ display: "flex", flexDirection: "column", gap:"10px" }}>
          <Link text="GITHUB"/>
          <Link text="VELOG"/>
          <Link text="GITLAB"/>
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