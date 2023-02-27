
import { FaMinusCircle, FaPlusCircle, FaTrashAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Menu from '../../components/Menu';

const Cart = () => {

  const cart = [{
    itemId: 10,
    quantity: 1,
    product: {
      "id": 1,
      "name": "Sushi de salmão",
      "description": "Salmão fresco, arroz temperado, nori e molho shoyu.",
      "price": 12.50,
      "category": "sushi",
      "image": "https://j6t2y8j5.rocketcdn.me/wp-content/uploads/2020/06/como-fazer-sushi-em-casa-origem-tipos-desenvolvidos-e-receitas.png"
    },
    "subTotalFormatted": "12,00",
  }]

  const navigate = useNavigate();

  return (
    <>
      <Menu />

      <div className='main-container'>
        <table className='table-cart' data-testid="table-cart">
          <thead>
            <tr>
              <th>#</th>
              <th>Produto</th>
              <th>Quantidade</th>
              <th>SubTotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.map(item => (
              <tr key={item.itemId}>
                <td>
                  <img className='table-image' src={item.product.image} alt={item.product.name} />
                </td>
                <td>{item.product.name}</td>
                <td>
                  <FaMinusCircle
                    size={18}
                    color="#9721BD"
                    className='margin-button'
                  // onClick={() => handleChangeQuantity( item.quantity - 1, item.itemId)}
                  />

                  {item.quantity}
                  <FaPlusCircle
                    size={18}
                    color="#9721BD"
                    className='margin-button'
                  // onClick={() => handleChangeQuantity(item.quantity + 1, item.itemId)}
                  />
                </td>

                <td>{item.subTotalFormatted}</td>
                <td>
                  <FaTrashAlt size={22} color='#9721BD' onClick={() => {
                    Swal.fire({
                      title: 'Deseja realmente remover esse item ?',
                      showCancelButton: true,
                      confirmButtonText: 'Sim, desejo !',
                      cancelButtonText: `Cancelar`,
                    }).then((result) => {
                      if (result.isConfirmed) {
                        // removeItem(item.id)
                      }
                    })
                  }} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='footer-cart'>
          <h1>Total: {1000}</h1>
          <button className='book-button' onClick={() => navigate('/checkout')}>Finalizar compra</button>
        </div>
      </div>
    </>
  )
}

export default Cart
