import { create } from "zustand";
import axios from "axios";
export const useCryptoStore = create(() => ({
  fetchCryptos: () => {
    console.log("Crytos");
  },
}));
