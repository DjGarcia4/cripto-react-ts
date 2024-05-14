import { useMemo } from "react";
import { useCryptoStore } from "../store";
import Spinner from "./Spinner";

const CryptoPriceDisplay = () => {
  const { result, loading } = useCryptoStore();

  const hasResult = useMemo(
    () => !Object.values(result).includes(""),
    [result]
  );

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        hasResult && (
          <div className=" mt-10">
            <h2 className="font-bold text-3xl  text-center">Cotización</h2>
            <div className="flex justify-center items-center gap-12">
              <img
                src={`https://cryptocompare.com/${result.IMAGEURL}`}
                alt="Imagen Cryptomoneda"
                className=" w-52"
              />
              <div className=" space-y-2">
                <p className="text-xl">
                  El Precio es de:{" "}
                  <span className=" font-black">{result.PRICE}</span>
                </p>
                <p className="text-xl">
                  Precio más alto del día:{" "}
                  <span className=" font-black">{result.HIGHDAY}</span>
                </p>
                <p className="text-xl">
                  Precio más bajo del día:{" "}
                  <span className=" font-black">{result.LOWDAY}</span>
                </p>
                <p className="text-xl">
                  Variación últimas 24 horas:{" "}
                  <span className=" font-black">{result.CHANGEPCT24HOUR}</span>
                </p>
                <p className="text-xl">
                  Última actualización:{" "}
                  <span className=" font-black">{result.LASTUPDATE}</span>
                </p>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default CryptoPriceDisplay;
