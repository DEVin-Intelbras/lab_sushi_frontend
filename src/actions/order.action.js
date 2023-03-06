import api from "../services/api"

export const orderActions = {
  addOrderAction: async (body) => {
    return api.post('/orders', body)
  }
}
