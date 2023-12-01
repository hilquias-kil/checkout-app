import { CardsFlags } from "../CardsFlags";
import { InputField } from "../InputField";
import { SelectField } from "../SelectField";

export function CreditCardForm() {
  return (
    <form>
      <CardsFlags />
      <InputField
        label="Número do cartão"
        id="card-number"
        placeholder="0000 0000 0000 0000"
      />
      <div className="flex gap-12">
        <InputField label="Validade" id="card-expire" placeholder="MM/AA" />
        <InputField label="CVV" id="cvv" placeholder="000" />
      </div>
      <InputField label="CPF" id="cpf" placeholder="000.000.000-00" />
      <InputField label="Cupom" id="cupom" placeholder="Insira aqui" />
      <SelectField
        label="Número de parcelas"
        id="instalments"
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
