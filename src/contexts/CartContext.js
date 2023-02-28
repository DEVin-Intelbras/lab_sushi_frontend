import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const CartContext = createContext({})

export const CartProvider = ({children}) => {

  const navigate = useNavigate()
  const [cart, setCart] = useState([])

  const addProductInCart = (product) => {
    setCart([...cart, product])
    alert('Produto adicionado ao carrinho')
    navigate('/')
  }

  return (
    <CartContext.Provider value={{ cart, addProduct: addProductInCart }}>
      {children}
    </CartContext.Provider>
  )
}