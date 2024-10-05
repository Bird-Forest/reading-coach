import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { createSessionUser, getSessionUser } from "@/services/users";

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
        user = await getSessionUser(credentials);
        console.log("IN", user);
        if (user && user.message === "You are not registered") {
          user = await createSessionUser(credentials);
          console.log("UP", user);
          return user;
        }

        return user;
      },
    }),
  ],
  callbacks: {
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

// import { JWT } from 'next-auth/jwt';

// interface IUser {
//   id: string;
//   name: string;
//   email: string;
//   image: string;
// }

// async function signIn(user: IUser, account: Account, profile: Profile): Promise<boolean> {
//   await dbConnect();

//   const existingUser = await User.findOne({ googleId: profile.id });
//   if (!existingUser) {
//     const newUser = new User({
//       googleId: profile.id,
//       name: profile.name,
//       email: profile.email,
//     });
//     await newUser.save();
//   }

//   return true;
// }

// async function session(session: Session, user: JWT): Promise<Session> {
//   session.user.id = user.id;
//   return session;
// }

// callbacks: {
//   async session({ session }) {
//     // Добавьте индекс пользователя в объект сессии
//     session.user._id = userId;
//     session.user.name = userName;
//     // session.user.index = token.index;
//     console.log("SES", session);
//     return session;
//   },
//   async jwt({ user }) {
//     if (user) {
//       id = user._id;
//       console.log(id);
//       // token.index = user.index;
//     }
//     console.log("TOKEN", user);
//     return token;
//   },
// },
