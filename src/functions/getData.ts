import axios from "axios";

const callData = async (state:any, dispatch:any) => {
  
    try {
      const result = await axios.get(
        "https://fitpage-backend.uxnation.repl.co/get-data"
      );
      // dispatch({type:'CHANGE LOADING STATE'});
      return result.data;
    } catch (err) {
      // dispatch({type:'CHANGE LOADING STATE'});
      return err;
    }
  };
export default callData;  
  