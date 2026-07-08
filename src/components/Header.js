import { useContext, useEffect, useState } from "react";
import { LOGO_IMG } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const userData = useContext(UserContext);

  const { items } = useSelector((store) => store.cart);
  console.log("userData--", items);

  return (
    <div className="flex justify-between items-center px-3 py-3 border-b-1 border-[#e5e5e5] shadow-md">
      <div className="logo-container">
        <Link to="/">
          <img className="w-20" src={LOGO_IMG} />
        </Link>
      </div>
      <div className="flex gap-5 items-center">
        <div>Online Status: {onlineStatus ? "✅" : "🔴"}</div>
        <div className="rounded-md text-white px-2 py-1 bg-[#fc8019]">
          <Link to="/">Home</Link>
        </div>
        <div className="rounded-md text-white px-2 py-1 bg-[#fc8019]">
          <Link to="/about">About us</Link>
        </div>
        <div className="rounded-md text-white px-2 py-1 bg-[#fc8019]">
          <Link to="/contact">Contact us</Link>
        </div>
        <div className="rounded-md text-white px-2 py-1 bg-[#fc8019]">
          <Link to="/grocery">Grocery</Link>
        </div>
        <div className="font-bold px-2 py-1 rounded-md border-2 border-[#fc8019]">
          Cart - ({items.length} items)
        </div>
        <div className="font-bold">{userData?.name}</div>
        <button
          className="rounded-md text-white px-2 py-1 bg-[#fc8019]"
          onClick={() => {
            loginBtn == "Login" ? setLoginBtn("Logout") : setLoginBtn("Login");
          }}
        >
          {loginBtn}
        </button>
      </div>
    </div>
  );
};

export default Header;
