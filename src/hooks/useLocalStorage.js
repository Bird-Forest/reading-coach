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

// export default function useLocalStorage(key, defaultValue) {
//   const [state, setState] = useState(() => {
//     return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
//   });

//   useEffect(() => {
//     window.localStorage.setItem(key, JSON.stringify(state));
//   }, [key, state]);
//   console.log("HOOK", state);
//   return [state, setState];
// }

// import jwt from "jsonwebtoken";
// const decodeToken = jwt.decode(token)
// console.log(decodeToken)
// try {
//   const {id, username} = jwt.verify(token, secretKey)
// }catch(e){console.log(e.message);
// }
