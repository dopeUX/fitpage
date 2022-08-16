import { FC } from "react";
import { Link } from "react-router-dom";

const DataCard: FC<any> = (props) => {
  return (
    <Link
      to={"/" + props.data.name}
      state={props.data}
      style={{ textDecoration: "none" }}
    >
      <div className="data-card" onClick={() => {}}>
        <h3>{props.data.name}</h3>
        <h4 style={{ color: props.data.color }}>{props.data.tag}</h4>
        <div className="data-card-divider"></div>
      </div>
    </Link>
  );
};

export default DataCard;
