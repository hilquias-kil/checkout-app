import { z } from "zod";
import { validCPF } from "@/utils/validCPF";

export const FormSchema = z.object({
  creditCardNumber: z
    .string()
    .length(19, { message: "Insira um numero valido de cartão de crédito" }),
  creditCardExpirationDate: z
    .string()
    .length(5, { message: "Insira uma data valida" }),
  creditCardCVV: z
    .string()
    .length(3, { message: "Insira um codigo CVV valido" }),
  creditCardCPF: z
    .string()
    .length(14, { message: "Insira um CPF valido" })
    .refine((cpf) => validCPF(cpf), "Insira um CPF valido"),
  couponCode: z.string().length(9, { message: "Insira um cupom valido" }),
  installments: z
    .string()
    .min(1, { message: "escolha em quantas vezes quer parcelar" }),
});
