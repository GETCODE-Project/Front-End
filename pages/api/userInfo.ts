import { NextApiRequest, NextApiResponse } from "next"
import { getSession } from "next-auth/react";
import { GET } from "./axios";

const UserInfo = async (req: NextApiRequest, res: NextApiResponse)=>{
    try{
        const session = await getSession({req});

        if(session){
            const token = session.user as string;

            const response = await GET('/api/',{
                headers: {
                    Authorization: `Bearer ${token}`,
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