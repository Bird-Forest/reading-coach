// import { useEffect, useState } from "react";

// const MyComponent = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     window.addEventListener("resize", handleResize);
//     handleResize();

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return <div>{isMobile ? <MobileComponent /> : <DesktopComponent />}</div>;
// };

// // ***************

// import { useRouter } from "next/router";

// const MyComponent = () => {
//   const router = useRouter();
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     window.addEventListener("resize", handleResize);
//     handleResize();

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleClick = () => {
//     if (isMobile) {
//       router.push("/mobile-page");
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Go to Mobile Page</button>
//       {!isMobile && <DesktopComponent />}
//     </div>
//   );
// };

// const [state, action] = useFormState(async (formData) => {
//     const result = await signIn("credentials", {
//       redirect: false,
//       email: formData.get("email"),
//       pwd: formData.get("pwd"),
//     });

//     if (result?.error) {
//       return { errors: { general: result.error } };
//     }

//     return { message: "Успешный вход" };
//   }, undefined);

// import NextAuth from "next-auth";
// import Google from "next-auth/providers/google";
// import Credentials from "next-auth/providers/credentials";
// import { signInSchema, FormStateIn } from "./lib/zod";
// import { IUser } from "@/types/user";
// import { User } from "./models/user";

// export const { auth, handlers, signIn, signOut } = NextAuth({
//   secret: process.env.AUTH_SECRET,
//   providers: [
//     Google({
//       clientId: process.env.AUTH_GOOGLE_CLIENT_ID as string,
//       clientSecret: process.env.AUTH_GOOGLE_SECRET!,
//     }),
//     Credentials({
//       credentials: {
//         email: { label: "Email", type: "email" },
//         pwd: { label: "Password", type: "password" },
//       },
//       authorize: async (credentials) => {
//         if (!credentials?.email || !credentials?.pwd) {
//           throw new Error("Email and password are required");
//         }

//         // Валидация данных
//         const validationResult = signInSchema.safeParse({
//           email: credentials.email,
//           pwd: credentials.pwd,
//         });

//         if (!validationResult.success) {
//           throw new Error("Invalid email or password");
//         }

//         // Поиск пользователя в базе данных
//         const user = await User.findOne({
//           email: credentials.email,
//           password: credentials.pwd,
//         });

//         if (!user) {
//           throw new Error("Invalid email or password");
//         }

//         return user;
//       },
//     }),
//   ],
// });

// import { IUser } from "@/types/user";

// export async function signIn(credentials: {
//   email: string;
//   pwd: string;
// }): Promise<IUser | null> {
//   // Валидация данных
//   const validationResult = signInSchema.safeParse(credentials);

//   if (!validationResult.success) {
//     throw new Error("Invalid email or password");
//   }

//   // Поиск пользователя в базе данных
//   const user = await User.findOne({
//     email: credentials.email,
//     password: credentials.pwd,
//   });

//   if (!user) {
//     throw new Error("Invalid email or password");
//   }

//   return user;
// }
