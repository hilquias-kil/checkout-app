import React from 'react';
import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { InputField } from './InputField';

afterEach(cleanup);

const user = userEvent.setup({ delay: 15 });

describe('InputField', () => {
  it('renders the component with label and placeholder', () => {
    render(
      <InputField
        label="Username"
        id="username"
        placeholder="Enter your username"
        mask=""
        error={() => {}}
      />
    );

    const labelElement = screen.getByText('Username');
    const inputElement = screen.getByPlaceholderText('Enter your username');

    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
  });

  it('triggers error message when an error is provided', () => {
    const errorMessage = 'Invalid input';

    render(
      <InputField
        label="Email"
        id="email"
        placeholder="Enter your email"
        mask=""
        error={(errorHandle: any) => (errorHandle({ message: errorMessage }))}
      />
    );

    const inputElement = screen.getByPlaceholderText('Enter your email');
    const errorElement = screen.getByText(errorMessage);

    expect(inputElement).toBeInTheDocument();
    expect(errorElement).toBeInTheDocument();
  });

  it('handles user input', async () => {

    render(
      <InputField
        label="Phone Number"
        id="phone"
        placeholder="Enter your phone number"
        mask="99-999"
        error={() => {}}
      />
    );

    const input = screen.getByRole('textbox', {
      name: /phone number/i
    })

    await user.type(input, '12345');

    expect(input).toHaveValue('12-345'); 
  });
});
