import { create } from "zustand";

type QuoteState = {
  open: boolean;
  preset: string;
  navOpen: boolean;
  setOpen: (open: boolean) => void;
  openWith: (preset?: string) => void;
  setNavOpen: (navOpen: boolean) => void;
};

export const useQuote = create<QuoteState>((set) => ({
  open: false,
  preset: "",
  navOpen: false,
  setOpen: (open) => set({ open }),
  openWith: (preset = "") => set({ open: true, preset, navOpen: false }),
  setNavOpen: (navOpen) => set({ navOpen }),
}));
