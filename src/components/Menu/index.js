import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Menu = () => {

  const navigate = useNavigate()

  return (

    <header className="menu">
      <div className="menu-content">
        <h1>Sushi Lab</h1>

          <input placeholder="O que vc procura ? " />

          <ul>
            <li onClick={() => navigate('/cart')}>
              <FaCartPlus color="#fff" />
              Carrinho
            </li>
          </ul>
      </div>
    </header>

  );
};

export default Menu;
