function CurrencyList({ valutes }) {
  return (
    <div className="currency-list">
      {valutes.slice(0, 10).map((item) => {
        const diff = Number(item.Diff);

        const oldRate = Number(item.Rate) - diff;

        const percent =
          oldRate !== 0
            ? ((Math.abs(diff) / oldRate) * 100).toFixed(2)
            : 0;

        return (
          <div className="currency-card" key={item.id}>
            <div>
              <h3>{item.Ccy}</h3>
              <p>{item.CcyNm_UZ}</p>
            </div>

            <div className="right">
              <h3>
                {Number(item.Rate).toLocaleString()} UZS
              </h3>

              <p
                className={
                  diff >= 0 ? "positive" : "negative"
                }
              >
                {diff >= 0 ? "↑" : "↓"}
                {" "}
                {percent}%
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CurrencyList;