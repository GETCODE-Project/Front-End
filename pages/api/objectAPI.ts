import { GET } from "@/pages/api/axios";

/** ------------------------------------------------------- */
// 게시물 객체 데이터 불러오기 API 작성 함수 모음
/** ------------------------------------------------------- */

interface ProjectProps {
    year: number;
    keyword: string;
    size: number;
    page: number;
    sort: string;
    subject: string;
    techStack: string;
}

export const getProjects = async ({year,keyword,size,page,sort,subject,techStack}:ProjectProps) => {
    return await GET('',{
        params: {
            year,keyword,size,page,sort,subject,techStack
        }
    });
}

export const getFindProjects = async ({year,keyword,size,page,sort,subject,techStack}:ProjectProps) => {
    const token = localStorage.getItem('token');
    return await GET('',{
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}
