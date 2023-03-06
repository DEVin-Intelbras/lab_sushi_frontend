import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Details from ".";
import { CartContext } from "../../contexts/CartContext";
import { priceFormat } from "../../utils/priceFormat";

const mockProduct = {
  id: 1,
  name: 'Product',
  price: 10.00,
  description: 'This is a test product',
  image: 'http://example.com/image.png',
  priceFormatted: priceFormat(10.00)
};

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    state: {
      ...mockProduct
    }
  })
}));

const renderWithContext = (addProduct) => {
  return render(
    <CartContext.Provider value={{ addProduct: addProduct || jest.fn() }}>
      <Details />
    </CartContext.Provider>
    , {
      wrapper: BrowserRouter
    }
  );
};

describe('Details page', () => {

  it('Deve renderizar a tela na primeira renderização corretamente', () => {
    renderWithContext()

    const logo = screen.getByRole('img');
    expect(logo).toHaveAttribute('src', mockProduct.image);
    expect(logo).toHaveAttribute('alt', mockProduct.name);

    expect(screen.getByText(mockProduct.name)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.priceFormatted)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.description)).toBeInTheDocument();

    expect(screen.getByTestId('quantity-cart').textContent).toEqual("1");
  });


  it('Deve atualizar o estado de quantidade corretamente', () => {

    renderWithContext()

    const incrementButton = screen.getByTestId('plus-button');

    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);

    expect(screen.getByTestId('quantity-cart').textContent).toEqual("5");

    const descrementButton = screen.getByTestId('minus-button');
    fireEvent.click(descrementButton);

    expect(screen.getByTestId('quantity-cart').textContent).toEqual("4")
  });


  it('Deve desabilitar o botão de decrementar quando a quantidade é o valor 1', () => {

    renderWithContext()

    const incrementButton = screen.getByTestId('plus-button');

    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);

    expect(screen.getByTestId('quantity-cart').textContent).toEqual("3");

    const descrementButton = screen.getByTestId('minus-button');
    fireEvent.click(descrementButton);
    fireEvent.click(descrementButton);

    expect(descrementButton).toBeDisabled()
  })


  it('Deve chamar a função quando clicar no botão adicionar', () => {
    const mockAddProduct = jest.fn()

    renderWithContext(mockAddProduct)

    const button = screen.getByRole('button', { name: 'Adicionar' });
    fireEvent.click(button);

    expect(mockAddProduct).toBeCalled()
    expect(mockAddProduct).toBeCalledTimes(1)
  });

  it('Deve permanecer o valor digitado na textarea', () => {
    renderWithContext()

    const textarea = screen.getByPlaceholderText('Digite uma observação');
    fireEvent.change(textarea, { target: { value: 'Tirar o peixe' } });
    expect(textarea.value).toBe('Tirar o peixe');

  });

  it('Deve testar todos elementos da tela', () => {
    const mockAddProduct = jest.fn()

    renderWithContext(mockAddProduct)

    const textarea = screen.getByPlaceholderText('Digite uma observação');
    fireEvent.change(textarea, { target: { value: 'Tirar a cebola' } });
    expect(textarea.value).toBe('Tirar a cebola');

    const incrementButton = screen.getByTestId('plus-button');

    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);

    const button = screen.getByRole('button', { name: 'Adicionar' });
    fireEvent.click(button);

    expect(textarea.value).toBe('Tirar a cebola');
    expect(screen.getByTestId('quantity-cart').textContent).toEqual("5")
    expect(mockAddProduct).toBeCalled()
    expect(mockAddProduct).toBeCalledTimes(1)

  });

})
