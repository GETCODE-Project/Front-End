import { GET } from "@/pages/api/axios"
import { useQuery } from "react-query";

/** 기술스택, 주제, 스터디분야 토글 리스트 GET API 데이터 */

/**------------------------------------------------ */
// 주제(subject) 토글 리스트
/**------------------------------------------------ */
const getSubjectsList = async()=>{
    let data:any[] = [];
    await GET(`/api/subjects`)
    .then((res)=>{
        data = [res.data];
    })
    .catch((err)=>{
        console.error(err);
    })
    return data[0] ?? [];
}

export const useSubjectsList = () => {
    const data = useQuery<any>('subjects',
        getSubjectsList, 
        // { staleTime: 5 * 60 * 1000 }
    );
    return data;
}

/**------------------------------------------------ */
// 기술스택(techStack) 토글 리스트
/**------------------------------------------------ */
const getTechStacksList = async() => {
    let data:any[] = [];
    await GET(`/api/techStacks`)
    .then((res)=>{
        data = [res.data];
    })
    .catch((err)=>{
        console.error(err);
    })
    return data[0] ?? [];
}
export const useTechStacksList = () => {
    const data = useQuery<any>('techStacks',
        getTechStacksList,
        // {staleTime: 360000}
    );
    return data;
}

/**------------------------------------------------ */
// 스터디 분야(studyFiled) 토글 리스트
/**------------------------------------------------ */
// export const useStudyFiledList = () => {
//     return useQuery('studyFiled', async() => {
//         const { data } = await GET(`/api/studyFiled`)
//         .then((res)=>{
//             return res.data;
//         })
//         .catch((err)=>console.error(err));
        
//         return data;
//     })
// }