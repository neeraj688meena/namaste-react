import { useEffect, useState } from "react";
import User from "./User";

const About = () => {
  const [count, setCount] = useState(0);
  // useEffect(() => {
  //   console.log("about useeffect render");
  // }, [count]);

  // console.log("about render");

  return (
    <div className="about">
      <h1>About us {count}</h1>
      <User name={"Neeraj"} />
      <User name={"lalit"} />
      <User name={"arati"} />
      <button onClick={() => setCount(count + 1)}>incrraser count</button>
    </div>
  );
};

export default About;
