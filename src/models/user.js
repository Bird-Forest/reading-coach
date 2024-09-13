import mongoose from "mongoose";
import { connectDB } from "@/lib/mongodb";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    pwd: { type: String },
    token: {
      type: String,
      default: "",
    },
  },
  { versionKey: false, timestamps: true }
);

let User;

const initializeUserModel = async () => {
  await connectDB();
  // User = mongoose.model("User", userSchema);
  User = mongoose.models.User || mongoose.model("User", userSchema);
};

export { initializeUserModel, User };

// import mongoose from "mongoose";
// import { connectDB } from "@/lib/mongodb";

// const userSchema = new mongoose.Schema(
//   {
//     googleEmail: String,
//     name: String,
//     email: { type: String, required: true, unique: true },
//     pwd: String,
//     confirmPwd: String,
//   },
//   { versionKey: false, timestamps: true }
// );

// let User;

// const initializeModel = async () => {
//   await connectDB();
//   User = mongoose.models.User || mongoose.model("User", userSchema);
// };

// initializeModel();

// export { User };

// import { uri } from "@/lib/mongodb";
// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema(
//   {
//     googleEmail: String,
//     name: String,
//     email: { type: String, required: true, unique: true },
//     pwd: String,
//     confirmPwd: String,
//   },
//   { versionKey: false, timestamps: true }
// );

// const connection = mongoose.createConnection(uri);
// export const User = connection.model("User", userSchema);

// const userSchema = new mongoose.Schema<IUser>(
//   {
//     googleEmail: { type: String, unique: true },
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true, },
//     pwd: { type: String, },
//     confirmPwd: { type: String, },
//   },
//   { versionKey: false, timestamps: true }
// );

// const connection = mongoose.createConnection(uri);
// export const User = connection.model("User", userSchema);

// import { uri } from "@/lib/mongodb";
// import { IUser } from "@/types/user";
// import mongoose, { Schema, Model, Connection } from "mongoose";

// // Создаем схему пользователя
// const userSchema: Schema<IUser> = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true, },
//     pwd: { type: String, required: true },
//   },
//   { versionKey: false, timestamps: true }
// );

// // Создаем подключение
// const connection: Connection = mongoose.createConnection(uri);

// // Создаем модель пользователя
// export const User: Model<IUser> = connection.model<IUser>("User", userSchema);
