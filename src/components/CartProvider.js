"use client";
import { createContext, useContext, useMemo, useState } from "react";
import { ITEMS } from "@/data/menu";

const Ctx = createContext(null);
export const useCart = () => useContext(Ctx);

export default function CartProvider({ children }) {
  const [qty, setQty] = useState({});
  const [open, setOpen] = useState(false);

  const value = useMemo(() => {
    const lines = Object.entries(qty).map(([id, q]) => ({ ...ITEMS[id], qty: q }));
    return {
      qty, open, setOpen, lines,
      count: lines.reduce((s, l) => s + l.qty, 0),
      subtotal: lines.reduce((s, l) => s + l.qty * l.price, 0),
      add: (id) => setQty((c) => ({ ...c, [id]: (c[id] || 0) + 1 })),
      dec: (id) =>
        setQty((c) => {
          const n = { ...c };
          if ((n[id] || 0) <= 1) delete n[id]; else n[id] -= 1;
          return n;
        }),
      clear: () => setQty({}),
    };
  }, [qty, open]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
