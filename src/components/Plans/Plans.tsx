"use client"

import { PlanOption } from "@/components/PlanOption";
import { Question } from "../icons/Question";
import { type Plans} from "./types"

type Props = {
  plans: Plans
}

export function Plans({plans}:Props) {
  return (
    <>
      <div className="mb-8 flex flex-col gap-4">
        {plans.map((plan) => (
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
