import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
// import Credentials from "next-auth/providers/credentials";

export const { auth, handlers, signIn, signOut } = NextAuth({
  secret: process.env.AUTH_SECRET,
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_CLIENT_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    // Credentials({
    //   credentials: {
    //     email: {},
    //     pwd: {},
    //   },
    //   async authorize(credentials) {
    //     console.log(credentials);
    //   },
    // }),
  ],
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
