import { responseGetProductsActionMock } from "../mocks/product.mock";
import { productsActions } from "./product.action";

describe('productsActions methods', () => {

  it('Deve retornar um array de produtos ao chamar a ação getProductsAction', async () => {

    const mockResponse = {
      data: responseGetProductsActionMock,
      status: 200,
      statusText: "OK"
    }

    jest.spyOn(productsActions, 'getProductsAction')
      .mockResolvedValue(mockResponse)

    const result = await productsActions.getProductsAction()

    expect(result).toEqual(mockResponse)
    expect(productsActions.getProductsAction).toBeCalledTimes(1);

  })

});