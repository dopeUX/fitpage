import { FC, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import callDetailedData from "../functions/getDetailedData";
import Context from "../store/context";

const DetailCardComponent: FC<any> = () => {
  const location: any = useLocation();
  const [data, setData] = useState<any>({});
  const [criteria, setCriteria] = useState([]);
  const [criteriaItems, setCriteriaItems] = useState<any>([]);
  const [dataValues, setDataValues] = useState<any>({});
  const { state, dispatch }: any = useContext(Context);

  useEffect(() => {
    setData(location.state);

    callDetailedData(location.state.id, dispatch)
      .then((res) => {
        console.log(res);
        setCriteria(res.criteria);
        setDataValues(res.dataValues);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  useEffect(() => {
    setCriteriaItems(setItems());
  }, [criteria]);

  const setItems = () => {
    let text: string;
    return criteria.map((x: any, i: number) => {
      if (x?.type === "plain_text") {
        text = x.text;
      } else {
        text = x.text;
        Object.keys(x.variable).forEach((variable, index) => {
          if (x.variable[variable].type === "value") {
            text = text.replace(
              variable,
              `<a href=${
                window.location.href +
                `/data-values?id=${location.state.id}&index=${i}&variable=${variable}`
              }>${x.variable[variable].values[dataValues[variable]]}</a>`,
            );
          } else {
            console.log(x.variable[variable].default_value);
            text = text.replace(
              variable,
              `<a href=${
                window.location.href +
                `/indicator-values?value=${x.variable[variable].default_value}&title=${location.state.name}&`
              }>${x.variable[variable].default_value}</a>`,
            );
          }
        });
      }
      return text;
    });
  };

  return (
    <div className="dashboard-box">
      <h2>{data.name}</h2>
      <h3 style={{ color: data.color }}>{data.tag}</h3>
      {criteriaItems.map((item: any, index: number) => {
        return (
          <div key={index} className="detail-card-component">
            <h3 dangerouslySetInnerHTML={{ __html: item }}></h3>

            <h4
              style={{
                display: index === criteria.length - 1 ? "none" : "block",
              }}
            >
              and
            </h4>
          </div>
        );
      })}
      {state?.loadingState && <h3>Now loading...</h3>}
    </div>
  );
};

export default DetailCardComponent;
