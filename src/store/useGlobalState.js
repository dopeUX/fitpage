import { useReducer } from "react"
import callData from "../functions/getDetailedData"

const initialState = {
    data:[],
    loadingState:false
}

const appReducer = (state, action) => {
   switch(action.type) {
      case 'LOAD_DATA':
       return {
         ...state,
         data:action.payload
       }
      case 'CHANGE LOADING STATE':
        return {
          ...state,
          loadingState:!state.loadingState
        } 
      default :{
        return state;
      }  
   }
}

const useGlobalState = () =>{
    const [state, dispatch] = useReducer(appReducer, initialState);
    return {state, dispatch};
}

export default useGlobalState;