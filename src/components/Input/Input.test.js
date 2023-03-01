import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Input from '.';

const mockedOnChange = jest.fn()
const makeSut = (props) => render(
  <Input
    label="Nome:"
    placeholder="Digite seu nome"
    onChange={mockedOnChange}
    value=""
    name="username"
    {...props}
  />
)

describe('Input component', () => {


  it('renders the input with the correct label', () => {
    makeSut()
    expect(screen.getByLabelText(/Nome/i)).toBeInTheDocument();
  });

  it('deve ficar o valor digitado no input', () => {
    makeSut({placeholder: ''})

    const text = 'Sushi de salmão'
    const searchInput = screen.getByLabelText(/Nome/i)
    fireEvent.change(searchInput, { target: { value: text } });
    expect(mockedOnChange).toBeCalled();
  });

  it('deve ficar com placeholder vazio', () => {
    makeSut({placeholder: undefined})

    const searchInput = screen.getByLabelText(/Nome/i)

    expect(searchInput).toBeTruthy();
  });

});