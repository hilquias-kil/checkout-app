"use client";

import { useFormState, useFormStatus } from "react-dom";
import { CardsFlags } from "@/components/CardsFlags";
import { InputField } from "@/components/InputField";
import { SelectField } from "@/components/SelectField";
import { useStore } from "@/store/store";
import { postPayment } from "@/actions/postPayment";
import { generateInstallments } from "@/utils/generateInstallments";

import { z } from "zod";
import { useZorm } from "react-zorm";
import { validCPF } from "@/utils/validCPF";

const FormSchema = z.object({
  creditCardNumber: z.string().length(19),
  creditCardExpirationDate: z.string().length(5),
  creditCardCVV: z.string().length(3),
  creditCardCPF: z
    .string()
    .length(14)
    .refine((cpf) => validCPF(cpf), "CPF invalido"),
  couponCode: z.string().length(9),
});

export function CreditCardForm() {
  const [state, formAction] = useFormState(postPayment, null);
  const planSelected = useStore((state) => state.planSelected);

  const zo = useZorm("creditCard", FormSchema);
  const disabled = zo.validation?.success === false;

  return (
    <form ref={zo.ref} action={formAction}>
      <input type="hidden" name="offerId" value={planSelected?.id || ""} />
      <input type="hidden" name="gateway" value={planSelected?.gateway || ""} />
      <CardsFlags />
      <InputField
        label="Número do cartão"
        id={zo.fields.creditCardNumber()}
        placeholder="0000 0000 0000 0000"
        mask="____ ____ ____ ____"
        replacement={{ _: /\d/ }}
        error={zo.errors.creditCardNumber}
      />
      <div className="flex gap-12">
        <InputField
          label="Validade"
          id={zo.fields.creditCardExpirationDate()}
          placeholder="MM/AA"
          mask="__/__"
          replacement={{ _: /\d/ }}
          error={zo.errors.creditCardExpirationDate}
        />
        <InputField
          label="CVV"
          id={zo.fields.creditCardCVV()}
          placeholder="000"
          mask="___"
          replacement={{ _: /\d/ }}
          error={zo.errors.creditCardCVV}
        />
      </div>
      <InputField
        label="CPF"
        id={zo.fields.creditCardCPF()}
        placeholder="000.000.000-00"
        mask="___.___.___-__"
        replacement={{ _: /\d/ }}
        error={zo.errors.creditCardCPF}
      />
      <InputField
        label="Cupom"
        id={zo.fields.couponCode()}
        placeholder="Insira aqui"
        mask="_________"
        replacement={{ _: /./ }}
        error={zo.errors.couponCode}
      />
      <SelectField
        label="Número de parcelas"
        id="installments"
        placeholder="Selecionar"
        options={generateInstallments(
          planSelected?.installments,
          planSelected?.fullPrice,
          planSelected?.discountAmmount
        )}
      />
      <button
        type="submit"
        disabled={disabled}
        className="text-sm text-white bg-[#191847] hover:bg-blue-950 p-4 rounded-3xl w-full transition-colors"
      >
        Finalizar pagamento
      </button>
      <pre>Validation status: {JSON.stringify(zo.validation, null, 2)}</pre>
    </form>
  );
}
