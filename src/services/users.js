"use server";

import { initializeUserModel, User } from "@/models/user";
import bcrypt from "bcrypt";

export async function registerUser(values) {
  console.log("registerUser", values);
  try {
    await initializeUserModel();
    const user = await User.findOne({ email: values.email }).exec();

    if (user) {
      return {
        message: "You are already registered",
      };
    }
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(values.pwd, salt);

    const newUser = await User.create({
      name: values.name,
      email: values.email,
      pwd: hash,
    });
    return {
      message: "Success",
    };
  } catch (e) {
    console.log("Action", e);
    if (e.code === 11000) {
      return {
        message: "Email already exists",
      };
    }
    return {
      message: "No access",
    };
  }
}

export async function loginUser() {
  try {
    await initializeUserModel();
    const user = await User.findOne({ email }).exec();

    if (!user) {
      return {
        message: "You are not registered",
      };
    }

    const pwdCompare = bcrypt.compare(pwd, user.pwd);
    if (!pwdCompare) {
      return {
        message: "Email or password is wrong",
      };
    }
    const data = JSON.parse(JSON.stringify(user));
    // console.log("Action", data);
    return data;
  } catch (e) {
    console.log("Action", e);
    return {
      message: "No access",
    };
  }
}

//  if (!user) {
//    // throw new Error("You are not registered");
//    return {
//      message: "You are not registered",
//    };
//  }
