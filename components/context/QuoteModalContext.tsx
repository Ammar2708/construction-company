"use client";

import { createContext, ReactNode, useContext, useState } from "react";

type QuoteModalContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const ModalContext = createContext<QuoteModalContextValue | null>(null);

export const QuoteModalProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ open, setOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useQuoteModal = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useQuoteModal must be used inside QuoteModalProvider");
  }

  return context;
};
