import React, { useEffect, useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom';
import Product from '../components/Product';
import CartItem from '../components/CartItem';

export default function Cart() {
  const {cart}=useSelector((state)=>state);
  const [totalAmount,setTotalAmount]=useState(0);

  useEffect(()=>{
    var amt=0;
    for (var i = 0; i < cart.length; i++) {
      amt+= cart[i].price;
    }
    setTotalAmount(amt);
  },[cart])
  return (
    <div style={{ width: "80%", margin: "auto" }}>
      {(cart.length > 0)  ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              minWidth: "400px",
              width: "60%",
             
              marginRight: "20px",
            }}
          >
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item}></CartItem>;
            })}
           
          </div>
          <div
            style={{
              minWidth: "300px",
              width: "30%",
              height: "500px",
              marginTop: "50px",
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              YOUR CART
              <h1 style={{color:"green"}}>SUMMARY</h1>
              Total items : {cart.length}
            </div>
            <div>
              Total amount :{totalAmount}
              <br></br>
              <button
                style={{
                  backgroundColor: "#018749",
                  color:"white",
                  fontSize:"20px",
                  fontWeight:"bold",
                  padding: "8px",
                  width: "80%",
                  margin: "10px",
                  borderRadius: "5px",
                }}
              >
                shop now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            margin: "auto",
            width: "200px",
            textAlign: "center",
            alignItems: "center",
            marginTop:"200px"
          }}
        >
          <h3>Your cart is empty!!</h3>
          <Link to="/">
            <button
              style={{
                backgroundColor: "#32de84",
                padding: "8px",
                width: "110px",
                margin: "0px",
                borderRadius: "5px",
              }}
            >
              shop now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
