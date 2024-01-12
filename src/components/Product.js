import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../Redux/slices/CartSlice";
import { toast } from "react-toastify";
import "./style.css";
export default function Product({ item }) {
  const [readMoreTitle, setreadMoreTitle] = useState(true);
  const [readMoredesc, setreadMoredesc] = useState(true);
  const desc = item.description.slice(0, 100) + "...";
  const tit = item.title.slice(0, 15) + "...";
  
  const {cart}=useSelector(state=>(state));
  const dispatch=useDispatch();
  function addToCart(){
    dispatch(add(item));
    toast.success("Item added to cart");
  }
  return (
    <div
    className="product"
      style={{
        padding: "10px",
        width: "250px",
        minWidth: "200px",
        display: "flex",
        flexDirection: "column",
        margin: "12px",
        marginBottom:"20px",
        alignItems: "center",
        
      }}
    >
      <div style={{ margin: "5px" ,fontWeight:"bold",fontSize:"19px"}}>
        {readMoreTitle ? (
          <div>
            {tit}{" "}
            <span
              className="read-more"
              onClick={() => {
                setreadMoreTitle(!readMoreTitle);
              }}
              value="tit"
            >
              more
            </span>
          </div>
        ) : (
          <div>
            {item.title}...
            <span
              className="read-more"
              onClick={() => {
                setreadMoreTitle(!readMoreTitle);
              }}
              value="tit"
            >
              less
            </span>
          </div>
        )}
      </div>

      <div style={{ margin: "5px" }}>
        {readMoredesc ? (
          <div>
            {desc}{" "}
            <span
              className="read-more"
              onClick={() => {
                setreadMoredesc(!readMoredesc);
              }}
            >
              more
            </span>
          </div>
        ) : (
          <div>
            {item.description}...
            <span
              className="read-more"
              onClick={() => {
                setreadMoredesc(!readMoredesc);
              }}
            >
              less
            </span>
          </div>
        )}
      </div>
      <div style={{ margin: "5px" }}>
        <img src={item.image} style={{ width: "150px", height: "200px" }}></img>
      </div>
      <div
        style={{
          display: "flex",
          width: "90%",
          margin: "5px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ margin: "5px", color: "green" }}>${item.price}</div>
        <div>
          {true ? (
            <p
              style={{
                width:"140px"
              }}
            >
            {
              cart.some((itm)=> itm.id===item.id) ?(<div></div>):(<button
                
                className="add-btn"
                onClick={addToCart}
              >
                  ADD TO CART{" "}
              </button>)
            }
              
            </p>
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </div>
  );
}
