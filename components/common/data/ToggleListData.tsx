import { GET } from "@/pages/api/axios"
import { useQuery } from "react-query";

/** 기술스택, 주제, 스터디분야 토글 리스트 GET API 데이터 */

export const useSubjectsList = () => {
    return useQuery('subjects', async() => {
        const { data } = await GET(`/api/subjects`)
        .then((res)=>{
            return res.data;
        })
        .catch((err)=>console.error(err));
        
        return data;
    })
}

export const useTechStacksList = () => {
    return useQuery('techStacks', async() => {
        const { data } = await GET(`/api/techStacks`)
        .then((res)=>{
            return res.data;
        })
        .catch((err)=>console.error(err));
        
        return data;
    })
}

export const useStudyFiledList = () => {
    return useQuery('studyFiled', async() => {
        const { data } = await GET(`/api/studyFiled`)
        .then((res)=>{
            return res.data;
        })
        .catch((err)=>console.error(err));
        
        return data;
    })
}