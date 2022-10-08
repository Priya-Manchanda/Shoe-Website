import React from "react";
function Checkout() {
  return (
    <>
      <h3
        style={{
          fontFamily: "Caveat",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Delivery Address
      </h3>
      <div className="checkout">
        <div>
          <input
            type="text"
            placeholder="Street Address"
            className="checkout1"
          ></input>
        </div>
        <div>
          <input type="text" placeholder="City" className="checkout1"></input>
        </div>
        <div>
          <input type="text" placeholder="State" className="checkout1"></input>
        </div>
        <div>
          <input
            type="number"
            placeholder="Pin Code"
            className="checkout1"
          ></input>
        </div>
      </div>
    </>
  );
}
export default Checkout;
