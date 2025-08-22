import React from "react";

function Hello({ name }) {
  const displayName = name && name.trim().length > 0 ? name : "there";
  return <h2>Hello, {displayName}!</h2>;
}
export default Hello;
