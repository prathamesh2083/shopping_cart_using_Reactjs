import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
export default function Home() {
  const [loading, setloading] = useState(false);
  const [items, setitems] = useState([]);
  const API_URL = "https://fakestoreapi.com/products";
  async function fetchdata() {
    setloading(true);
    try {
      const result = await fetch(API_URL);
      const data = await result.json();
      setitems(data);
    } catch (error) {
      console.log("error in fetching data");
      setitems([]);
    }

    setloading(false);
  }
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div style={{marginTop:"40px"}}>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          {items.size === 0 ? (
            <div>No items found</div>
          ) : (
            <div style={{ display: "flex", width: "90%" ,flexWrap:"wrap" ,justifyContent:"center",margin:"auto"}}>
              {items.map((item) => (
                <Product key={item.id} item={item}></Product>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
