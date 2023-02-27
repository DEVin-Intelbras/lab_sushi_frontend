import React, { useState } from "react";
import { useLocation } from "react-router-dom";


import Menu from "../../components/Menu";

const Details = () => {
  const location = useLocation();

  const [observation, setObservation] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleIncrementQuantity = () => setQuantity(quantity + 1)

  const handleIDecrementQuantity = () => setQuantity(quantity - 1)

  const handleAddProductInCart = () => {

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
            rows={5}>
          </textarea>

          <div className="controls">
            <button
              onClick={handleIDecrementQuantity}
              disabled={quantity === 1}
            >
              -
            </button>
            {quantity}

            <button
              onClick={handleIncrementQuantity}>
              +
            </button>

            <button onClick={handleAddProductInCart}>Adicionar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
