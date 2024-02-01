import { GET } from "@/pages/api/axios";

/** GET 파라미터값(검색에사용), 데이터를 저장할 status */
//[TODO]memberId 필요하지않나?
interface FindStudyProps{
    params: {
        pageNumber: number; //필수값
        keyword: string;
        region: string;
        recruitment: boolean;
        online: boolean;
        year: number;
        subjects: string[];
        criteria: string;
    }
    setObjectData?: any;
}

/** 스터디모집 전체 게시물 데이터 */
export const getObjectData = async({params,setObjectData}:FindStudyProps) => {

    const subjectQueryString = () => {
        let subject = '';
        if(params.subjects.length > 0){
            subject = params.subjects?.map((stack) => `techStack=${encodeURIComponent(stack)}`).join('&');
        }
        return subject;
    }

    return await GET(`/api/search/studies?page=${params.pageNumber}&keyword=${params.keyword}&region=${params.region}&recruitment=${params.recruitment}&online=${params.online}&year=${params.year}&subject=${subjectQueryString}&criteria=${params.criteria}`,{})
    .then((res)=>{
        setObjectData(res);
    })
    .catch((err)=>{console.error(err)});
}
