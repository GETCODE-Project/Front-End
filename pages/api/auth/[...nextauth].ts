// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import CredentialsProvider from 'next-auth/providers/credentials';

// export const authOptions = {
//     providers: [
//         GoogleProvider({
//             clientId: process.env.GOOGLE_CLIENT_ID || "",
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET ||"",
//             allowDangerousEmailAccountLinking: true,
//         }),
//     ]
// }
// export default NextAuth(authOptions);

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from 'next-auth/providers/credentials';
import { JWT } from 'next-auth/jwt';
import { AuthOptions } from "next-auth";

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SEC || "",
            allowDangerousEmailAccountLinking: true,
        }),
    ],
    callbacks: {
        async session({ session, token}) {
            if (token) {
                session.user = {
                    name: token.name ?? '',
                    email: token.email ?? '',
                    image: token.picture ?? '',
                };
            }
            return session;
        }
    }
})