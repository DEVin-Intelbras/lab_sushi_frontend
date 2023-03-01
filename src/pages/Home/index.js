import React, {useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { productsActions } from '../../actions/products.action'

import ProductCard from "../../components/ProductCard";

import { priceFormat } from "../../utils/priceFormat";

const Home = () => {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate()

  useEffect(() => {
    productsActions.getProductsAction()
      .then((response) => {
        setProducts(response.data.map((item) => {
          return {
            ...item,
            priceFormatted: priceFormat(item.price)
          }
        }))
      })
      .catch(() => toast.error('Houve um erro ao buscar os produtos :('))
  }, [])

  return (
    <div>
      <div className="main-container">
        <div className="products-list" data-testid="products-list">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onClick={() => navigate('/details', { state: { ...product } })} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
