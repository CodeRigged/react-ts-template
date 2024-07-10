import { StateCreator } from "zustand"
import { Nullable } from "~/types/utils"

export interface PendingState {
  isPending: boolean
  setIsPending: (pending: boolean, text?: Nullable<string>) => void
  text: Nullable<string>
}

export const createPendingSlice: StateCreator<PendingState> = set => ({
  isPending: false,
  text: null,
  setIsPending: (isPending, text = null) => set({ isPending, text }),
})

export interface ErrorState {
  error: Nullable<Error>
  setError: (error: Nullable<Error>) => void
}

export const createErrorSlice: StateCreator<ErrorState> = set => ({
  error: null,
  setError: error => set({ error }),
})
