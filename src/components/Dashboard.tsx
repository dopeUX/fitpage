import { useEffect, useContext, FC } from "react";
import Context from "../store/context";
import DataCard from "./Datacard";
import callData from "../functions/getData";

interface dataProps {
  id: number;
  name: string;
  tag: string;
  color: string;
  criteria: Array<any>;
}

const Dashboard: FC<any> = () => {
  const { state, dispatch }: any = useContext(Context);

  useEffect(() => {
    if (state.data.length === 0) {
      callData(state, dispatch)
        .then((res) => {
          dispatch({
            type: "LOAD_DATA",
            payload: res,
          });
        })
        .catch((err) => {
          alert(err);
        });
    }
  }, []);

  return (
    <div className="dashboard-box">
      {state.data.map((item: dataProps, index: number) => {
        return <DataCard key={index} data={item} />;
      })}
      {state?.loadingState && <h3>Now loading...</h3>}
    </div>
  );
};

export default Dashboard;
