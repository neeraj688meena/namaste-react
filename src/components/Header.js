import { useEffect, useState } from "react";
import { LOGO_IMG } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img src={LOGO_IMG} />
        </Link>
      </div>
      <div className="nav-items">
        <div>Online Status: {onlineStatus ? "✅" : "🔴"}</div>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/about">About us</Link>
        </div>
        <div>
          <Link to="/contact">Contact us</Link>
        </div>
        <div>
          <Link to="/grocery">Grocery</Link>
        </div>
        <div>Cart</div>
        <button
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
