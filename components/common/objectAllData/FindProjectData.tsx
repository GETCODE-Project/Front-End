import { GET } from "@/pages/api/axios";
import { useEffect } from "react";

/** ------------------------------------------------------------- */
/** 게시물 목록 페이지 레이아웃 재사용 폼 */ //
/** ------------------------------------------------------------- */
// 페이지타이틀,소타이틀,검색단,총NN개,정렬(최신순/과거순/인기순),게시물목록,글쓰기버튼
/**[TODO]
 * [1] 
 */

/** GET 파라미터값(검색에사용), 데이터를 저장할 status */
//[TODO] year제거 & 모집파트,모집여부추가해야함
interface FindProjectProps {
    params: {
        sort: string;
        page: number;
        size: number;
        keyword: string;
        subject: string;
        techStack: [];
        year?: number;
        memberId?: number;
    }
    setObjectData?: any;
}

/** 프로젝트모집 전체 게시물 데이터 */
export const getObjectData = async({params,setObjectData}:FindProjectProps) => {

    const techStackQueryString = () => {
        let techStack = '';
        if(params.techStack.length > 0){
            techStack = params.techStack?.map((stack) => `techStack=${encodeURIComponent(stack)}`).join('&');
        }
        return techStack;
    }

    return await GET(`/api/projectrecruitment/all?year=${params.year}&keyword=${params.keyword}&size=${params.size}&page=${params.page}&sort=${params.sort}&subject=${params.subject}&${techStackQueryString}&${params.memberId}`,{})
    .then((res)=>{
        setObjectData(res.data);
    })
    .catch((err)=>{console.error(err)});
    
}