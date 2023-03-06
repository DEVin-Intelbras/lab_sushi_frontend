import { priceFormat } from "../utils/priceFormat";

export const productMock = {
  "id": 1,
  "name": "Sushi de salmão",
  "description": "Salmão fresco, arroz temperado, nori e molho shoyu.",
  "price": 12.5,
  "category": "sushi",
  "image": "https://j6t2y8j5.rocketcdn.me/wp-content/uploads/2020/06/como-fazer-sushi-em-casa-origem-tipos-desenvolvidos-e-receitas.png",
  "priceFormatted": priceFormat(12.5)
}

export const responseGetProductsActionMock = [
  {
    "id": 1,
    "name": "Sushi de salmão",
    "description": "Salmão fresco, arroz temperado, nori e molho shoyu.",
    "price": 12.50,
    "category": "sushi",
    "image": "https://j6t2y8j5.rocketcdn.me/wp-content/uploads/2020/06/como-fazer-sushi-em-casa-origem-tipos-desenvolvidos-e-receitas.png"
  },
  {
    "id": 2,
    "name": "Sashimi de atum",
    "description": "Fatias finas de atum fresco, molho ponzu e gengibre ralado.",
    "price": 15.00,
    "categoria": "sushi",
    "image": "https://j6t2y8j5.rocketcdn.me/wp-content/uploads/2020/06/como-fazer-sushi-em-casa-origem-tipos-desenvolvidos-e-receitas.png"
  },
  {
    "id": 3,
    "name": "Uramaki de camarão",
    "description": "Camarão empanado, cream cheese, cebolinha e gergelim.",
    "price": 14.00,
    "categoria": "sushi",
    "image": "https://j6t2y8j5.rocketcdn.me/wp-content/uploads/2020/06/como-fazer-sushi-em-casa-origem-tipos-desenvolvidos-e-receitas.png"
  },
  {
    "id": 4,
    "name": "Uramaki Califórnia",
    "description": "Kani kama, pepino e abacate enrolados em arroz e gergelim.",
    "price": 8.50,
    "categoria": "sushi",
    "image": "https://j6t2y8j5.rocketcdn.me/wp-content/uploads/2020/06/como-fazer-sushi-em-casa-origem-tipos-desenvolvidos-e-receitas.png"
  },
  {
    "id": 5,
    "name": "Nigiri de salmão",
    "description": "Fatia de salmão fresco sobre bolinho de arroz.",
    "price": 10.00,
    "categoria": "sushi",
    "image": "https://j6t2y8j5.rocketcdn.me/wp-content/uploads/2020/06/como-fazer-sushi-em-casa-origem-tipos-desenvolvidos-e-receitas.png"
  },
]