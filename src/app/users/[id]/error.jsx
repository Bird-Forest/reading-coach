"use client";

import ErrorPage from "@/components/helper/ErrorPage";
import React from "react";

export default function Error({ error, reset }) {
  return (
    <>
      <ErrorPage error={error} reset={reset} />
    </>
  );
}
