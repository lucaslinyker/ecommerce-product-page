import "../styles/Header.css";

import logo from "../assets/images/logo.svg";
import iconCart from "../assets/images/icons/cart.svg";
import avatar from "../assets/images/image-avatar.png";

function Header() {
  return (
    <>
      <header className="header">
        <a href="./" className="logo-link">
          <img src={logo} alt="Snearkers logo" className="logo-img" />
        </a>

        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#" className="nav-link">Collections</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Men</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Women</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Contact</a>
            </li>
          </ul>
        </nav>

        <a href="#" className="cart-link">
          <img src={iconCart} alt="Icon of a shopping-cart" className="cart-icon" />
          <span className="cart-count">3</span>
        </a>
        <a href="#" className="avatar-link">
          <img src={avatar} alt="Avatar of men" className="avatar-img" />
        </a>
      </header>
    </>
  );
}

export default Header;
