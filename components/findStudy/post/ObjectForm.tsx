import styled from "styled-components";
import RoundBox from "@/components/common/selectObject/SelectRoundBox";
import { media } from "@/styles/mediaQuery";
import Toggle from "@/components/common/selectObject/SelectToggle";
import React, { useState, useEffect } from "react";
import Link from "@/components/common/selectObject/SelectSourceLink"
import ToggleRoundBox from "@/components/common/selectObject/SelectToggleBox";
import SelectLocation from "@/components/common/selectObject/SelectLocation";
export const SelectStatus = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false)
  const backgroundColor = ["white", "#D9D9D9"]
  return (
    <div style={{ display: "flex", flexDirection: "row"}}>
      <RoundBox text="모집 여부" />
      <RoundBox text="모집 중" backgroundcolor={backgroundColor[Number(!isClicked)]} border="black" color="black" fontWeight={500} cursor={"pointer"} onClick={()=>{setIsClicked(false)}}/>
      <RoundBox text="모집 완료" backgroundcolor={backgroundColor[Number(isClicked)]} border="black" color="black" fontWeight={500} cursor={"pointer"} onClick={()=>{setIsClicked(true)}}/>
    </div>
  );
};


  interface OptionItem {
    key: number;
    value: string;
  }

  export  const SelectPart = () => {

    const optionSubject = [
      { key: 0, value: "분야을 선택하세요" },
      { key: 1, value: "분야1" },
      { key: 2, value: "분야2" },
      { key: 3, value: "분야3" },
      { key: 4, value: "분야4" },
      { key: 5, value: "분야5" },
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
        <RoundBox text="모집 분야" />
        <div style={{ display: "flex", flexWrap:"wrap",}}>
        <Toggle onCreate={(key, value)=>{handleInput(key, value)}} options={optionSubject} />
        <div style={{display:"flex",  width: "100%", flexWrap:"wrap"}}>
        {topics.map((topic) => (
          <ToggleRoundBox key={topic.key} text={topic.value} deleteTopic={()=>{deleteTopic(topic.key)}}/>
        ))}</div>
        </div>
      </div>
    );
  };


  export const SelectWheretoMeet = () => {
    const [isClicked, setIsClicked] = useState<boolean>(false)
    const backgroundColor = ["white", "#D9D9D9"]
    return (
      <div style={{ display: "flex", flexDirection: "row"}}>
        <RoundBox text="온/오프라인" />
        <RoundBox text="온라인" backgroundcolor={backgroundColor[Number(!isClicked)]} border="black" color="black" fontWeight={500} cursor={"pointer"} onClick={()=>{setIsClicked(false)}}/>
        <RoundBox text="오프라인" backgroundcolor={backgroundColor[Number(isClicked)]} border="black" color="black" fontWeight={500} cursor={"pointer"} onClick={()=>{setIsClicked(true)}}/>

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
      </div>
    );
  };

export  const AddLink = () => {

    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <RoundBox text="신청 방법" />
        <div style={{ display: "flex", flexDirection: "column", gap:"10px" }}>
        <Link text="E-mail" color="#5200FF" type="email"/>
          <Link text="Phone" color="#54E78F" type="tel" />
          <Link text="Open-Kakao" color="#FFA800" fontSize="14px"/>
          <Link text="Form" color="#FF451D"/>
        </div>
      </div>
    );
  }


const ObjectForm = () =>{
  return(
    <>
        <SelectStatus />
        <SelectPart />
        <SelectWheretoMeet />
        <SelectLocation text="스터디 지역" />
        <AddLink />
    </>
  );
}
export default ObjectForm;