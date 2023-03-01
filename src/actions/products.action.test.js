import { productsActions } from './products.action';
import { manyProductMock } from "../mocks/product.mock";

describe('getProductsAction', () => {

  it('should return a list of products', async () => {

    const mockResponse = {
      data: manyProductMock,
      status: 200,
    }

    jest
      .spyOn(productsActions, "getProductsAction")
      .mockResolvedValue(mockResponse);

    const result = await productsActions.getProductsAction();

    expect(result).toEqual(mockResponse);
    expect(productsActions.getProductsAction).toBeCalled();

  });

});