import Menu from '.'
import { fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
import { mockCart } from '../../mocks/cart.mock'
import userEvent from '@testing-library/user-event'

const makeSut = () => render(
  <CartContext.Provider value={{ cart: mockCart }}>
    <Menu />
  </CartContext.Provider>, { wrapper: BrowserRouter })

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}));

describe('menu component', () => {

  it('Deve renderizar o menu com os principais elementos', () => {
    makeSut()

    expect(screen.getByText(/Sushi Lab/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/O que deseja \?/i)).toBeInTheDocument()
    expect(screen.getByText(/Carrinho - 2 items/i)).toBeInTheDocument()
  })

  it('Deve chamar a função de redirecionar para tela de carrinho', () => {
    makeSut()

    const linkCart = screen.getByText(/Carrinho - 2 items/i)

    userEvent.click(linkCart)

    expect(mockedUseNavigate).toBeCalledTimes(1)
    expect(mockedUseNavigate).toBeCalledWith('/cart')
  })

  it('Deve permanecer o valor digitado no input corretamente', () => {
    makeSut()

    const text = 'Sushi de salmao'

    const searchInput = screen.getByPlaceholderText(/O que deseja \?/i)

    fireEvent.change(searchInput, { target: { value: text } })

    expect(searchInput).toHaveValue(text)

  })
})