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
    validationGuide?: string;
}

/** ------------------------------------------------------------- */
/** Auth Input칸 재사용 폼 */
/** ------------------------------------------------------------- */
/**[TODO]
 * [1] Input 폰트 사이즈 확대
 * [2] 유효성 UI
 * [3] 유효성 UI에 다른 X버튼 수정
 * [4] X버튼 기능 추가
 */

const InputForm = ({name,type, placeholder, value, onChange, validation, children, validationGuide}:InputProps) => {

    return (
        <InputWrapper validation={validation}>
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
                <>
                <div id='children'>{children}</div>
                <div id='icon'>
                    <EmailDeleteSVG/>
                </div>
                <ValidationGuide>{validationGuide}</ValidationGuide>
                </>
            }
        </InputWrapper>
    )
}
export default InputForm;

const InputWrapper = styled.div<{validation:boolean}>`
    display: flex;
    position: relative;
    flex-direction: column;
    gap: 8px;

    &>p{
        color: ${({validation})=>(validation?'#000':'#ff4747')};
        font-size: 1rem;
        font-weight: 500;
    }

    &>input{
        width: 100%;
        height: 45px;
        padding: 10px;
        box-sizing: border-box;

        border-radius: 8px;
        border: ${({validation})=>(validation?'1px solid #B7B7B7':'2px solid #ff4747')};
        
        color: ${({validation})=>(validation?'#000':'#ff4747')};

        &:focus{
            border: ${({validation})=>(validation?'1px solid #FF993A':'2px solid #ff4747')};
            outline: none;
        }
    }
    #icon{
        position: absolute;
        right: 70px;
        top: 37px;

        cursor: pointer;
    }
    #children{
        position: absolute;
        right: 0px;
        
    }
`;

const ValidationGuide = styled.div`
    width: 100%;
    padding: 0 10px;

    color: #ff4747;
    font-size: 0.75rem;
`;