import { GET } from "@/pages/api/axios";
import { useState } from "react";

/** GET 파라미터값, 데이터를 저장할 status */
interface ProjectProps {
    params: {
        sort: string;
        page: number;
        size: number;
        keyword: string;
        subject: string;
        techStack: [];
        year: number;
        memberId?: number;
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
    
    return await GET(`/api/project/all?year=${params.year}&keyword=${params.keyword}&page=${params.page}&size=${params.size}&sort=${params.sort}&subject=${params.subject}&${techStackQueryString}&${params.memberId}`,{})
    .then((res)=>{
        setObjectData(res.data);
    })
    .catch((err)=>{console.error(err)});
}