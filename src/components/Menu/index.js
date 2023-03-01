import React, { useContext, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import Input from '../Input'

const Menu = () => {
  const { cart } = useContext(CartContext)

  const navigate = useNavigate()

  const [text, setText] = useState('')

  const handleChange = (e) => setText(e.target.value)

  return (

    <header className="menu">
      <div className="menu-content">
        <h1>Sushi Lab </h1>

        <Input
          value={text}
          onChange={handleChange}
          placeholder="o que comer hoje ?"
        />

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
