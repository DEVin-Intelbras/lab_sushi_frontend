import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { priceFormat } from "../utils/priceFormat";

export const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const navigate = useNavigate()

  const [cart, setCart] = useState([])

  const [total, setTotal] = useState({
    total: 0,
    totalFormatted: "R$ 0,00"
  })

  const addProductInCart = (data) => {

    const item = {
      ...data,
      subTotal: data.product.price * data.quantity,
      subTotalFormatted: priceFormat(data.product.price * data.quantity),
      itemId: uuidv4()
    }

    setCart([...cart, item])
    alert('Produto adicionado ao carrinho')
    navigate('/')
  }

  const removeProductInCart = (itemId) => {
    setCart(cart.filter(item => item.itemId !== itemId))
  }

  const changeProductInCart = (itemId, quantity) => {
    setCart(cart.map(item => {
      if (item.itemId === itemId) {
        item.quantity = quantity
        item.subTotal = Number(quantity) * Number(item.product.price)
        item.subTotalFormatted = priceFormat(Number(quantity) * Number(item.product.price))
      }
      return item
    }))
  }

  useEffect(() => {
    const calc = cart.reduce(
      (acc, item) => Number(item.subTotal) + acc, 0)

    setTotal(
      {
        total: calc,
        totalFormatted: priceFormat(calc)
      }
    )

  }, [cart])

  return (
    <CartContext.Provider value={{
      cart,
      addProduct: addProductInCart,
      removeItem: removeProductInCart,
      changeItem: changeProductInCart,
      totalCart: total
    }}>
      {children}
    </CartContext.Provider>
  )
}