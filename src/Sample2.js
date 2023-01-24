import React from "react";
import { useGlobalContext } from "./Example";
export function Sample2() {
  const name = useGlobalContext();

  return <div>Hi, {name}</div>;
}

export default Sample2;
