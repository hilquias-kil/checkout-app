import Image from "next/image";

export function CardsFlags() {
  return (
    <>
      <div className="flex gap-4 mb-3 justify-center">
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
      <p className="flex items-center gap-2 justify-center mb-7">
        <span className="text-[10px] text-gray-200">Pagamentos por</span>
        <Image src="/iugu.svg" alt="Iugu" width={29} height={11} />
      </p>
    </>
  );
}
