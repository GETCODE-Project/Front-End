import { GET } from "@/pages/api/axios";
import { useState } from "react";

/** GET 파라미터값, 데이터를 저장할 status */
interface ProjectProps {
    params: {
        year: number;
        keyword: string;
        size: number;
        page: number;
        sort: string;
        subject: string;
        techStack: [];
    }
    setObjectData?: any;
}

/** 프로젝트 전체 게시물 데이터 */
export const getObjectData = async ({params,setObjectData}:ProjectProps) => {

    const techStackQueryString = () => {
        let techStack = '';
        if(params.techStack.length > 0){
            techStack = params.techStack?.map((stack) => `techStack=${encodeURIComponent(stack)}`).join('&');
        }
        return techStack;
    }
    
    return await GET(`/api/project/all?year=${params.year}&keyword=${params.keyword}&page=${params.page}&size=${params.size}&sort=${params.sort}&subject=${params.subject}&${techStackQueryString}`,{})
    .then((res)=>{
        setObjectData(res);
    })
    .catch((err)=>{console.error(err)});
}