import { create } from "zustand";

export const useSearchStore = create((set) => ({
  search: "",
  year: "",
  month: "",
  setSearch: (s) => set((state) => ({ ...state, search: s })),
  setMonth: (m) => set((state) => ({ ...state, month: m })),
  setYear: (y) => set((state) => ({ ...state, year: y })),
  clearSearch: () => set({ search: "" }),
}));
