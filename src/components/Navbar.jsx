import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Home from "../pages/Home";
import { NavLink } from "react-router-dom";
import logo from "../pictures/logo.png";
import { useSelector } from "react-redux";
export default function () {
  const {cart}=useSelector(state=>(state));
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "#383838",
        width: "100%",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <NavLink to="/">
        <div>
          <img style={{ width: "80px" }} src={logo} alt="" />
        </div>
      </NavLink>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <NavLink to="/">
          <div
            style={{
              fontSize: "20px",
              margin: "20px",
              color: "white",
            }}
          >
            Home
          </div>
        </NavLink>
        <NavLink to="/cart">
          {cart.length > 0 ? (
            <div>
            <div style={{color:"white" ,position:"relative",left:"9px",textAlign:"center",backgroundColor:"green",borderRadius:"20px",top:"12px"}}>1</div>
            <FaShoppingCart color="white" size="20px" />
            </div>
            
          ) : (
            <FaShoppingCart color="white" size="20px" />
          )}
        </NavLink>
      </div>
    </div>
  );
}
