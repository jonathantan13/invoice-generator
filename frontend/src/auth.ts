import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import PGAdapter from "@auth/pg-adapter";
import { Pool } from "pg";

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET) {
  throw new Error("Missing Google OAuth Credentials");
}

const pool = new Pool(); // TODO: Deal with this after setting up Heroku

export const {
  handlers: { GET, POST },
  auth,
  signOut,
  signIn,
} = NextAuth({
  // adapter: PGAdapter(pool),
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
  ],
  session: {
    // strategy: "database",
    maxAge: 60 * 15,
  },
});
