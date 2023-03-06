import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Order from ".";
import { orderActions } from "../../actions/order.action";
import { OPTIONS_PAYMENT } from "../../constants";
import { CartContext } from "../../contexts/CartContext";

const renderWithContext = (addProduct) => {
  return render(
    <CartContext.Provider value={{ addProduct: addProduct || jest.fn() }}>
      <Order />
    </CartContext.Provider>
    , {
      wrapper: BrowserRouter
    }
  );
};

describe('Order page', () => {

  const interactInput = (name, value) => {
    const input = screen.getByRole('textbox', { name });
    fireEvent.change(input, { target: { value } });
    expect(input.value).toBe(value)
  }

  it('Deve preencher corretamente o formulário', () => {

    const addAction = jest.spyOn(orderActions, 'addOrderAction')

    renderWithContext()

    interactInput('name', 'Henrique')
    interactInput('phone', '85991811574')
    interactInput('cep', '62870000')
    interactInput('address', 'Rua teste')
    interactInput('neighborhood', 'Buriti')
    interactInput('state', 'CE')
    interactInput('city', 'Pacajus')

    const paymentTypeSelect = screen.getByTestId('payment-type-select')

    let options = screen.getAllByTestId('option-payment-type-select')

    fireEvent.change(paymentTypeSelect, { target: { value: OPTIONS_PAYMENT[1].value } })

    expect(options[0].selected).toBeFalsy();
    expect(options[1].selected).toBeTruthy();
    expect(options[2].selected).toBeFalsy();

    userEvent.click(screen.getByTestId('submit-button-form'));

    expect(addAction).toHaveBeenCalled();
    expect(addAction).toBeCalledTimes(1);
    expect(addAction).toBeCalledWith({
      "clientAddress":
      {
        "address": "Rua teste",
        "cep": "62870000",
        "city": "Pacajus",
        "neighborhood": "Buriti",
        "state": "CE"
      },
      "clientContact": "85991811574",
      "clientName": "Henrique",
      "haveHashi": "SIM",
      "paymentType": "CRED"
    })
  });

})
