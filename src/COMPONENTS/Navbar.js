import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import '../CSS/Navbar.css'
// import Logo from "./logo.svg";

const Navbar = () => {
  return (
    <div className="header">
      <div className="header__first">
        <img
          src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
          alt="flipkart logo"
        />
        <div className="header__first1">
          <span
            style={{
              fontSize: "11px",
              color: "white",
              fontStyle: "italic",
            }}
          >
            Explore
          </span>
          <span
            style={{
              color: "#f9e107",
              fontSize: "11px",
              fontStyle: "italic",
            }}
          >
            Plus
          </span>
          <span>
            <img
              width="10"
              src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
              alt=""
            />
          </span>
        </div>
      </div>
      <div className="header__second">
        <input placeholder="Search for products,brands and more" type="text" />
        <SearchIcon />
      </div>
      <div className="header__third">
        <button>Login</button>
      </div>
      <div className="header__sixth">
        <span>Become seller</span>

      </div>

      <div className="header__fourth">
        <span>More</span>

        <ExpandMoreIcon />
      </div>
      <div className="header__fifth">
        <ShoppingCartIcon />
        <p>Cart</p>
      </div>
    </div>
  );
};

export default Navbar;
