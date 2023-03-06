import React from 'react';
import { render, screen } from '@testing-library/react';
import RadioInput from '.';

describe('RadioInput', () => {
  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];
  const onChange = jest.fn();
  const name = 'myRadioInput';
  const value = 'option2';

  it('Deve renderizar o radio input corretamente', () => {
    render(
      <RadioInput options={options} onChange={onChange} name={name} value={value} />
    );


    options.forEach((option) => {
      const label = screen.getByLabelText(option.label);
      expect(label).toBeInTheDocument();
      expect(label).toHaveAttribute('type', 'radio');
      expect(label).toHaveAttribute('name', name);
      expect(label).toHaveAttribute('value', option.value);
    });
  });

  /*

  it('Deve chamar a ação de onChange ao clicar em cima do elemento', () => {
    render(
      <RadioInput options={options} onChange={onChange} name={name} value={value} />
    );

    const option = options[1];
    const label = screen.getByLabelText(option.label);
    fireEvent.click(label);

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(expect.objectContaining({
      target: expect.objectContaining({
        name: name,
        value: option.value,
      }),
    }));
  });
  */
});