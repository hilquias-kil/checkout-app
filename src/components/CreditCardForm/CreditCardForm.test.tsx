import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, waitFor, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CreditCardForm } from "./CreditCardForm";

import { useFormState, useFormStatus } from "react-dom";
import { debug } from "vitest-preview";

afterEach(cleanup);

vi.mock("react-dom", () => ({
  ...vi.importActual("react-dom"),
  useFormState: () => [{}, vi.fn()],
  useFormStatus: () => ({ pending: false }),
}));

describe("CreditCardForm", () => {
  it("renders correctly", () => {
    render(<CreditCardForm />);

    expect(screen.getByText("Finalizar pagamento")).toBeInTheDocument();
    screen.logTestingPlaygroundURL();
  });

  it("allows user to fill out the form", async () => {
    render(<CreditCardForm />);

    debug();
  });
});
