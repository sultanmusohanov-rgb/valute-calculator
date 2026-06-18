import { useEffect, useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import { getFromApi } from "./utils/fetchApi";
import Result from "./components/Result";
import CurrencyList from "./components/CurrencyList";

let baseApi = "https://cbu.uz/uz/arkhiv-kursov-valyut/json/";

function App() {
  const [valutes, setValutes] = useState([]);
  const [names, setNames] = useState([]);
  const [result, setResult] = useState(0);
  const [selectedValute, setSelectedValute] = useState("USD");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    getFromApi(baseApi, setValutes);
  }, []);

  useEffect(() => {
    if (valutes.length > 0) {
      setNames(valutes.map((el) => el.Ccy));
    }
  }, [valutes]);

  function handleCalculate(e) {
    e.preventDefault();

    setResult(valutes.find((item) => item.Ccy === selectedValute));
  }

  return (
    <div className="container">
      <Header />
      <Form
        names={names}
        setSelectedValute={setSelectedValute}
        selectedValute={selectedValute}
        handleCalculate={handleCalculate}
        inputValue={inputValue}
        setInputValue={setInputValue}
        result={result}
      />
      {/* <Result /> */}

      <CurrencyList valutes={valutes} />
    </div>
  );
}

export default App;
