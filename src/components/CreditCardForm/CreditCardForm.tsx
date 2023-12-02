"use client";

import { useFormState, useFormStatus } from "react-dom";
import { CardsFlags } from "@/components/CardsFlags";
import { InputField } from "@/components/InputField";
import { SelectField } from "@/components/SelectField";
import { useStore } from "@/store/store";
import { postPayment } from "@/actions/postPayment";

export function CreditCardForm() {
  const [state, formAction] = useFormState(postPayment, null);
  const planSelected = useStore((state) => state.planSelected);

  return (
    <form action={formAction}>
      <input type="hidden" name="offerId" value={planSelected?.id} />
      <input type="hidden" name="gateway" value={planSelected?.gateway} />
      <CardsFlags />
      <InputField
        label="Número do cartão"
        id="creditCardNumber"
        placeholder="0000 0000 0000 0000"
      />
      <div className="flex gap-12">
        <InputField
          label="Validade"
          id="creditCardExpirationDate"
          placeholder="MM/AA"
        />
        <InputField label="CVV" id="creditCardCVV" placeholder="000" />
      </div>
      <InputField label="CPF" id="creditCardCPF" placeholder="000.000.000-00" />
      <InputField label="Cupom" id="couponCode" placeholder="Insira aqui" />
      <SelectField
        label="Número de parcelas"
        id="installments"
        placeholder="Selecionar"
        options={[]}
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
