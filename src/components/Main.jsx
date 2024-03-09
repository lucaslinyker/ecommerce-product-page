import Product from "./Product";

import minus from "../assets/images/icons/minus.svg";
import plus from "../assets/images/icons/plus.svg";
import cart from "../assets/images/icons/cart.svg";

function Main() {
  return (
    <main>
      <Product />

      <h2>Sneaker Company</h2>

      <h1>Fall Limited Edition Sneakers</h1>

      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>

      <div>
        <strong>$125.00</strong>
        <span>50%</span>
      </div>
      <span>$250.00</span>

      <div>
        <div>
          <button type="button">
            <img src={minus} alt="Icon minus" />
          </button>
          <span>0</span>
          <button type="button">
            <img src={plus} alt="Icon plus" />
          </button>
        </div>

        <button type="button">
          <img src={cart} alt="Icon cart" />
          Add to cart
        </button>
      </div>
    </main>
  );
}

export default Main;
