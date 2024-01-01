import styled from "styled-components";
import { useState } from "react";
import {ProfileSVG} from "@/public/SVG/profile"

const CommentList = () =>{

    return(
    <div style={{ display:"flex", flexDirection:"column", margin:"20px 0", borderBottom: "1px solid #FFD4AC"}}>
        <CommentBox>
            <ProfileSVG size="30"/>
            <p>닉네임</p>
            <p style={{fontSize:"12px"}}>2024.01.01</p>
        </CommentBox>
    <p style={{margin:"20px 50px", lineHeight: "normal",fontSize:"14px"}}>댓글 작성 내용 댓글 작성 내용 댓글 작성 내용 댓글 작성 내용 댓글 작성 내용 댓글 작성 내용 댓글 작성 내용 댓글 작성 내용 댓글 작성 내용 댓글 작성 내용 댓글 작성 내용 댓글 작성 내용 댓글 작성 내용 댓글 작성 내용 댓글 작성 내용 댓글 작성 내용</p>
    </div>
    );
};

const CommentBox = styled.div`
    display:flex;
    flex-direction:row;
    align-items: center;
    p{
        margin:0 10px;
    }
`

const Comment = ()=>{
    let N = 0;
    return(
        <Layout>
            <p style={{ margin:"20px 0"}}>댓글 {N}개</p>
            <div style={{  display:"flex",  width: "100%", padding:"10px 40px",     alignItems: "center"}}>
                <ProfileSVG size="40"/>
                <SearchInputBar/>
                <Button>등록</Button>
            </div>
            
            <div style={{margin:"20px 0", padding:"10px 20px", backgroundColor:"#FFF1E4"}}>
                <CommentList />
                <CommentList />
            </div>
        </Layout>
    );
}

export default Comment;

const Layout =styled.div`
    display: flex;
    flex-direction: column;
    width: 100%
    margin: auto;
    padding: 0 30px;
    margin:0;
    @media screen and (max-width: 800px){
    width: 100%;
    }
`

const SearchInputBar = styled.input`
    display: flex;
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    border-radius: 6px;
    border: 3px solid #FF993A;
    margin: 0 10px;
`;

const Button = styled.button`
    width: 80px;
    height : 30px;
    background-color:#FF993A;
    color: white;
    border:none;
    border-radius: 6px;
    font-size: 14px;
`