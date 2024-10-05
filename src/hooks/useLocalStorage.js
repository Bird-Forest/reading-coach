"use client";

import jwt from "jsonwebtoken";
import { useState, useEffect } from "react";

export default function useLocalStorage(key) {
  const [tokenData, setTokenData] = useState({
    id: "",
    username: "",
    iat: "",
    exp: "",
  });
  useEffect(() => {
    const token = window.localStorage.getItem(key);
    if (token) {
      const decodeToken = jwt.decode(token);

      if (decodeToken) {
        const { id, username, iat, exp } = decodeToken;
        setTokenData({ id, username, iat, exp });
      }
    }
  }, [key]);

  return tokenData;
}

// *** Для зберігання в формі
// useEffect(() => {
//   window.localStorage.setItem("authToken", token);
// }, [token]);

//  setToken(res.token);
// *** Для виклику в клієнтських компоентах
//  const { username } = useLocalStorage("authToken");
