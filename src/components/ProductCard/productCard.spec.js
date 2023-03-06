import { fireEvent, render, screen } from "@testing-library/react"
import ProductCard from "."
import { productMock } from '../../mocks/product.mock'



describe('productCard component', () => {

  it('Deve exibir o componente corretamente', () => {
    const onClickMock = jest.fn()

    render(<ProductCard product={productMock} onClick={onClickMock} />)

    expect(screen.getByText(productMock.name)).toBeInTheDocument()
    expect(screen.getByText(productMock.description)).toBeInTheDocument()
    expect(screen.getByText(productMock.priceFormatted)).toBeInTheDocument()

    const productImage = screen.getByRole('img');
    expect(productImage).toHaveAttribute('alt', productMock.name);
    expect(productImage).toHaveAttribute('src', productMock.image);
  })

  it('Deve chamar o onClick ao clicar no card do produto', async () => {

    const mockedNavigate = jest.fn();

    render(
      <ProductCard product={productMock} onClick={mockedNavigate} />
    )

    fireEvent.click(screen.getByTestId(`product-card-${productMock.id}`))

    expect(mockedNavigate).toBeCalled();
    expect(mockedNavigate).toBeCalledTimes(1);

  })

  it('Deve renderizar o texto valor normal', () => {
    const mockedNavigate = jest.fn();

    render(
      <ProductCard product={productMock} onClick={mockedNavigate} />
    )

    expect(screen.getByText('valor normal')).toBeInTheDocument();
  })

  it('Deve renderizar o texto promoção', () => {
    const mockedNavigate = jest.fn();

    render(
      <ProductCard product={{ ...productMock , price: 6.5}} onClick={mockedNavigate} />
    )

    expect(screen.getByText('promoção')).toBeInTheDocument();
  })
})