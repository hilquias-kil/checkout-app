import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CreditCardForm } from "./CreditCardForm";

import { useFormState, useFormStatus } from "react-dom";
import { useStore } from "@/store/store";

afterEach(cleanup);

vi.mock("react-dom", () => ({
  ...vi.importActual("react-dom"),
  useFormState: () => [{}, vi.fn()],
  useFormStatus: () => ({ pending: false }),
}));

vi.mock("@/store/store", () => ({
  ...vi.importActual("@/store/store"),
  useStore: () => ({
    id: "plan1",
    name: "plan",
    title: "Plan Title",
    description: "Plan Description",
    fullPrice: 100,
    discountAmmount: 20,
    discountPercentage: 20,
    installments: 3,
  }),
}));

const user = userEvent.setup({ delay: 15 });

describe("CreditCardForm", () => {
  it("renders correctly", () => {
    render(<CreditCardForm />);

    expect(screen.getByText("Finalizar pagamento")).toBeInTheDocument();
  });

  it("allows user to fill out the form", async () => {
    render(<CreditCardForm />);

    const creditCardNumber = screen.getByLabelText(/número do cartão/i);
    const creditCardExpirationDate = screen.getByLabelText(/validade/i);
    const creditCardCVV = screen.getByLabelText(/cvv/i);
    const creditCardCPF = screen.getByLabelText(/cpf/i);
    const couponCode = screen.getByLabelText(/cupom/i);
    const installments = screen.getByLabelText(/número de parcelas/i);

    await user.type(creditCardNumber, "1234567890123456");
    expect(creditCardNumber).toHaveValue("1234 5678 9012 3456");

    await user.type(creditCardExpirationDate, "1230");
    expect(creditCardExpirationDate).toHaveValue("12/30");

    await user.type(creditCardCVV, "123");
    expect(creditCardCVV).toHaveValue("123");

    await user.type(creditCardCPF, "12345678909");
    expect(creditCardCPF).toHaveValue("123.456.789-09");

    await user.type(couponCode, "testtest1");
    expect(couponCode).toHaveValue("testtest1");

    await user.selectOptions(installments, ["1"]);
    expect(
      screen.getByRole<HTMLSelectElement & { selected: boolean }>("option", {
        name: "1x de R$ 80,00",
      }).selected
    ).toBe(true);
  });
});
