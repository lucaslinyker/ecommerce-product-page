import "../styles/Header.css";

import logo from "../assets/images/logo.svg";
import iconCart from "../assets/images/icons/cart.svg";
import avatar from "../assets/images/image-avatar.png";

function Header() {
  return (
    <>
      <header>
        <a href="./">
          <img src={logo} alt="Snearkers logo" />
        </a>

        <nav>
          <ul>
            <li>
              <a href="#">Collections</a>
            </li>
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Women</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>

        <a href="#">
          <img src={iconCart} alt="Icon of a shopping-cart" />
          <span>3</span>
        </a>
        <a href="#">
          <img src={avatar} alt="Avatar of men" />
        </a>
      </header>
    </>
  );
}

export default Header;
