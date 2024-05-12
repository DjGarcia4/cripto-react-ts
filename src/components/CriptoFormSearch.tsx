import { currencies } from "../data";

const CriptoFormSearch = () => {
  return (
    <form className=" space-y-4 p-3">
      <div className="flex flex-col">
        <label htmlFor="currency" className=" text-2xl font-bold text-gray-600">
          Moneda:
        </label>
        <select
          name="currency"
          id="currency"
          className=" bg-gray-200 rounded-lg text-xl p-2"
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
        >
          <option value="">--Selecciona--</option>
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
