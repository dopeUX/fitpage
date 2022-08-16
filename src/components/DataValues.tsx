import { FC, useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import getDataValues from "../functions/getDataValues";
import Context from "../store/context";

const DataValues: FC<any> = () => {
  const [params, setParams] = useSearchParams();
  const [dataValues, setDataValues] = useState([]);
  const { state, dispatch }: any = useContext(Context);

  useEffect(() => {
    getDataValues(
      Number(params.get("id")),
      Number(params.get("index")),
      params.get("variable")!,
      dispatch,
    )
      .then((res) => {
        console.log(res);
        setDataValues(res);
      })
      .catch((err) => {
        alert(err);
      });
    console.log(params.get("variable"));
  }, []);

  return (
    <div className="dashboard-box value-table">
      {dataValues.map((x: any, i: number) => {
        return (
          <div>
            <h3 key={i}>{x}</h3>
            <hr></hr>
          </div>
        );
      })}
      {state?.loadingState && <h3>Now loading...</h3>}
    </div>
  );
};

export default DataValues;
