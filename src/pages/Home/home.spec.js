import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import Home from "."
import { productsActions } from "../../actions/product.action"
import { responseGetProductsActionMock } from "../../mocks/product.mock"

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockedUsedNavigate,
}));

describe('Home page', () => {

  beforeEach(() => {
    jest
      .spyOn(productsActions, "getProductsAction")
      .mockResolvedValue({
        data: responseGetProductsActionMock,
        status: 200,
        statusText: 'ok'
      });

  })

  it('Deve renderizar a quantidade de produtos corretamente', async () => {
    render(<Home />, { wrapper: BrowserRouter })

    const list = await screen.findByTestId('products-list')

    await waitFor(() => {
      // eslint-disable-next-line testing-library/no-node-access
      expect(list.childElementCount).toEqual(5)
    })

    responseGetProductsActionMock.forEach(item => {
      expect(screen.getByTestId(`product-card-${item.id}`)).toBeInTheDocument()
    })
  })

  it('Deve renderizar uma mensagem de erro na tela', async () => {

    jest
      .spyOn(productsActions, 'getProductsAction')
      .mockRejectedValue(new Error())

    const errorMessage = 'Houve um erro ao buscar os produtos :(';

    render(
      <>
        <ToastContainer />
        <Home />
      </>
      , { wrapper: BrowserRouter });

    await waitFor(
      () => {
        const errorToast = screen.getByText(errorMessage)
        expect(errorToast).toBeInTheDocument()
      }
    )
  });

  it("Deve chamar a função de navegação", async () => {
    render(<Home />);

    let cardProduct;

    await waitFor(() => {
      cardProduct = screen.getByTestId("product-card-1");
    })

    fireEvent.click(cardProduct);

    expect(mockedUsedNavigate).toBeCalled();

  });

})