import { GET } from "@/pages/api/axios";

/** ------------------------------------------------------- */
// 게시물 객체 데이터 불러오기 API 작성 함수 모음
/** ------------------------------------------------------- */

//
interface ProjectProps {
    year: number;
    keyword: string;
    size: number;
    page: number;
    sort: string;
    subject: string;
    techStack: string;

    setObjectData: any;
}


export const getProjects = async ({year,keyword,size,page,sort,subject,techStack,setObjectData}:ProjectProps) => {
    return await GET(`/api/project/all?year=${year}&keyword=${keyword}&page=${page}&size=${size}&sort=${sort}&subject=${subject}&techStack=${techStack}`,{})
    .then((res)=>{
        setObjectData(res.data);
    })
    .catch((err)=>console.error(err));
}

export const getFindProjects = async ({year,keyword,size,page,sort,subject,techStack}:ProjectProps) => {
    const token = localStorage.getItem('token');
    return await GET('',{
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}
