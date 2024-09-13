"use server";

import { initializeUserModel, User } from "@/models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const secretKey = process.env.SEKRET_KEY;

export async function registerUser(values) {
  // console.log("registerUser", values);
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
    // const data = JSON.parse(JSON.stringify(newUser));
    const res = await User.findOne({ email: values.email }).exec();
    // console.log("RES", res);
    const payload = {
      id: res._id,
      username: res.name,
    };
    const token = jwt.sign(payload, secretKey, { expiresIn: "23h" });
    await User.findByIdAndUpdate(res._id, { token });

    return {
      token,
      message: "Success",
    };
  } catch (e) {
    console.log("Action", e);
    return {
      message: "No access",
    };
  }
}

export async function loginUser(values) {
  try {
    await initializeUserModel();
    const user = await User.findOne({ email: values.email }).exec();

    if (!user) {
      return {
        message: "You are not registered",
      };
    }
    let pwd = values.pwd;
    console.log(pwd);
    const pwdCompare = bcrypt.compare(pwd, user.pwd);
    if (!pwdCompare) {
      throw new Error("409");
    }

    const payload = {
      id: res._id,
      username: res.name,
    };
    const token = jwt.sign(payload, secretKey, { expiresIn: "23h" });
    await User.findByIdAndUpdate(res._id, { token });

    return {
      token,
      message: "Success",
    };
    // const data = JSON.parse(JSON.stringify(user));
  } catch (e) {
    console.log("Action", e);
    return {
      message: "Email or password is wrong",
    };
  }
}

//  if (!user) {
//    // throw new Error("You are not registered");
//    return {
//      message: "You are not registered",
//    };
//  }
