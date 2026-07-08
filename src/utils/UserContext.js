import { createContext } from "react";

const UserContext = createContext({
  name: "Neeraj Meena",
  age: 30,
});

export default UserContext;
