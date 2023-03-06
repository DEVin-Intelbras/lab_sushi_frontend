import api from "../services/api"

export const productsActions = {
  getProductsAction: async () => {
    return api.get('/products')
  }
}
