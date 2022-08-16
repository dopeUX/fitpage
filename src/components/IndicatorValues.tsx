import { FC, useState } from "react";
import { useSearchParams } from "react-router-dom";

const IndicatorValues: FC<any> = () => {
  const [params, setParams] = useSearchParams();
  const [inputValue, setInputValue] = useState(params.get("value")!);

  return (
    <div className="dashboard-box">
      <h1>{params.get("title")}</h1>
      <h3>set parameters</h3>
      <div className="input-box">
        <h4>period</h4>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.currentTarget.value);
          }}
        />
      </div>
    </div>
  );
};

export default IndicatorValues;
