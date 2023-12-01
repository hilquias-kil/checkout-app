import { PlanOption } from "@/components/PlanOption";
import { Question } from "../icons/Question";

const data = [
  {
    id: 32,
    storeId: "anual_parcelado_iugu",
    title: "Premium Anual",
    description: "Parcelado",
    caption: "7 Dias Grátis",
    fullPrice: 600,
    discountAmmount: 60,
    discountPercentage: 0.1,
    periodLabel: "mês",
    period: "annually",
    discountCouponCode: null,
    order: 1,
    priority: 1,
    gateway: "iugu",
    splittable: true,
    installments: 12,
    acceptsCoupon: true,
  },
  {
    id: 33,
    storeId: "anual_a_vista_iugu",
    title: "Premium Anual",
    description: "À Vista",
    caption: "7 Dias Grátis",
    fullPrice: 7200,
    discountAmmount: 720,
    discountPercentage: 0.1,
    periodLabel: "ano",
    period: "annually",
    discountCouponCode: null,
    order: 2,
    priority: 2,
    gateway: "iugu",
    splittable: false,
    installments: 1,
    acceptsCoupon: true,
  },
];

export function Plans() {
  return (
    <>
      <div className="mb-8 flex flex-col gap-4">
        {data.map((plan) => (
          <PlanOption
            key={plan.id}
            id={plan.id.toString()}
            name="plan"
            title={plan.title}
            description={plan.description}
            fullPrice={plan.fullPrice}
            discountAmmount={plan.discountAmmount}
            discountPercentage={plan.discountPercentage}
            installments={plan.installments}
          />
        ))}
      </div>
      <p className="flex items-center gap-2 justify-center">
        <span>Sobre a cobrança</span>
        <Question />
      </p>
    </>
  );
}
