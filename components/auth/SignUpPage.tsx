import styled from "styled-components";
import { useRouter } from 'next/router';
import { useState } from "react";
import { GET, POST } from "@/pages/api/axios";
import InputForm from "@/components/auth/authForm/InputForm";
import AuthForm from "@/components/auth/authForm/AuthForm";
import AuthLayoutForm from "@/components/auth/authForm/AuthLayoutForm";
import Toast from "@/components/common/notification/Toast";
import { FailSVG, NoticeSVG } from "@/public/SVG/toast";

const SignUpPage = () => {
    const router = useRouter();
    const [isSignUp, setIsSignUp] = useState<boolean>();
    const [userEmail, setUserEmail] = useState<string>('');
    const [varificationNumber, setVarificationNumber] = useState<any>('');
    const [userPassword, setUserPassword] = useState<string>('');
    const [userNickname, setUserNickname] = useState<string>('');
    const [isVarificationSuccess, setIsVarificationSuccess] = useState<boolean|undefined>(undefined);
    const [isPostEmailVarification, setIsPostEmailVarification] = useState<boolean>(true);//임시

    /** 입력값 STATE 변경(email,varificationNumber,password,nickname) */

    //email 입력 (state 변경)
    const handleUserEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target.value;
        setUserEmail(target);
    }
    //인증 번호 입력 (state 변경)
    const handleUserAuthenticationNumber = (e:React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target.value;
        setVarificationNumber(target);
    }
    //password 입력 (state 변경)
    const handleUserPassword = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const target = e.target.value;
        setUserPassword(target);
    }
    //nickname 입력 (state 변경)
    const handleUserNickname = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const target = e.target.value;
        setUserNickname(target);
    }

    /** 이메일 인증 API */

    //이메일 인증 번호 요청 POST
    const postEmailAuthentication = async() => {
        await POST(`/api/emails/verification-requests?email=${userEmail}`)
        .then((res)=>{
            console.log(res)
            // if(res === ''){
            //     setIsPostEmailVarification(true);
            // }else{
            //     setIsPostEmailVarification(false);
            // }
        })
        .catch((error)=>{console.log(error)});
    }
    //이메일 인증 번호 인증 GET
    const getVerification = async() => {
        await GET(`/api/emails/verifications?email=${userEmail}&code=${varificationNumber}`)
        .then((res)=>{
            setIsVarificationSuccess(res)
        })
        .catch((err)=>console.error(err));
    }

    /** POST - 회원가입 */
    const handleSignUp = async() => {
        await POST(`/api/sign-up`,{
            email: {userEmail},
            nickname: {userNickname},
            password: {userPassword},      
        }).then((res)=>{
            console.log(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    }

    /** [TODO] 유효성검사 validation,validationGuide연결해야함 */
    // validation은 patch유효성검사 boolean값
    // validationGuide는 patch,post유효성검사 error메세지

    return(
        <AuthLayoutForm>
        <AuthForm
            title="회원가입"
            buttonName="회원가입"
        >
            <InputForm
                name="Email"
                type="email"
                placeholder="email@email.com"
                value={userEmail}
                onChange={handleUserEmail}
                validation={true}
                validationGuide=""
                >
                <CertifiedPOST onClick={postEmailAuthentication}>인증</CertifiedPOST>
            </InputForm>
            <InputForm
                name="Authentication"
                type="string"
                placeholder="인증 번호를 입력해주세요."
                value={varificationNumber}
                onChange={handleUserAuthenticationNumber}
                validation={true}
                validationGuide=""
                >
                <CertifiedGET onClick={getVerification} isPostEmailVarification={isPostEmailVarification}>완료</CertifiedGET>
                {isVarificationSuccess === true?
                    <p>인증 완료되었습니다.</p>
                :isVarificationSuccess === false?
                    <Toast iconSVG={<FailSVG/>} notice="인증 번호가 일치하지 않습니다."/>
                :<></>
                }
            </InputForm>
            <InputForm
                name="Password"
                type="password"
                placeholder="••••••••••"
                value={userPassword}
                onChange={handleUserPassword}
                validation={true}
            />
            <InputForm
                name="Nickname"
                type="text"
                placeholder="홍길동"
                value={userNickname}
                onChange={handleUserNickname}
                validation={true}
            />
            <Toast iconSVG={<NoticeSVG/>} notice="인증메일이 발송되었습니다."/>
        </AuthForm>
        </AuthLayoutForm>
    )
}

export default SignUpPage;

const CertifiedPOST = styled.div`
        display:flex;
        position: absolute;
        right: 10px;
        top: 33.5px;
        align-items: center;
        justify-content: center;
        width: 55px;
        height: 25px;
        padding-top: 3px;

        background-color: #FF993A;
        border-radius: 8px;
        
        color: #fff;

        cursor: pointer;
`;

const CertifiedGET = styled.div<{isPostEmailVarification:boolean}>`
        display:flex;
        position: absolute;
        right: 10px;
        top: 33.5px;
        align-items: center;
        justify-content: center;
        width: 55px;
        height: 25px;
        padding-top: 3px;

        background-color: ${({isPostEmailVarification})=>(isPostEmailVarification?'#FF993A':'#B7B7B7')};
        border-radius: 8px;
        
        color: #fff;

        cursor: pointer;
        pointer-events: ${({isPostEmailVarification})=>(isPostEmailVarification?'unset':'none')};
`;