//React
import { useState } from "react";
//React Router
import { NavLink } from "react-router-dom";
//Components
import { HeaderBasket, CartDrawer } from "@components/eCommerce/index";
// Styles
import styles from "./styles.module.css";

const Header = () => {
  // Menu For Responsive
  const [menuOpen, setMenuOpen] = useState(false);
  // For Cart Drawing
  const [cartOpen, setCartOpen] = useState(false);

  // Menu Toggle
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Cart Toggle
  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <>
      <header className={styles.header}>
        <NavLink to="/" className={styles.logo}>
          Orderly
        </NavLink>
        <nav className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.activeLink : undefined
            }
            onClick={toggleMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive ? styles.activeLink : undefined
            }
            onClick={toggleMenu}
          >
            Shop
          </NavLink>
          <NavLink
            to="/brands"
            className={({ isActive }) =>
              isActive ? styles.activeLink : undefined
            }
            onClick={toggleMenu}
          >
            Brands
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? styles.activeLink : undefined
            }
            onClick={toggleMenu}
          >
            About
          </NavLink>
        </nav>
        <div>
          <HeaderBasket onClick={toggleCart} />
        </div>

        {/* Menu Toggle for Responsive */}
        <i className={`fas fa-bars ${styles.iconMenu}`} onClick={toggleMenu}>
          ☰
        </i>
      </header>

      {/* Cart Drawer */}
      <CartDrawer isOpen={cartOpen} onClose={toggleCart} />
    </>
  );
};

export default Header;
