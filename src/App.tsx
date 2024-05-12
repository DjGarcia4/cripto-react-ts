import { useEffect } from "react";
import CriptoFormSearch from "./components/CriptoFormSearch";
import { useCryptoStore } from "./store";

const App = () => {
  const { fetchCryptos } = useCryptoStore();
  useEffect(() => {
    fetchCryptos();
  }, []);
  return (
    <div className="container">
      <h1 className=" text-white text-center text-5xl font-bold">
        Cotizador de <span className=" text-teal-400">Criptomonedas</span>
      </h1>
      <div className=" bg-white rounded-2xl p-5 mt-10">
        <CriptoFormSearch />
      </div>
    </div>
  );
};

export default App;
