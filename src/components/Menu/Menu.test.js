
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Menu from '.'
import { CartContext } from "../../contexts/CartContext";
import { mockCart } from "../../mocks/cart.mock";


const makeSut = () =>
  render(
    <CartContext.Provider value={{ cart: mockCart }}>
      <Menu />
    </CartContext.Provider>,
    { wrapper: BrowserRouter }
  )

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('Menu Component', () => {
  test('Deve renderizar a logo, input e link de carrinho', () => {

    makeSut()

    expect(screen.getByText(/Carrinho/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/o que comer hoje \?/i)).toBeInTheDocument()
    expect(screen.getByText(/Carrinho - 2 items/i)).toBeInTheDocument()
  })


  test('deve navegar para a página do carrinho ao clicar no link do carrinho', () => {
    makeSut()

    const cartLink = screen.getByText('Carrinho - 2 items');
    userEvent.click(cartLink);
    expect(mockedUsedNavigate).toHaveBeenCalledWith('/cart');
  });


  test('deve ficar o valor digitado no input', () => {
    makeSut()

    const text = 'Sushi de salmão'
    const searchInput = screen.getByPlaceholderText(/o que comer hoje \?/i)
    fireEvent.change(searchInput, { target: { value: text } });

    expect(searchInput).toHaveValue(text);
  });


})
