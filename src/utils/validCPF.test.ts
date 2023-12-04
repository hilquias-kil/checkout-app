import { describe, it, expect } from "vitest";

import { validCPF } from './validCPF';

describe('validCPF', () => {
  it('validates a valid CPF', () => {
    const cpf = '123.456.789-09';

    const isValid = validCPF(cpf);

    expect(isValid).toBe(true);
  });

  it('validates an invalid CPF with incorrect verification digits', () => {
    const cpf = '123.456.789-00';

    const isValid = validCPF(cpf);

    expect(isValid).toBe(false);
  });

  it('validates an invalid CPF with an invalid format', () => {
    const cpf = '12345678900'; // Missing separators

    const isValid = validCPF(cpf);

    expect(isValid).toBe(false);
  });

  it('validates an invalid CPF with repeated numbers', () => {
    const cpf = '111.111.111-11';

    const isValid = validCPF(cpf);

    expect(isValid).toBe(false);
  });

  it('validates an invalid CPF with too few digits', () => {
    const cpf = '123.456';

    const isValid = validCPF(cpf);

    expect(isValid).toBe(false);
  });

  it('validates an invalid CPF with too many digits', () => {
    const cpf = '123.456.789-098';

    const isValid = validCPF(cpf);

    expect(isValid).toBe(false);
  });
});
