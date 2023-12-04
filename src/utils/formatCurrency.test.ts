import { formatCurrency } from "./formatCurrency";
import { describe, it, expect } from "vitest";

describe("formatCurrency", () => {
  it("formats currency with default decimal places and locale", () => {
    const value = 12345.6789;
    const currency = "BRL";

    const formatted = formatCurrency(value, currency);

    expect(formatted).toBe("R$ 12.345,68");
  });

  it("formats currency with specified decimal places and locale", () => {
    const value = 54321.9876;
    const currency = "EUR";
    const decimalPlaces = 3;
    const locale = "fr-FR";

    const formatted = formatCurrency(value, currency, decimalPlaces, locale);

    expect(formatted).toBe("54\u202f321,988 €");
  });

  it("handles zero value", () => {
    const value = 0;
    const currency = "BRL";

    const formatted = formatCurrency(value, currency);

    expect(formatted).toBe("R$ 0,00");
  });
});
