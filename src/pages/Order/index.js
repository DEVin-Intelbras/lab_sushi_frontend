import axios from 'axios';
import React, { useState } from 'react';

import Input from '../../components/Input';
import RadioInput from '../../components/Radio';
import Select from '../../components/Select';

import { OPTIONS_PAYMENT } from '../../constants'

import { orderActions } from '../../actions/order.action'
import { toast } from 'react-toastify';

function Order() {

  // alterar para  hookForm
  const [order, setOrder] = useState({
    name: '',
    phone: '',
    cep: '',
    address: '',
    state: '',
    neighborhood: '',
    city: '',
    paymentType: '',
    haveStraw: 'NAO',
    haveHashi: "SIM"
  })

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value })
  }

  const handleGetCep = () => {
    axios.get(`https://viacep.com.br/ws/${order.cep}/json/`)
      .then((response) => {
        console.log(response.data)

        setOrder({
          ...order,
          address: response.data.logradouro,
          neighborhood: response.data.bairro,
          state: response.data.uf,
          city: response.data.localidade
        })
      })
      .catch(() => alert('Cep nao encontrado'))
  }


  const handleSubmit = (e) => {
    e.preventDefault()

    const body = {
      clientName: order.name,
      clientContact: order.phone,
      clientAddress: {
        cep: order.cep,
        address: order.address,
        state: order.state,
        neighborhood: order.neighborhood,
        city: order.city,
      },
      paymentType: order.paymentType,
      haveHashi: order.haveHashi
    }

    const message = `%0D%0A *olá* ${order.name}`

    orderActions.addOrderAction(body)
      .then(() => {
        window.location.replace(`https://api.whatsapp.com/send?text=${message}`);


        toast.success('cadastrado com sucesso')
      })
      .catch(() => {
        toast.error('houve um erro')
      })
  }


  return (
    <div>

      <div className='main-container'>

        <form className='form-container' onSubmit={handleSubmit}>


          <Input
            name="name"
            label="Nome:"
            value={order.name}
            onChange={handleChange}
            placeholder="Digite nome do cliente"
          />

          <Input
            name="phone"
            label="Telefone:"
            value={order.phone}
            onChange={handleChange}
            placeholder="Digite seu contato"
          />

          <hr />

          <Input
            name="cep"
            label="Cep:"
            value={order.cep}
            onChange={handleChange}
            placeholder="Digite seu contato"
            onBlur={handleGetCep}
          />

          <Input
            name="address"
            label="Endereço:"
            value={order.address}
            onChange={handleChange}
            placeholder="Digite seu endereço"
          />

          <Input
            name="neighborhood"
            label="Bairro:"
            value={order.neighborhood}
            onChange={handleChange}
            placeholder="Digite seu bairro"
          />

          <Input
            name="state"
            label="Estado:"
            value={order.state}
            onChange={handleChange}
            placeholder="Digite seu estado"
          />

          <Input
            name="city"
            label="Cidade:"
            value={order.city}
            onChange={handleChange}
            placeholder="Digite sua cidade"
          />

          <hr />

          <Select
            name="paymentType"
            label="Selecione uma forma de pagamento"
            value={order.paymentType}
            onChange={handleChange}
            options={OPTIONS_PAYMENT}
            testId="payment-type-select"
          />

          <p>Quantos hashi ?</p>
          <RadioInput
            options={[
              { value: "1", label: "Quero 1" },
              { value: "2", label: "Quero 2" },
              { value: "3", label: "Quero 3" },
            ]}
            name="haveHashi"
            onChange={handleChange}
            value={order.haveHashi}
          />

          <button type='submit' data-testid="submit-button-form">Fazer pedido</button>
        </form>

      </div>
    </div>
  );
}

export default Order;