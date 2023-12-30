import styled from "styled-components";
import React, { useState } from "react";

interface Type {
  text: string;
}

const RoundBox: React.FC<Type> = ({ text }) => {
  return (
    <RoundBoxDiv>
      <p>{text}</p>
    </RoundBoxDiv>
  );
};

export default RoundBox;

const RoundBoxDiv = styled.div`
  display: grid;
  width: 108px;
  height: 23px;
  border-radius: 30px;
  border: 1px;
  margin-right: 10px;
  place-items: center;
  background-color: black;
  p {
    display: block;
    margin: 0;
    text-align: center;

    font-family: Inter;
    font-size: 16px;
    font-weight: 700;
    color: white;
  }
`;
