import React, { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";

const Menu = () => {

  const { cart } = useContext(CartContext)
  const navigate = useNavigate()

  return (

    <header className="menu">
      <div className="menu-content">
        <h1>Sushi Lab </h1>

        <input placeholder="O que vc procura ? " />

        <ul>
          <li onClick={() => navigate('/cart')}>
            <FaCartPlus color="#fff" />
            Carrinho - {cart.length} items
          </li>
        </ul>
      </div>
    </header>

  );
};

export default Menu;
