import { GET } from "@/pages/api/axios";

/** ------------------------------------------------------------- */
/** 내가 작성|찜한 프로젝트 게시물 목록 데이터 컴포넌트 */ //
/** ------------------------------------------------------------- */
// 사용되는 검색 항목 : 
/**[TODO]
 */

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
    setMyObjectData?: any;
}

/** ------------------------------------------------------------- */
/** 내가 작성한 프로젝트 게시물 전체 데이터 */
/** ------------------------------------------------------------- */

export const getMyWriteObjectData = async ({params,setMyObjectData}:ProjectProps) => {
    
    return await GET(`/api/mypage/my/project`)
    .then((res)=>{
        setMyObjectData(res.data);
    })
    .catch((err)=>{console.error(err)});
}

/** ------------------------------------------------------------- */
/** 내가 찜한 프로젝트 게시물 전체 데이터 */
/** ------------------------------------------------------------- */

export const getMyWishObjectData = async ({params,setMyObjectData}:ProjectProps) => {
    
    return await GET(`/api/mypage/my/project/wish`,{
        page:1,
        siae:999
    })
    .then((res)=>{
        setMyObjectData(res.data);
    })
    .catch((err)=>{console.error(err)});
}