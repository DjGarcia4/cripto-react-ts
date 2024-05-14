import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { getCryptos, fetchCurrentCryptoPrice } from "./services/CryptoServices";

import { CryptoPrice, Cryptocurrency, Pair } from "./types";

type CryptoStore = {
  cryptoCurrencies: Cryptocurrency[];
  result: CryptoPrice;
  loading: boolean;
  fetchCryptos: () => Promise<void>;
  fetchData: (pair: Pair) => Promise<void>;
};

export const useCryptoStore = create<CryptoStore>()(
  devtools((set) => ({
    cryptoCurrencies: [],

    result: {} as CryptoPrice,
    fetchCryptos: async () => {
      const cryptoCurrencies = await getCryptos();
      set(() => ({ cryptoCurrencies }));
    },
    loading: false,
    fetchData: async (pair) => {
      set(() => ({
        loading: true,
      }));
      const result = await fetchCurrentCryptoPrice(pair);
      set(() => ({
        result,
        loading: false,
      }));
    },
  }))
);
