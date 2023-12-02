"use client"

import { PlanOption } from "@/components/PlanOption";
import { Question } from "../icons/Question";
import { Plan, type Plans} from "./types"
import { useStore } from "@/store/store";
import { useEffect } from "react";

type Props = {
  plans: Plans
}

export function Plans({plans}:Props) {
  const planSelected = useStore((state) => state.planSelected)
  const setPlan = useStore((state) => state.setPlan)

  const handleChange = (plan: Plan) => {
    setPlan(plan)
  }

  useEffect(()=> {
    setPlan(plans[0])
  }, [])

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
            checked={planSelected?.id === plan.id}
            onChange={() => handleChange(plan)}
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
