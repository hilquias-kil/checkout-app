"use client";

import { useFormState, useFormStatus } from "react-dom";
import { CardsFlags } from "@/components/CardsFlags";
import { InputField } from "@/components/InputField";
import { SelectField } from "@/components/SelectField";
import { useStore } from "@/store/store";
import { postPayment } from "@/actions/postPayment";
import { generateInstallments } from "@/utils/generateInstallments";

export function CreditCardForm() {
  const [state, formAction] = useFormState(postPayment, null);
  const planSelected = useStore((state) => state.planSelected);

  console.log();

  return (
    <form action={formAction}>
      <input type="hidden" name="offerId" value={planSelected?.id || ""} />
      <input type="hidden" name="gateway" value={planSelected?.gateway || ""} />
      <CardsFlags />
      <InputField
        label="Número do cartão"
        id="creditCardNumber"
        placeholder="0000 0000 0000 0000"
        mask="____ ____ ____ ____"
        replacement={{ _: /\d/ }}
      />
      <div className="flex gap-12">
        <InputField
          label="Validade"
          id="creditCardExpirationDate"
          placeholder="MM/AA"
          mask="__/__"
          replacement={{ _: /\d/ }}
        />
        <InputField
          label="CVV"
          id="creditCardCVV"
          placeholder="000"
          mask="___"
          replacement={{ _: /\d/ }}
        />
      </div>
      <InputField
        label="CPF"
        id="creditCardCPF"
        placeholder="000.000.000-00"
        mask="___.___.___-__"
        replacement={{ _: /\d/ }}
      />
      <InputField
        label="Cupom"
        id="couponCode"
        placeholder="Insira aqui"
        mask="_________"
        replacement={{ _: /./ }}
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
        className="text-sm text-white bg-[#191847] hover:bg-blue-950 p-4 rounded-3xl w-full transition-colors"
      >
        Finalizar pagamento
      </button>
    </form>
  );
}
