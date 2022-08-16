
import axios from "axios";

const callDetailedData = async (dataCardType:number|string, dispatch:any) => {
  // dispatch({type:'CHANGE LOADING STATE'});
  const config = {
    params:{
      id:dataCardType
    }
  }
  try {
    const result = await axios.get(
      "https://fitpage-backend.uxnation.repl.co/get-detailed-data",config
    );
    // dispatch({type:'CHANGE LOADING STATE'});
    return result.data;
  } catch (err) {
    // dispatch({type:'CHANGE LOADING STATE'});
    return err;
  }
};

export default callDetailedData;