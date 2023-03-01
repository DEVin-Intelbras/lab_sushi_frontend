import axios from 'axios';
import React, { useState } from 'react';
import Input from '../../components/Input';
import Menu from '../../components/Menu';
import RadioInput from '../../components/Radio';
import Select from '../../components/Select';

function Order() {

  // alterar para  hookForm
  const [order, setOrder] = useState({
    name: '',
    phone: '',
    cep: '',
    address: '',
    number: '',
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

  return (
    <div>
      <Menu />
      <div className='main-container'>

        <div className='form-container'>


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
            options={[
              { value: 'PIX', label: 'PIX' },
              { value: 'CRED', label: 'Cartão de Crédito' },
              { value: 'DEB', label: 'Cartão de débito' }
            ]}
          />

          <Select
            name="haveStraw"
            label="Deseja canudo ?"
            value={order.haveStraw}
            onChange={handleChange}
            options={[
              { value: 'SIM', label: 'SIM' },
              { value: 'NAO', label: 'NAO' },
            ]}
          />

            {order.haveHashi}

          <RadioInput
            options={[
              { value: "option1", label: "Opção 1" },
              { value: "option2", label: "Opção 2" },
              { value: "option3", label: "Opção 3" },
            ]}
            name="haveHashi"
            onChange={handleChange}
            value={order.haveHashi}
          />

        </div>

      </div>
    </div>
  );
}

export default Order;