import { describe, it, expect } from "vitest";
import { generateInstallments } from './generateInstallments';

describe('generateInstallments', () => {
  it('generates installments with default values', () => {
    const installments = generateInstallments();

    expect(installments).toEqual([]);
  });

  it('generates installments with a discount', () => {
    const installments = generateInstallments(3, 1000, 100);

    expect(installments).toEqual([
      {
        value: '1',
        label: '1x de R$ 900,00',
      },
      {
        value: '2',
        label: '2x de R$ 450,00',
      },
      {
        value: '3',
        label: '3x de R$ 300,00',
      },
    ]);
  });


  it('handles zero installments', () => {
    const installments = generateInstallments(0, 1000, 100);

    expect(installments).toEqual([]);
  });
});
