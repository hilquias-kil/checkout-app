import React from 'react';
import { describe, it, expect, vi, afterEach } from "vitest";

import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PlanOption } from './PlanOption'; // Replace with the actual path to your component
import { formatCurrency } from '@/utils/formatCurrency';
import { formatPercentage } from '@/utils/formatPercentage';

afterEach(cleanup);

describe('PlanOption', () => {
  const defaultProps = {
    id: 'plan1',
    name: 'plan',
    title: 'Plan Title',
    description: 'Plan Description',
    fullPrice: 100,
    discountAmmount: 20,
    discountPercentage: 20,
    installments: 3,
    checked: false,
    onChange: vi.fn(),
  };

  it('renders the component with provided props', () => {
    render(<PlanOption {...defaultProps} />);
  });

  it('handles onChange event', () => {
    const propsWithChecked = { ...defaultProps, checked: true };
    render(<PlanOption {...propsWithChecked} />);
    
    const inputElement = screen.getByRole('radio');

    expect(inputElement).toBeChecked();

  });
});
