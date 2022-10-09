import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
function Checkout() {
  // const Navigate = useNavigate();
  const [data1, setData1] = useState({
    street: "",
    city: "",
    state: "",
    pincode: "",
  });
  const handleinput = ({ currentTarget: input }) => {
    setData1({ ...data1, [input.name]: input.value });
  };
  const Address = (e) => {
    e.preventDefault();
    const { street, city, state, pincode } = data1;
    if (street && city && state && pincode) {
      axios.post("http://localhost:7000/api/address/new", data1).then((res) => {
        alert("Details Saved");
        // Navigate("/Login");
      });
    } else {
      alert("invalid input");
    }
  };
  return (
    <>
      <h1 className="Login">Delivery Address</h1>
      <div>
        <form className="form">
          <input
            type="text"
            placeholder="Street Address"
            className="checkout"
            value={data1.street}
            name="street"
            onChange={handleinput}
          />
          <input
            type="text"
            placeholder="City"
            className="checkout"
            value={data1.city}
            name="city"
            onChange={handleinput}
          />
          <input
            type="text"
            placeholder="State"
            className="checkout"
            value={data1.state}
            name="state"
            onChange={handleinput}
          />
          <input
            type="number"
            placeholder="Pincode"
            className="checkout"
            value={data1.pincode}
            name="pincode"
            onChange={handleinput}
          />
          <div className="button_align1">
            <button className="Confirm_order" onClick={Address}>
              Confirm Your Order
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default Checkout;
