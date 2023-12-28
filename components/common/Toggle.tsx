import styled from "styled-components";
import React, { useState } from "react";

interface Option {
  key: number;
  value: string;
}

interface OptionProps {
  options: Option[];
  onCreate?: React.Dispatch<React.SetStateAction<string>>;
}

const Toggle: React.FC<OptionProps> = ({ options, onCreate }) => {
  // const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {

  //   onCreate(event.target.value);
  // };
  return (
    // <Select onChange={handleSelectChange}>
    <Select
      onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
        onCreate?.(event.target.value)
      }
    >
      {options.map((option) => (
        <Option key={option.key} value={option.value}>
          {option.value}
        </Option>
      ))}
    </Select>
  );
};

export default Toggle;

const Option = styled.option`
  text-align: center;
`;

const Select = styled.select`
  width: 364px;
  height: 23px;
  border-radius: 30px;
  border: 1px solid #3c3c3c;
  background: #fff;
`;
