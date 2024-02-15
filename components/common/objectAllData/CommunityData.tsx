import { GET } from "@/pages/api/axios";

interface ProjectProps {
    params: {
        sort: string;
        pageNumber?: number;
        size: number;
        keyword: string;
        year: number|string;
        page?: number;
        category: string;
    }
    setObjectData?: any;
}

/** ------------------------------------------------------------- */
/** 커뮤니티 전체 게시물 데이터 */
/** ------------------------------------------------------------- */
// QnA, 자유게시판, 고민상담

export const getObjectData = async ({params,setObjectData}:ProjectProps) => {

    // console.log(params.category);
    
    return await GET(`/api/project/all?year=${params.year}&keyword=${params.keyword}&pageNumber=${params.pageNumber}&size=${params.size}&sort=${params.sort}&category=${params.category}`,{})
    .then((res)=>{
        setObjectData(res.data);
    })
    .catch((err)=>{console.error(err)});
}


/** ------------------------------------------------------------- */
/** 내가 작성한 스터디 모집 게시물 전체 데이터 */
/** ------------------------------------------------------------- */
export const getMyWriteObjectData = async ({params,setObjectData}:ProjectProps) => {
    
    return await GET(`/api/mypage/community?page=${params.page}&size=${params.size}`)
    .then((res)=>{
        setObjectData(res.data);
        console.log(res.data,'스터디모집게시물my');
    })
    .catch((err)=>{console.error(err)});
}

/** ------------------------------------------------------------- */
/** 내가 찜한 스터디 모집 게시물 전체 데이터 */
/** ------------------------------------------------------------- */
export const getMyWishObjectData = async ({params,setObjectData}:ProjectProps) => {
    
    return await GET(`/api/mypage/community/wish?page=${params.page}&size=${params.size}`)
    .then((res)=>{
        setObjectData(res.data);
    })
    .catch((err)=>{console.error(err)});
}