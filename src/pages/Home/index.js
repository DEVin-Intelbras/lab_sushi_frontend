import React, {useState } from "react";
import { useNavigate } from "react-router-dom";

import Menu from "../../components/Menu";

const Home = () => {
  const [products, setProducts] = useState([{
    "id": 1,
    "name": "Sushi de salmão",
    "description": "Salmão fresco, arroz temperado, nori e molho shoyu.",
    "price": 12.50,
    "category": "sushi",
    "image": "https://j6t2y8j5.rocketcdn.me/wp-content/uploads/2020/06/como-fazer-sushi-em-casa-origem-tipos-desenvolvidos-e-receitas.png"
  }]);
  const navigate = useNavigate()


  return (
    <div>
      <Menu />
      <div className="main-container">
        <div className="products-list">
          {products.map((product) => (
            <div data-testid="product-card" className="card" onClick={() => navigate('/details', { state: product })} key={product.id}  >
              <div className="card-content" datatest-id="card-product">
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <span>{product.priceFormatted}</span>
              </div>
              <img
                alt={product.name}
                src={product.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
