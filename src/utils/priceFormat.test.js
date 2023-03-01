import { priceFormat } from './priceFormat';

// Descreve o grupo de testes
describe('priceFormat function', () => {

  test('Deve retornar uma string', () => {
    const result = priceFormat(10);
    expect(typeof result).toBe('string');
  });

  test('Deve retornar o valor formatado corretamente para valores pequenos', () => {
    const result = priceFormat(10);
    expect(result).toBe('R$ 10,00');
  });


  test('Deve retornar o valor formatado corretamente para valores grandes', () => {
    const result = priceFormat(1234567.89);
    expect(result).toBe('R$ 1.234.567,89');
  });

});