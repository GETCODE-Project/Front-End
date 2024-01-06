import { useState } from "react";
import styled from "styled-components";

interface Options {
  key: number;
  value: string;
}
type onCreateProps = (key: number, value: string) => void;
interface OptionProps {
  options: Options[];
  // onCreate?: React.Dispatch<React.SetStateAction<string>>;
  onCreate?: onCreateProps;
}



const SelectToggle: React.FC<OptionProps> = ({ options, onCreate }) => {
  return (
    <Select
      onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>{
        onCreate?.(Number(event.target.selectedOptions[0]?.id), event.target.value )
      }
      }
    >
      {options.map((option) => (
        <Option key={option.key} value={option.value} id={String(option.key)}>
          {option.value}
        </Option>
      ))}
    </Select>
  );
};

export default SelectToggle;

const Option = styled.option`
  text-align: center;
`;

const Select = styled.select`
  width: 364px;
  height: 28px;
  border-radius: 30px;
  border: 1px solid #3c3c3c;
  background: #fff;
`;
