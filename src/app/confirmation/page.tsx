import Link from "next/link";
import Image from "next/image";
import { getSubscription } from "@/actions/getSubscription";
import { formatCurrency } from "@/utils/formatCurrency";
import { formatCPF } from "@/utils/formatCPF";

export default async function Confirmation() {
  const subscription = await getSubscription();

  return (
    <div className="p-8 lg:w-[340px] flex flex-col items-center lg:px-0 m-auto">
      <Image
        className="mb-4"
        src="/confirmation.svg"
        alt="confirmação"
        width={60}
        height={60}
      />
      <h2 className="text-xl text-[#191847] mb-3">Parabéns!</h2>
      <h3 className="text-base text-[#C9C5D4] text-center mb-12">
        Sua assinatura foi realizada <br /> com sucesso.
      </h3>
      <div className="p-4 rounded-2xl shadow-xl w-full mb-20">
        <div className="bg-[#F4F3F6] p-4 flex items-center justify-between rounded-2xl mb-5">
          <Image src="/success.svg" alt="sucesso" width={40} height={40} />
          <div className="text-right">
            <p className="text-[#191847] text-base mb-2">
              {subscription.offer.title} <span className="mx-1">|</span>{" "}
              {subscription.offer.description}
            </p>
            <p className="text-[#191847] text-sm">
              {formatCurrency(
                subscription.offer.fullPrice -
                  subscription.offer.discountAmmount,
                "BRL"
              )}{" "}
              <span className="mx-1">|</span> {subscription.installments}x{" "}
              {formatCurrency(
                (subscription.offer.fullPrice -
                  subscription.offer.discountAmmount) /
                  subscription.installments,
                "BRL"
              )}
            </p>
          </div>
        </div>
        <p className="flex justify-between text-sm mb-6 px-5">
          <span className="text-[#C9C5D4]">E-mail</span>
          <span>fulano@cicrano.com.br</span>
        </p>
        <p className="flex justify-between text-sm px-5 mb-2">
          <span className="text-[#C9C5D4]">CPF</span>
          <span>{formatCPF(subscription.creditCardCPF)}</span>
        </p>
      </div>
      <Link href="/" className="text-[#191847] text-xs mb-6 font-bold">
        Gerenciar assinatura
      </Link>
      <Link
        href="/"
        className="text-sm text-center font-bold text-white bg-[#191847] hover:bg-blue-950 p-4 rounded-3xl w-full transition-colors"
      >
        IR PARA A HOME
      </Link>
    </div>
  );
}
