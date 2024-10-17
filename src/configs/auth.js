import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import {
  createSessionUser,
  getSessionGoogle,
  getSessionUser,
} from "@/services/users";

export const { auth, handlers, signIn, signOut } = NextAuth({
  secret: process.env.AUTH_SECRET,
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_CLIENT_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    Credentials({
      credentials: {
        name: {},
        email: {},
        pwd: {},
      },
      authorize: async (credentials) => {
        if (!credentials.email || !credentials.pwd) return null;
        let user = null;
        user = await createSessionUser(credentials);
        return user;
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === "google") {
        const userGoogle = await getSessionGoogle(profile);
        user.id = userGoogle.id;
        user.name = userGoogle.name;
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.name = token.name;
      return session;
    },
  },
});

// **** npm install @auth/mongodb-adapter mongodb ***
// import NextAuth from "next-auth";
// import { MongoDBAdapter } from "@auth/mongodb-adapter";
// import client from "./lib/db";

// export const { handlers, auth, signIn, signOut } = NextAuth({
//   adapter: MongoDBAdapter(client),
//   providers: [],
// });
// ********************************************************************
//  try {
//           let user = null
//           const { email, pwd } = await signInSchema.parseAsync(credentials)
//               const validatedFields = signInSchema.safeParse({
//               email: credentials.email,
//               wd: credentials.pwd,
//             })
//           if (!validatedFields.success) {
//                 return {
//             errors: validatedFields.error.flatten().fieldErrors,
//             }
//           }
//           user
//         } catch (e) {
//           console.log("Action", e);
//           return {
//             message: "No access",
//           };
//         }
