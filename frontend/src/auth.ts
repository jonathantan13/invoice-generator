import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const GITHUB_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

if (!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET) {
  throw new Error("Missing Google OAuth Credentials");
}

export const {
  handlers: { GET, POST },
  auth,
  signOut,
  signIn,
} = NextAuth({
  providers: [
    GoogleProvider({
      clientId: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
    }),
  ],
});
