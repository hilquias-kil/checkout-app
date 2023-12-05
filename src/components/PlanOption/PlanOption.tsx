import { formatCurrency } from "@/utils/formatCurrency";
import { formatPercentage } from "@/utils/formatPercentage";

type Props = {
  id: string;
  name: string;
  title: string;
  description: string;
  fullPrice: number;
  discountAmmount: number;
  discountPercentage: number;
  installments: number;
  checked: boolean;
  onChange: () => void;
};

export function PlanOption({
  id,
  name,
  title,
  description,
  fullPrice,
  discountAmmount,
  discountPercentage,
  installments,
  checked,
  onChange
}: Props) {
  return (
    <>
      <input
        className="hidden [&:checked+label]:after:bg-[#191847] [&:checked+label]:after:shadow-[0_0_0_2px_#C9C5D4]"
        type="radio"
        name={name}
        id={id}
        checked={checked}
        onChange={onChange}
      />
      <label
        htmlFor={id}
        data-testid="plan_label"
        className="block cursor-pointer border-[#191847] border-[1px] p-5 relative rounded-2xl after:content-[''] after:block after:w-3 after:h-3 after:bg-white after:rounded-full after:border-2 after:border-white after:shadow-[0_0_0_2px_#F4F3F6] after:absolute after:right-5 after:top-1/2 after:-translate-y-1/2"
      >
        <span className="text-[#191847] font-bold text-sm">
          {title} <span className="mx-1">|</span> {description}
        </span>
        <div className="flex items-center gap-4 pr-6">
          <span className="text-[#191847] text-xs">
            De {formatCurrency(fullPrice, "BRL")}{" "}
            <span className="mx-1">|</span> Por{" "}
            {formatCurrency(fullPrice - discountAmmount, "BRL")}
          </span>
          <span className="text-white text-[10px] bg-[#F5850B] inline-block py-[1px] px-2 rounded-lg">
            -{formatPercentage(discountPercentage)}
          </span>
        </div>
        <span className="text-[10px] text-[#F5850B]">
          {installments}x de{" "}
          {formatCurrency((fullPrice - discountAmmount) / installments, "BRL")}
        </span>
      </label>
    </>
  );
}
