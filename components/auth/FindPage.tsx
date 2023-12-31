import AuthForm from "@/components/common/auth/AuthForm";
import AuthLayoutForm from "@/components/common/auth/AuthLayoutForm";
import InputForm from "@/components/common/auth/InputForm";
import { useState } from "react";
import styled from "styled-components";

const FindPage = () => {
    const [userEmail, setUserEmail] = useState<string>('');
    /** email 입력 (state 변경) */
    const handleUserEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target.value;
        setUserEmail(target);
    }
    return (
        <AuthLayoutForm>
            <AuthForm
                title="비밀번호 찾기"
                buttonName="비밀번호 찾기"
            >
            <InputForm
                name="Email"
                type="email"
                placeholder="email@email.com"
                value={userEmail}
                onChange={handleUserEmail}
                validation={true}
            >
                <Certified>인증</Certified>
            </InputForm>
            </AuthForm>
        </AuthLayoutForm>
    )
}
export default FindPage;

const Certified = styled.div`
        display:flex;
        position: absolute;
        right: 10px;
        top: 33.5px;
        align-items: center;
        justify-content: center;
        width: 55px;
        height: 25px;

        background-color: #FF993A;
        border-radius: 8px;
        
        color: #fff;

        cursor: pointer;
`;