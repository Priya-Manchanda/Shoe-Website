import React from "react";
function ShopItem({
  id: productId,
  imgSrc,
  removeItem,
  prices,
  setCart,
  Name,
}) {
  const [count, setCount] = React.useState(1);

  function increment() {
    setCount(count + 1);
    setCart((prev) => {
      const currentProduct = prev.find((usePrev) => usePrev.id === productId);
      const currentProductIdx = prev.findIndex(
        (usePrev) => usePrev.id === currentProduct.id
      );
      if (currentProduct && currentProductIdx > -1) {
        const tempPrev = [...prev];
        tempPrev[currentProductIdx].quantity =
          tempPrev[currentProductIdx].quantity + 1;
        return tempPrev;
      }
      return prev;
    });
  }

  function decrement() {
    if (count > 1) {
      setCount(count - 1);
      setCart((prev) => {
        const currentProduct = prev.find((usePrev) => usePrev.id === productId);
        const currentProductIdx = prev.findIndex(
          (usePrev) => usePrev.id === currentProduct.id
        );
        if (currentProduct && currentProductIdx > -1) {
          const tempPrev = [...prev];
          if (tempPrev[currentProductIdx].quantity > 1) {
            tempPrev[currentProductIdx].quantity =
              tempPrev[currentProductIdx].quantity - 1;
            return tempPrev;
          }
        }
        return prev;
      });
    }
  }

  function remove() {
    removeItem(productId);
  }

  return (
    <div className="row shop-item__container__row">
      <div className="col-12 shop-item__container">
        <div className="shop-item__cart__container">
          <img alt="..." className="shop-item__cart__photo" src={imgSrc} />
          <p className="names">{Name}</p>
          <div
            className="btn-group counter-btn-group"
            role="group"
            aria-label="Basic outlined example"
          >
            <button
              type="button"
              className="btn button1 btn-outline-dark"
              onClick={decrement}
            >
              -
            </button>

            <button type="button" className="btn button1 btn-outline-dark">
              {count}
            </button>

            <button
              type="button"
              className="btn button1 btn-outline-dark"
              onClick={increment}
            >
              +
            </button>
          </div>

          <button
            type="button"
            className="button1 btn-dark btn remove-button"
            onClick={remove}
          >
            Remove
          </button>
        </div>

        <div className="price__container">₹{count * prices}.00</div>
      </div>
    </div>
  );
}
export default ShopItem;
// 1.Authentication
// 2 SignIn, SignUp,
// 7. Automatic SignIn

// Frontend
// Size display in Cart what is selected by the user
// On Cliking on button display Your produt is added in cart
// Clicking on navbar links move to that section using routing