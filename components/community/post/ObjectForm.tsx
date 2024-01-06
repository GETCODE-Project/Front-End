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


const ObjectForm = () =>{
  return(
    <>
      <SelectSubject />
    </>
  );
}
export default ObjectForm;