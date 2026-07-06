import { useEffect, useState } from "react";

const User = (props) => {
  useEffect(() => {
    console.log("user useeffect render", props.name);
  }, []);

  console.log("user render", props.name);
  return (
    <div className="user-card">
      <h1>Name: {props.name}</h1>
      <h2>Location: Aklera</h2>
    </div>
  );
};

export default User;
