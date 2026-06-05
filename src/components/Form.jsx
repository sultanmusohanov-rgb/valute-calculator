import React, { useEffect, useState } from "react";

function Form({
  names,
  setSelectedValute,
  selectedValute,
  handleCalculate,
  inputValue,
  setInputValue,
  result,
}) {
  const [state, setState] = useState(0);
  useEffect(() => {
    setState(result ? result?.Rate * +inputValue : "");
  }, [result, inputValue, selectedValute]);
  return (
    <form onSubmit={handleCalculate}>
      <div>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          min={0}
          
        />
        <select
          name="valute"
          id="valute"
          value={selectedValute}
          onChange={(e) => {
            setSelectedValute(e.target.value);
            console.log(e.target.value);
          }}
        >
          {names?.map((name, index) => {
            return (
              <option value={name} key={index}>
                {name}
              </option>
            );
          })}
        </select>
      </div>

      <div>
        <input type="number" disabled value={state} />
        <select name="valute" id="valute" value={"uzs"} disabled>
          <option value="uzs">UZS</option>
        </select>
      </div>

      <button type="submit">Calculate</button>
    </form>
  );
}

export default Form;
