import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import jwt from "jsonwebtoken";
import { login } from "../user/route";

export const authOptions = {

    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "jsmith" },
                password: { label: "Password", type: "password", placeholder: "*****" },
            },
            async authorize(credentials, req) {
                try {
                    const res = await login(credentials)
                    console.log(res)
                    const user = res;

                    if (user.status === "Activo") {
                        const verify = jwt.verify(user.token, process.env.TOKEN_SECRET)
                        if(verify){
                            return user;
                        }else{
                            return null;
                        }
                    }

                    return null;
                } catch (error) {
                    console.log('Error:', error);
                }
            },
        })
    ],
    session: {
        strategy: 'jwt',
        maxAge: 7 * 24 * 60 * 60,
        updateAge: 0,
    },
    secret: process.env.AUTH_SECRET,
    pages: {
        signIn: "/auth/login",
        signOut: "/auth/login"
    },
    callbacks: {
        // Define callbacks for JWT and session management
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id_user;
                token.name = user.name_user;
                token.sub = user.id_role;
                token.email = user.email_user;
            }

            return token;
        },
        async session({ session, token }) {
            session.user.id = token.id;
            session.user.name = token.name;
            session.user.email = token.email;

            return session;
        },
        async redirect({ url, baseUrl }) {
            // Allows relative callback URLs
            if (url.startsWith("/")) return `${baseUrl}${url}`
            // Allows callback URLs on the same origin
            else if (new URL(url).origin === baseUrl) return url
            return baseUrl
          }
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };