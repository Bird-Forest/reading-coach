"use server";

import { initializeUserModel, User } from "@/models/user";
import { add } from "date-fns";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const secretKey = process.env.SEKRET_KEY;

export async function registerUser(values) {
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
    const result = add(new Date(), {
      days: 1,
      hours: 5,
    });
    const expirationDate = new Date(result);
    const expirationTime = Math.floor(expirationDate.getTime() / 1000);

    const token = jwt.sign(payload, secretKey, { expiresIn: expirationTime });
    await User.findByIdAndUpdate(res._id, { token });
    const userToken = JSON.parse(JSON.stringify(token));
    const id = res._id;
    const userId = JSON.parse(JSON.stringify(id));

    return {
      id: userId,
      token: userToken,
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

    const pwdCompare = await bcrypt.compare(pwd, user.pwd);

    if (!pwdCompare) {
      throw new Error("409");
    }

    const payload = {
      id: user._id,
      username: user.name,
    };
    const result = add(new Date(), {
      days: 1,
      hours: 5,
    });
    const expirationDate = new Date(result);
    // const expirationTime = Math.floor(expirationDate.getTime() / 1000);
    const expirationTime = Math.floor(expirationDate.getTime());

    const token = jwt.sign(payload, secretKey, { expiresIn: expirationTime });
    await User.findByIdAndUpdate(user._id, { token });
    const id = user._id;
    const userToken = JSON.parse(JSON.stringify(token));
    const userId = JSON.parse(JSON.stringify(id));

    return {
      id: userId,
      token: userToken,
      message: "Success",
    };
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
