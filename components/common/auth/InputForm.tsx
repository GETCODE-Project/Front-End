import { EmailDeleteSVG } from "@/public/SVG/auth";
import { useState } from "react";
import styled from "styled-components";

interface InputProps{
    name: string;
    type: string;
    placeholder: string;
    value: any;
    onChange: (value: any) => void;
    validation: boolean;
    children?:any;
}

const InputForm = ({name,type, placeholder, value, onChange, validation, children}:InputProps) => {

    return (
        <InputWrapper>
                    <p>{name}</p>
                    <input 
                        type={type}
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                    />
                    { validation ?
                        <>{children}</>
                        :
                        <div id='icon'>
                            <EmailDeleteSVG/>
                        </div>
                    }
                    {/* {children} */}
                    
        </InputWrapper>
    )
}
export default InputForm;

const InputWrapper = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    gap: 8px;

    &>input{
        width: 100%;
        height: 45px;
        padding: 10px;
        box-sizing: border-box;

        border-radius: 8px;
        border: 1px solid #B7B7B7;
        
        color: #3c3c3c;

        &:focus{
            border: 1px solid #FF993A;
            outline: none;
        }
    }
    #icon{
        position: absolute;
        right: 10px;
        top: 37px;

        cursor: pointer;
    }
`;