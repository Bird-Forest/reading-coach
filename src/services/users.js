"use server";

import { initializeUserModel, User } from "@/models/user";
import { add } from "date-fns";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const secretKey = process.env.SEKRET_KEY;

export async function createSessionUser(values) {
  try {
    await initializeUserModel();
    const user = await User.findOne({ email: values.email }).exec();

    if (user) {
      return user;
    } else {
      const saltRounds = 10;
      const salt = bcrypt.genSaltSync(saltRounds);
      const hash = bcrypt.hashSync(values.pwd, salt);

      const newUser = await User.create({
        name: values.name,
        email: values.email,
        pwd: hash,
      });
      const id = newUser._id;
      const name = newUser.name;
      const userId = JSON.parse(JSON.stringify(id));
      const userName = JSON.parse(JSON.stringify(name));

      return {
        id: userId,
        name: userName,
      };
    }
  } catch (e) {
    console.log("Action", e);
    return {
      message: e.message,
    };
  }
}

export async function getSessionGoogle(profile) {
  try {
    await initializeUserModel();

    let user = await User.findOne({ email: profile.email });
    if (!user) {
      user = await User.create({
        name: profile.name,
        email: profile.email,
      });
    }
    const id = user._id;
    const name = user.name;

    const userId = JSON.parse(JSON.stringify(id));
    const userName = JSON.parse(JSON.stringify(name));

    return {
      id: userId,
      name: userName,
    };
  } catch (e) {
    console.log("Action", e);
    return {
      message: e.message,
    };
  }
}

export async function getSessionUser(values) {
  try {
    await initializeUserModel();
    const user = await User.findOne({ email: values.email }).exec();

    if (!user) {
      // throw new Error("404");
      return { name: "404" };
    }
    let pwd = values.pwd;
    const pwdCompare = await bcrypt.compare(pwd, user.pwd);

    if (!pwdCompare) {
      // throw new Error("401");
      return { name: "401" };
    }

    const id = user._id;
    const name = user.name;

    const userId = JSON.parse(JSON.stringify(id));
    const userName = JSON.parse(JSON.stringify(name));

    return {
      id: userId,
      name: userName,
    };
  } catch (e) {
    console.log("Action", e);
    // return error;
  }
}

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
    const res = await User.findOne({ email: values.email }).exec();
    const payload = {
      id: res._id,
      username: res.name,
    };

    const token = jwt.sign(payload, secretKey, { expiresIn: "24h" });
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
