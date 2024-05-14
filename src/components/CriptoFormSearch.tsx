import { useState } from "react";
import { currencies } from "../data";
import { useCryptoStore } from "../store";
import { Pair } from "../types";
import { toast } from "react-toastify";

const CriptoFormSearch = () => {
  const { cryptoCurrencies, fetchData } = useCryptoStore();
  const [pair, setPair] = useState<Pair>({
    currency: "",
    criptocurrency: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPair({
      ...pair,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(pair).includes("")) {
      toast.error("Todos los campos son obligatorios");
      return;
    }
    fetchData(pair);
  };
  return (
    <form className=" space-y-4 p-3" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label htmlFor="currency" className=" text-2xl font-bold text-gray-600">
          Moneda:
        </label>
        <select
          name="currency"
          id="currency"
          className=" bg-gray-200 rounded-lg text-xl p-2"
          onChange={handleChange}
          value={pair.currency}
        >
          <option value="">--Selecciona--</option>
          {currencies.map((currency) => (
            <option value={currency.code} key={currency.code}>
              {currency.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="criptocurrency"
          className=" text-2xl font-bold text-gray-600"
        >
          Criptomoneda:
        </label>
        <select
          name="criptocurrency"
          id="criptocurrency"
          className=" bg-gray-200 rounded-lg text-xl p-2"
          onChange={handleChange}
          value={pair.criptocurrency}
        >
          <option value="">--Selecciona--</option>
          {cryptoCurrencies.map((crypto) => (
            <option value={crypto.CoinInfo.Name} key={crypto.CoinInfo.Name}>
              {crypto.CoinInfo.FullName}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className=" bg-teal-400 w-full rounded-lg p-2 text-xl font-bold text-white hover:bg-teal-600 transition-all"
      >
        Buscar
      </button>
    </form>
  );
};

export default CriptoFormSearch;
