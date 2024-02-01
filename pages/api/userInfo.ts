import { NextApiRequest, NextApiResponse } from "next"
import { getSession } from "next-auth/react";
import { GET } from "./axios";

const UserInfo = async (req: NextApiRequest, res: NextApiResponse)=>{
    try{
        const session = await getSession({req});

        if(session && session.user?.accessToken){
            const token = session.user.accessToken as string;

            const response = await GET('/api/',{
                headers: {
                    // Authorization: `Bearer ${token}`,
                    Authorization: localStorage.getItem(`Bearer ${token}`),
                    // Authorization: localStorage.getItem(`token`),
                    //로그인 됐을 때 AccessToken 로컬스토리지에 저장. 이건 전역이니까 
                },
            });

            const userInfo = response.data;

            res.status(200).json(userInfo);
        }
        else{
            res.status(401).json({messege: 'UnAuthorized'});
        }
    }
    catch(err){
        console.error('에러 발생:',err);
        res.status(500).json({messege: 'Internal Server Error'})
    }
}
export default UserInfo;