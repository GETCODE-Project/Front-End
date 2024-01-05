import styled from "styled-components";
import { useState } from "react";
import { HartOnSVG, HartOffSVG, BookMarkOnSVG, BookMarkOffSVG, ViewCountSVG } from '@/public/SVG/reactionCount';

export const Marks = () =>{
    const [isHartOn, setIsHartOn] = useState<boolean>(false);
    const [isBookMarkOn, setIsBookMarkOn] = useState<boolean>(false);
    return(
      <div style={{display:"flex", gap:"20px", marginRight:"10px"}}>
        <HeartNum onClick={()=>{setIsHartOn(!isHartOn)}}>{isHartOn?<HartOnSVG size="30"/>:<HartOffSVG size="30"/>}<p>123</p></HeartNum>
        <div style={{cursor:"pointer"}} onClick={()=>{setIsBookMarkOn(!isBookMarkOn)}}>{isBookMarkOn?<BookMarkOnSVG/>:<BookMarkOffSVG/>}</div>
      </div>
    );
  }

const HeartNum = styled.div`
    cursor:pointer; 
    align-items:center;
    display:flex;
    p{
        font-size:14px;
        margin-left: 5px
    }
`