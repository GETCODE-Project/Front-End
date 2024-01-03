import styled from "styled-components";
import RoundBox from "@/components/common/RoundBox";
import { media } from "@/styles/mediaQuery";
import Toggle from "@/components/common/Toggle";
import React, { useState } from "react";
import Link from "@/components/common/Link"
import ToggleRoundBox from "@/components/common/ToggleRoundBox";
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

  interface OptionItem {
    key: number;
    value: string;
  }
  
export  const SelectTech = () => {

    const optionSubject = [
      { key: 0, value: "기술 스택을 선택하세요" },
      { key: 1, value: "기술1" },
      { key: 2, value: "기술2" },
      { key: 3, value: "기술3" },
      { key: 4, value: "기술4" },
    ];
    const [topics, setTopics] = useState<OptionItem[]>([]);

    const handleInput = (key:number, value: string) => {
      const inputText = {key: key, value: value}; 
      if (key !== 0 && !(topics.some((topic) => topic.key === key))) {
        setTopics((topic) => [...topic, inputText]);
      }
    }

    const deleteTopic = (key:number)=>{
      const newTopics = []
      for(let i=0; i<topics.length; i++){
        if(topics[i].key !== key){
          newTopics.push(topics[i]);
        }
      }        
      setTopics(newTopics);
    }

    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <RoundBox text="기술 스택" />
        <div style={{ display: "flex", flexWrap:"wrap", gap:"10px"}}>
        <Toggle onCreate={(key, value)=>{handleInput(key, value)}} options={optionSubject} />
        <div style={{display:"flex",  width: "100%", flexWrap:"wrap", gap:"10px 0"}}>
        {topics.map((topic) => (
          <ToggleRoundBox key={topic.key} text={topic.value} deleteTopic={()=>{deleteTopic(topic.key)}}/>
          // <ToggleRoundBox key={topic.key} text={topic.value} deleteTopic={deleteTopic(topic.key)}/>
        ))}</div>
        </div>
      </div>
    );
  };

export  const AddLink = () => {

    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <RoundBox text="소스 링크" />
        <div style={{ display: "flex", flexDirection: "column", gap:"10px" }}>
          <Link text="GITHUB" color="#5200FF"/>
          <Link text="VELOG" color="#54E78F"/>
          <Link text="GITLAB" color="#FFA800"/>
        </div>
      </div>
    );
  }

  export const TextArea = () =>{
    return(
      <div>
        <textarea style={{ height: "500px", width:"calc(100% - 100px)", margin:"50px" }} />
        <hr style={{ width: "100%", margin: "30px 0" }} />
        <div style={{ display:"flex", flexDirection:"row-reverse", gap:"20px"}}>
          <button style={{width:"100px"}}>등록</button>
          <button style={{width:"100px"}}>취소</button>
        </div>
        <hr style={{ width: "100%",margin: "30px 0" }} />
      </div>
    );
  }