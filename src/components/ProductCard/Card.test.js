import { fireEvent, render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { productMock } from '../../mocks/product.mock'

import ProductCard from "."

describe('ProductCard component', () => {

  it('expect render component', () => {
    const fn = jest.fn()
    render(<ProductCard product={productMock} onClick={fn} />, { wrapper: BrowserRouter })

    expect(screen.getByText(productMock.name)).toBeInTheDocument()
    expect(screen.getByText(productMock.description)).toBeInTheDocument()
    expect(screen.getByText(productMock.priceFormatted)).toBeInTheDocument()

    const logo = screen.getByRole('img');
    expect(logo).toHaveAttribute('alt', productMock.name);
  })

  it('expect redirect component when clicked', async () => {

    const mockedNavigate = jest.fn();

    render(
      <ProductCard product={productMock} onClick={mockedNavigate} />
      , { wrapper: BrowserRouter }
    )

    fireEvent.click(screen.getByTestId(`product-card-${productMock.id}`))

    expect(mockedNavigate).toBeCalled();

  })

})