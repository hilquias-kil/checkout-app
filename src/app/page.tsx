import { CreditCardForm } from "@/components/CreditCardForm";
import { Plans } from "@/components/Plans";

export default function Home() {
  return (
    <div className="p-8 lg:w-[870px] lg:px-0 m-auto flex flex-col md:flex-row md:justify-between">
      <section className="mb-8 md:w-[330px]">
        <h2 className="text-xl mb-2">Estamos quase lá!</h2>
        <p className="mb-8">Insira seus dados de pagamento abaixo:</p>
        <CreditCardForm />
      </section>
      <section className="md:w-[330px]">
        <h2 className="text-xl mb-2">Confira o seu plano:</h2>
        <p className="mb-8 text-xs px-3 py-1 border-[1px] rounded-xl border-gray-200 inline-block">
          fulano@cicrano.com.br
        </p>
        <Plans />
      </section>
    </div>
  );
}
