import { Plan } from '@/components/Plans/types'
import { create } from 'zustand'

interface StoreState {
  planSelected: Plan | null
  setPlan: (plan: Plan) => void
}

export const useStore = create<StoreState>()((set) => ({
  planSelected: null,
  setPlan: (plan) => set(() => ({ planSelected: plan })),
}))