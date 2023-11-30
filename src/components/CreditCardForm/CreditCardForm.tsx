import Image from "next/image";

export function CreditCardForm() {
  return (
    <form>
      <div>
        <Image src="/master.svg" alt="Mastercard" width={32} height={23} />
        <Image src="/diners.svg" alt="Diners club" width={32} height={23} />
        <Image
          src="/american_express.svg"
          alt="American express"
          width={32}
          height={23}
        />
        <Image src="/visa.svg" alt="Visa" width={32} height={23} />
        <Image src="/elo.svg" alt="Elo" width={32} height={23} />
      </div>
      <p>
        Pagamentos por{" "}
        <Image src="/iugu.svg" alt="Iugu" width={29} height={11} />
      </p>
    </form>
  );
}
