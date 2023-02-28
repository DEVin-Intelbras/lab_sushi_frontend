import React, { useContext, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useLocation } from "react-router-dom";


import Menu from "../../components/Menu";
import { CartContext } from "../../contexts/CartContext";

const Details = () => {
  const location = useLocation();

  const {cart, addProduct} = useContext(CartContext)

  const [observation, setObservation] = useState('');

  const [quantity, setQuantity] = useState(1);

  const handleIncrementQuantity = () => setQuantity(quantity + 1)

  const handleIDecrementQuantity = () => setQuantity(quantity - 1)

  const handleAddProductInCart = () => {
    addProduct({
      product: location.state,
      quantity: quantity,
      observation: observation
    })
  }

  const handleChangeTextarea = (event) => {
    setObservation(event.target.value)
  }

  return (
    <div>
      <Menu />
      <div className="main-container">
        <div className="details-container">
          <div className="details-product">
            <div className="photo-content">
              <img src={location.state.image} alt="logo" />
            </div>
            <div className="details-content">
              <h1>
                {location.state.name}
              </h1>
              <span> {location.state.price}</span>
              <p> {location.state.description}</p>
            </div>
          </div>

          <div className="observation-section">
            Observações
          </div>

          <textarea
            placeholder="Digite uma observação"
            rows={5}
            value={observation}
            onChange={handleChangeTextarea}
            >
          </textarea>

          <div className="controls">
            <button
              onClick={handleIDecrementQuantity}
              disabled={quantity === 1}
            >
              <FaMinus />
            </button>
            {quantity}

            <button
              onClick={handleIncrementQuantity}>
              <FaPlus />
            </button>

            <button onClick={handleAddProductInCart}>Adicionar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
