import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Home from ".";
import { productsActions } from "../../actions/products.action";

import { manyProductMock } from "../../mocks/product.mock";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockedUsedNavigate,
}));

describe("Home component", () => {

  beforeEach(() => {
    jest
      .spyOn(productsActions, "getProductsAction")
      .mockResolvedValue({
        data: manyProductMock,
        status: 200,
      });
  });

  it("should render the product list with 2 products", async () => {
    render(<Home />);

    await waitFor(() => {

      const listWrapper = screen.getByTestId("products-list");

      expect(listWrapper.childElementCount).toBe(2);
    });
  });


  it("should click and redirect", async () => {
    render(<Home />);

    let card;

    await waitFor(() => {
      card = screen.getByTestId("product-card-1");
    });

    fireEvent.click(card);
    expect(mockedUsedNavigate).toBeCalled();

  });

  it('should show an error message when there is an error in the API call', async () => {

    jest
      .spyOn(productsActions, 'getProductsAction')
      .mockRejectedValue(new Error())


    const errorMessage = 'Houve um erro ao buscar os produtos :(';


    render(
      <>
        <ToastContainer />
        <Home />
      </>
    , {wrapper: BrowserRouter});

    await waitFor(
      () => {
        const errorToasts = screen.getByText(errorMessage)
        console.log(errorToasts)
       expect(errorToasts).toBeInTheDocument()

      }
    )


  });
});
