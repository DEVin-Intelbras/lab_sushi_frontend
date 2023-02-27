import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from '../../services/api'

import Menu from "../../components/Menu";
import { priceFormat } from "../../utils/priceFormat";

const Home = () => {
  const [products, setProducts] = useState([]);
  
  const navigate = useNavigate()

  useEffect(() => {
    api.get('/products')
      .then((response) => {
        setProducts(response.data.map((item) => {
          return {
            ...item,
            priceFormatted: priceFormat(item.price)
          }
        }))
      })
      .catch(() => { })
  }, [])

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
                <span>{(product.priceFormatted)}</span>
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
