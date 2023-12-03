import { Option } from "@/components/SelectField";
import { formatCurrency } from "./currencyFormat";

export function generateInstallments(
  installments: number = 0,
  fullPrice: number = 0,
  discountAmmount: number = 0
): Option[] {
  const installmentsList: Option[] = [];

  for (let index = 1; index <= installments; index++) {
    installmentsList.push({
      value: index.toString(),
      label: `${index}x de ${formatCurrency((fullPrice - discountAmmount) / index, "BRL")}`,
    });
  }

  return installmentsList;
}
