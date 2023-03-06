export const priceFormat = (value) => {
  return new Intl.NumberFormat(
    'pt-BR',
    { style: 'currency', currency: 'BRL' }
  )
    .format(value).replace(/\s+/g, "");
}
