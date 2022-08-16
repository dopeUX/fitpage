import axios from "axios";

const getDataValues = async(id:number|null,index:number, criteriaVariable:string, dispatch:any) =>{
  // dispatch({type:'CHANGE LOADING STATE'});
    const headers = {
        params:{
            id:id,
            index:index,
            variable:criteriaVariable
        }
    }
    try {
        const result = await axios.get(
          "https://fitpage-backend.uxnation.repl.co/get-detailed-data-values",headers
        );
        // dispatch({type:'CHANGE LOADING STATE'});
        return result.data;
      } catch (err) {
        // dispatch({type:'CHANGE LOADING STATE'});
        return err;
      }
}

export default getDataValues;