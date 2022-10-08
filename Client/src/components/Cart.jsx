import { formatPriceToStr } from "../scripts/constants";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
function Cart({ cart: cartItems, removeItem, setCart }) {
  function getTotalPrice() {
    const INITIAL_VALUE = { quantity: 0, price: 0, sellingPrice: 0 };

    console.log("__cartItems__", cartItems);

    const totalPrice = cartItems.reduce((prev, curr) => {
      console.log("__prev-curr__", { prev, curr });
      return {
        price:
          (prev.quantity || 1) * prev.sellingPrice +
          (curr.quantity || 1) * curr.sellingPrice,
        quantity: 1,
      };
    }, INITIAL_VALUE);

    console.log("__totalPrice__", totalPrice);

    return totalPrice.price;
  }
  return (
    <div>
      <div className="your-cart__container">
        <span className="your-cart">Your Cart</span>
      </div>

      {cartItems && Array.isArray(cartItems) && cartItems.length > 0 && (
        <>
          {cartItems.map((useCartItem) => (
            <CartItem
              discount={useCartItem.discount}
              id={useCartItem.id}
              imgSrc={useCartItem.src}
              key={useCartItem.id}
              name={useCartItem.name}
              price={useCartItem.price}
              removeItem={removeItem}
              sellingPrice={useCartItem.sellingPrice}
              setCart={setCart}
              size={useCartItem.size}
              text={useCartItem}
            />
          ))}

          <div className="total-price__container">
            <span className="total-price__cta">Total Price</span>
            <span className="total-price">
              {formatPriceToStr(getTotalPrice())}
            </span>
          </div>
          <div style={{ textAlign: "center", padding: "10px" }}>
            <button
              type="submit"
              style={{
                fontWeight: "bold",
                letterSpacing: "3",
                padding: "10px",
                border: "none",
                backgroundColor: "black",
                color: "white",
              }}
            >
              <p><Link
                to="/Checkout"
                style={{ color: "white", textDecoration: "none" }}
              >
                Checkout
              </Link></p>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
export default Cart;
