import { CardsFlags } from "../CardsFlags";

export function CreditCardForm() {
  return (
    <form>
      <CardsFlags />
      <div>
        <label htmlFor="card-number">Número do cartão</label>
        <input type="number" placeholder="0000 0000 0000 0000" />
      </div>
      <div>
      <label htmlFor="card-expire">Validade</label>
      <input type="text" placeholder="MM/AA" />
      </div>
    </form>
  );
}
