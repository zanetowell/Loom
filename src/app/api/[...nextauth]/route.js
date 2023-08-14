import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import connect from "@/utils/db"

const handler = NextAuth({
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
    ],
    pages: {
      error: "/login",
    },
  
  });
  
  export { handler as GET, handler as POST };