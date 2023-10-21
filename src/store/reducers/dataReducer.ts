import { DataAction, DataActionType } from "../types";

const initialState = {
    isLoading: false,
    data: {},
  };
  
  export const dataReducer = (state = initialState, action: DataAction) => {    
    switch (action.type) {
      case DataActionType.GET_DATA:
        return {
          data: action.data,
          isLoading: action.isLoading,
        };
      default:
        return state;
    }
  };