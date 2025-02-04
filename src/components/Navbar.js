import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom"; 
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"; // Импорт иконки корзины
import logo from "../assets/Logo.png";
import "../styles/Navbar.css";

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Navbar.Brand href="#">
        <img src={logo} alt="Bergena Logo" className="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto nav-middle">
          <Nav.Link href="/">Startseite</Nav.Link>
          <Nav.Link as={Link} to="/about">Über uns</Nav.Link> 
          <Nav.Link as={Link} to="/catalog">Katalog</Nav.Link>
        </Nav>
        <Nav className="nav-right">
          <Nav.Link href="tel:+1234567890" className="phone-number">+49 (512) 242 16 73</Nav.Link>
          <Nav.Link as={Link} to="/cart" className="cart-icon"> {/* Ссылка на корзину */}
            <FontAwesomeIcon icon={faShoppingCart} /> {/* Иконка корзины */}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
