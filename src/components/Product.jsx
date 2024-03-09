import { useState } from "react";

import product1 from "../assets/images/product/1.jpg";
import product2 from "../assets/images/product/2.jpg";
import product3 from "../assets/images/product/3.jpg";
import product4 from "../assets/images/product/4.jpg";

import thumbnail1 from "../assets/images/product-thumbnail/1.jpg";
import thumbnail2 from "../assets/images/product-thumbnail/2.jpg";
import thumbnail3 from "../assets/images/product-thumbnail/3.jpg";
import thumbnail4 from "../assets/images/product-thumbnail/4.jpg";

function Product() {
  const [product, setProduct] = useState(product1);

  return (
    <>
      <button type="button">
        <img src={product} alt="Product" />
      </button>

      <div>
        <ul>
          <li>
            <button type="button" onClick={() => setProduct(product1)}>
              <img src={thumbnail1} alt="Product thumbnail 1" />
            </button>
          </li>
          <li>
            <button type="button" onClick={() => setProduct(product2)}>
              <img src={thumbnail2} alt="Product thumbnail 2" />
            </button>
          </li>
          <li>
            <button type="button" onClick={() => setProduct(product3)}>
              <img src={thumbnail3} alt="Product thumbnail 3" />
            </button>
          </li>
          <li>
            <button type="button" onClick={() => setProduct(product4)}>
              <img src={thumbnail4} alt="Product thumbnail 4" />
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Product;
