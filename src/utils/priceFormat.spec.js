import { priceFormat } from "./priceFormat"

describe('priceFormat function', () => {

  test('Deve retornar uma string', () => {
    const result = priceFormat(10);
    expect(typeof result).toBe('string');
  });

  it('Deve retornar o valor formatado corretamente para valores menores', () => {
    const result = priceFormat(10)

    expect(result).toBe("R$10,00")
  })

  it('Deve retornar o valor formatado corretamente para valores maiores', () => {
    const result = priceFormat(1234567.89);
    expect(result).toBe('R$1.234.567,89');
  })

})