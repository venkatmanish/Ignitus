import React from "react";
import { useState, useEffect } from "react";
import { Data } from "../data/Data";

const Main = () => {
  const [data, setData] = useState({});
  const [selectionItems, setSelectionItems] = useState([]);

  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem("data"));
    if (storageData !== {} && storageData !== null) {
      setData(storageData);
    } else {
      localStorage.setItem("data", JSON.stringify(Data));
      setData(Data);
    }
  }, []);

  const addToCart = (key) => {
    let item = data[key];
    let temp = data;
    let cartItems = JSON.parse(localStorage.getItem("cart"));
    if (cartItems === null) cartItems = [];
    cartItems.push(item);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    delete temp[key];
    setData({ ...temp });
    localStorage.setItem("data", JSON.stringify(temp));
    setSelectionItems([...selectionItems, item]);
  };

  return (
    <div className="mt-3">
      {data !== {} && data !== null ? (
        <div className="row row-cols-1 row-cols-md-3 g-4 mx-auto">
          {Object.keys(data).map((key, idx) => (
            <div className="col" key={idx}>
              <div className="card">
                <img
                  className="mx-auto"
                  src={data[key]["url"]}
                  style={{ width: "250px", height: "250px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                  <span>
                    <p className="text-success">
                      <strong>${data[key]["price"]}</strong>
                    </p>
                    <button
                      className="btn btn-primary"
                      onClick={() => addToCart(key)}
                    >
                      Add to Cart
                    </button>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default Main;
