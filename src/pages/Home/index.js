import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { priceFormat } from "../../utils/priceFormat";
import ProductCard from "../../components/ProductCard";
import {productsAction, productsActions} from "../../actions/product.action";
import { toast } from "react-toastify";

const Home = () => {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate()


  const handleNavigateToDetails = (product) => {
    navigate(`/details/${product.id}`, { state: product })
  }

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
        <div data-testid="products-list" className="products-list">
          {products.map((product) => (
            <ProductCard product={product}
              onClick={() => handleNavigateToDetails(product)}
              key={product.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
