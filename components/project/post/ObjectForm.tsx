import styled from "styled-components";
import RoundBox from "@/components/common/selectObject/SelectRoundBox";
import { media } from "@/styles/mediaQuery";
import Toggle from "@/components/common/selectObject/SelectToggle";
import React, { useState } from "react";
import Link from "@/components/common/selectObject/SelectSourceLink"
import ToggleRoundBox from "@/components/common/selectObject/SelectToggleBox";
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
        <div style={{ display: "flex", flexWrap:"wrap"}}>
        <Toggle onCreate={(key, value)=>{handleInput(key, value)}} options={optionSubject} />
        <div style={{display:"flex",  width: "100%", flexWrap:"wrap"}}>
        {topics.map((topic) => (
          <ToggleRoundBox key={topic.key} text={topic.value} deleteTopic={()=>{deleteTopic(topic.key)}}/>
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

const ObjectForm = () =>{
  return(
    <>
      <SelectSubject />
      <SelectTech />
      <AddLink />
    </>
  );
}
export default ObjectForm;