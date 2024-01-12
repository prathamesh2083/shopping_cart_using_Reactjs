import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../Redux/slices/CartSlice';
import "./cartCss.css"
import { toast } from 'react-toastify';
export default function CartItem({item}) {
    const dispatch=useDispatch(state=>state);
    function deleteitem(){
        
      toast.success("Item removed ");
        return dispatch(remove(item.id));
    }
  return (
    <div className="cartItem">
      <div className="cartItemImage">
        <img src={item.image}></img>
      </div>
      <div className="cartInfo">
        <h2>{item.title}</h2>
        <div>{item.description}</div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            marginTop: "30px",
          }}
        >
          <div style={{ color: "green" }}> <b>${item.price}</b> </div>
          <div
            onClick={deleteitem}
            style={{
              borderRadius: "50%",
              padding: "5px",
              textAlign: "center",
              backgroundColor: "orange",
              color: "black",
              height:"30px"
            }}
          >
            <MdDelete size="30px" />
          </div>
        </div>
      </div>
    </div>
  );
}
